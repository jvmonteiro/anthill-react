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
