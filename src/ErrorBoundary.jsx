import React from 'react';
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
    const { FallbackComponent } = this.state;

    if (error !== null) {
      const props = { error };

      if (FallbackComponent) {
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
  onError: PropType.func,
};
