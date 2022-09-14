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
