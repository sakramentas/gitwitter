import fetch from 'node-fetch';
import { normaliseGitHubResponse } from './normaliseGitHubResponse';

const GITHUB_API_ENDPOINT = 'https://api.github.com';

/**
 * Fetches a list of repos that matches the search.
 * @param  {string} query='reactive' Query to be searched on GitHub API
 */
export const fetchRepositories = (query, normalise) => {
  const gitHubRepoSearchEndpoint = `${GITHUB_API_ENDPOINT}/search/repositories?q=${query}`;

  return fetch(gitHubRepoSearchEndpoint)
    .then(res => res.json())
    .then(json => (normalise ? normaliseGitHubResponse(json) : json.items))
    .catch(err => console.log(err));
};
