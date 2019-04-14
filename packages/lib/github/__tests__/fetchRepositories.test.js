import fetch from 'node-fetch';
import { fetchRepositories } from '../fetchRepositories';

jest.mock('../normaliseGitHubResponse');

jest.mock('node-fetch', () =>
  jest.fn(
    () =>
      new Promise(resolve =>
        resolve({
          json: jest.fn(() => ''),
        }),
      ),
  ),
);

describe('fetchRepositories', () => {
  it('should call node-fetch with the Github repositories search endpoint as parameter', () => {
    fetchRepositories('test-query');

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(
      'https://api.github.com/search/repositories?q=test-query',
    );
  });
});
