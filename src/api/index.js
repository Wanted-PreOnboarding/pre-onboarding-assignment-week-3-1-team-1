class ApiModel {
  constructor() {
    this.baseUrl = 'https://api.github.com/repos/angular/angular-cli/issues';
    this.queries = '?state=open&sort=comments&per_page=10';
    this.headers = {
      Authorization: `auth ${process.env.REACT_APP_GITHUB_API_ACCESS_TOKEN}`,
    };
  }

  async getList(dispatch, page) {
    // 무한 스크롤 구현 중 새로 데이터를 불러올 때마다 화면 최상단으로 올라가서 해당 dispatch를 if문으로 감쌌습니다.
    if (page < 2) {
      dispatch({ type: 'GET_ISSUES_PENDING' });
    }
    try {
      const headers = this.headers;
      const result = await fetch(this.baseUrl + this.queries + `&page=${page}`, { headers }).then(
        data => data.json()
      );
      dispatch({ type: 'GET_ISSUES_SUCCESS', data: result });
      return result;
    } catch (error) {
      dispatch({ type: 'GET_ISSUES_ERROR', error: error });
      alert(`Error! Status: ${error.status}. Message: ${error.response.data.message}`);
    }
  }

  async getItem(dispatch, number) {
    dispatch({ type: 'GET_ISSUES_DETAIL_PENDING' });
    try {
      const headers = this.headers;
      const result = await fetch(this.baseUrl + `/${number}`, { headers }).then(data =>
        data.json()
      );
      dispatch({ type: 'GET_ISSUES_DETAIL_SUCCESS', data: result });
      return result;
    } catch (error) {
      dispatch({ type: 'GET_ISSUES_DETAIL_ERROR', error: error });
      alert(`Error! Status: ${error.status}. Message: ${error.response.data.message}`);
    }
  }
}

export default new ApiModel();
