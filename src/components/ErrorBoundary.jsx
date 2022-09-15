// react-error-boundary에서 코드의 상당부분을 참고하였습니다
// https://github.com/bvaughn/react-error-boundary

import React, { useState } from 'react';
import PropType from 'prop-types';

const initialState = { error: null };

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  static getDerivedStateFromError(error) {
    // 다음 렌더링에서 폴백 UI가 보이도록 상태를 업데이트 합니다.
    return { error };
  }

  componentDidCatch(error, errorInfo) {
    // 에러 리포팅 서비스에 에러를 기록할 수도 있습니다.
    this.props.onError?.(error, errorInfo);
  }

  render() {
    const { error } = this.state;
    const { fallback, FallbackComponent } = this.props;

    if (error !== null) {
      const props = { error };

      if (React.isValidElement(fallback)) {
        return fallback;
      } else if (FallbackComponent) {
        return <FallbackComponent {...props} />;
      } else {
        throw new Error('ErrorBoundary는 FallbackComponent가 필요합니다.');
      }
    }

    return this.props.children;
  }
}
ErrorBoundary.propTypes = {
  children: PropType.node.isRequired,
  fallback: PropType.node,
  FallbackComponent: PropType.func,
  onError: PropType.func,
};

function useErrorHandler(givenError = null) {
  const [error, setError] = useState(null);

  if (givenError !== null) throw givenError;
  if (error !== null) throw error;

  return setError;
}

export { useErrorHandler };
