import { request } from '@octokit/request';

export const authorization = {
  headers: {
    authorization: `token ${process.env.NEXT_PUBLIC_OAUTH_TOKEN}`,
  },
};
export const getUserRepos = async (username) => {
  const req = await request('GET /users/{username}/repos', {
    username,
    ...authorization,
  });
  if (req.error) {
    console.log(req.error);
    return false;
  }

  return { data: req.data, length: req.data.length, status: req.status };
};

export const getRepoInfo = async (owner, repo) => {
  const req = await Promise.all([
    request('GET /repos/{owner}/{repo}/commits', {
      owner,
      repo,
      ...authorization,
    }),
    request('GET /repos/{owner}/{repo}/branches', {
      owner,
      repo,
      ...authorization,
    }),
  ]);
  const [req1, req2] = req;
  if (req1.error) {
    console.log(req1.error);
  }
  if (req2.error) {
    console.log(req2.error);
    return false;
  }
  return [
    { data: req1.data, length: req1.data.length, status: req1.status },
    { data: req2.data, length: req2.data.length, status: req2.status },
  ];
};
