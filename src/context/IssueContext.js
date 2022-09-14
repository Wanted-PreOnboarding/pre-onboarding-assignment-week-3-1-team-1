import React, { createContext, useReducer, useContext } from 'react';

const initialState = {
  issues: {
    loading: false,
    data: null,
    error: null,
  },
  issueDetail: {
    loading: true,
    data: null,
    error: null,
  },
};

const loadingState = {
  loading: true,
  data: null,
  error: null,
};

// onSuccess
const success = data => ({
  loading: false,
  data,
  error: null,
});

// onError
const error = error => ({
  loading: false,
  data: null,
  error: error,
});

// reducer
function IssuesReducer(state, action) {
  switch (action.type) {
    case 'GET_ISSUES_PENDING':
      return {
        ...state,
        issues: loadingState,
      };
    case 'GET_ISSUES_SUCCESS':
      return {
        ...state,
        issues: success(action.data),
      };
    case 'GET_ISSUES_ERROR':
      return {
        ...state,
        issues: error(action.error),
      };
    case 'GET_ISSUES_DETAIL_PENDING':
      return {
        ...state,
        issueDetail: loadingState,
      };
    case 'GET_ISSUES_DETAIL_SUCCESS':
      return {
        ...state,
        issueDetail: success(action.data),
      };
    case 'GET_ISSUES_DETAIL_ERROR':
      return {
        ...state,
        issueDetail: error(action.error),
      };
    default:
      return state;
  }
}

//  Context 생성
const IssuesStateContext = createContext(null);
const IssuesDispatchContext = createContext(null);

// 위에서 선언한 두가지 Context 들의 Provider 로 감싸주는 컴포넌트
export function IssuesProvider({ children }) {
  const [state, dispatch] = useReducer(IssuesReducer, initialState);
  return (
    <IssuesStateContext.Provider value={state}>
      <IssuesDispatchContext.Provider value={dispatch}>{children}</IssuesDispatchContext.Provider>
    </IssuesStateContext.Provider>
  );
}

// State를 쉽게 조회 할 수 있게 해주는 커스텀 Hook
export function useIssuesState() {
  const state = useContext(IssuesStateContext);

  if (!state) {
    throw new Error('Cannot find IssuesProvider');
  }
  return state;
}

// Dispatch를 쉽게 사용 할 수 있게 해주는 커스텀 Hook
export function useIssuesDispatch() {
  const dispatch = useContext(IssuesDispatchContext);
  if (!dispatch) {
    throw new Error('Cannot find IssuesProvider');
  }
  return dispatch;
}
