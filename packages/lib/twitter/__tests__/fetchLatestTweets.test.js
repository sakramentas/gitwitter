import 'babel-polyfill';

import fetch from 'node-fetch';
import { fetchLatestTweets } from '../fetchLatestTweets';
import { getBearerToken } from '../getBearerToken';
import { normaliseTwitterResponse } from '../normaliseTwitterResponse';

jest.mock('../getBearerToken');
jest.mock('../normaliseTwitterResponse');

jest.mock('node-fetch', () =>
  jest.fn(
    () =>
      new Promise(resolve =>
        resolve({
          json: jest.fn(() => 'mocked fetch response'),
        }),
      ),
  ),
);

describe('fetchRepositories', () => {
  it('should call node-fetch with the Twitter API search endpoint and config object as parameters', async () => {
    getBearerToken.mockImplementationOnce(() => 'mocked getBearerToken');

    await fetchLatestTweets('test-query', {
      consumerKey: 'test-consumer-key',
      consumerSecret: 'test-consumer-secret',
    });

    expect(getBearerToken).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(
      'https://api.twitter.com/1.1/search/tweets.json?q=test-query&count=10',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
          Authorization: `Bearer mocked getBearerToken`,
        },
      },
    );
    expect(normaliseTwitterResponse).toHaveBeenCalledWith('mocked fetch response');
  });
});
