const initialState = {
  issues: {
    loading: false,
    data: null,
    error: null,
  },
  issueDetail: {
    loading: false,
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
