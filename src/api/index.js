import { Octokit } from 'octokit';

const octokit = new Octokit({
  auth: process.env.GITHUB_API_ACCESS_TOKEN,
});

class ApiModel {
  async getList(dispatch) {
    dispatch({ type: 'GET_ISSUES_PENDING' });
    try {
      const result = await octokit.request('GET /repos/{owner}/{repo}/issues', {
        owner: 'Angular',
        repo: 'Angular-cli',
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
