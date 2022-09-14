import { Octokit } from 'octokit';

const octokit = new Octokit({
  auth: process.env.GITHUB_API_ACCESS_TOKEN,
});

class ApiModel {
  async getList(dispatch, page) {
    // 무한 스크롤 구현 중 새로 데이터를 불러올 때마다 화면 최상단으로 올라가서 해당 dispatch를 if문으로 감쌌습니다.
    if (page < 2) {
      dispatch({ type: 'GET_ISSUES_PENDING' });
    }
    try {
      const result = await octokit.request('GET /repos/{owner}/{repo}/issues', {
        owner: 'Angular',
        repo: 'Angular-cli',
        per_page: 10,
        page: page,
        sort: 'comments',
      });
      dispatch({ type: 'GET_ISSUES_SUCCESS', data: result.data });
      return result.data;
    } catch (error) {
      dispatch({ type: 'GET_ISSUES_ERROR', error: error });
      alert(`Error! Status: ${error.status}. Message: ${error.response.data.message}`);
    }
  }

  async getItem(dispatch, number) {
    dispatch({ type: 'GET_ISSUES_DETAIL_PENDING' });
    try {
      const result = await octokit.request('GET /repos/{owner}/{repo}/issues/{number}', {
        owner: 'Angular',
        repo: 'Angular-cli',
        number: number,
      });
      dispatch({ type: 'GET_ISSUES_DETAIL_SUCCESS', data: result.data });
      return result.data;
    } catch (error) {
      dispatch({ type: 'GET_ISSUES_DETAIL_ERROR', error: error });
      alert(`Error! Status: ${error.status}. Message: ${error.response.data.message}`);
    }
  }
}

export default new ApiModel();
