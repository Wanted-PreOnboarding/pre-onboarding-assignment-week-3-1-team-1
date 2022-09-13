import { Octokit } from 'octokit';

const octokit = new Octokit({
  auth: process.env.GITHUB_API_ACCESS_TOKEN,
});

class ApiModel {
  async getData() {
    return await octokit.request('GET /repos/{owner}/{repo}/issues', {
      owner: 'octocat',
      repo: 'Spoon-Knife',
    });
  }
}

export default new ApiModel();
