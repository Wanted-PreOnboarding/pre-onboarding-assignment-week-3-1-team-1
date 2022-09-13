import { Octokit } from 'octokit';

const octokit = new Octokit({
  auth: process.env.GITHUB_API_ACCESS_TOKEN,
});

class ApiModel {
  async getList() {
    try {
      const result = await octokit.request('GET /repos/{owner}/{repo}/issues', {
        owner: 'Angular',
        repo: 'Angular-cli',
      });
      return result.data;
    } catch (error) {
      alert(`Error! Status: ${error.status}. Message: ${error.response.data.message}`);
    }
  }

  async getItem(number) {
    try {
      const result = await octokit.request('GET /repos/{owner}/{repo}/issues/{number}', {
        owner: 'Angular',
        repo: 'Angular-cli',
        number: number,
      });
      return result.data;
    } catch (error) {
      alert(`Error! Status: ${error.status}. Message: ${error.response.data.message}`);
    }
  }
}

export default new ApiModel();
