import 'babel-polyfill';

import fetch from 'node-fetch';
import { getBearerToken } from '../getBearerToken';

// jest.mock('../getBearerToken');

jest.mock('node-fetch', () =>
  jest.fn(
    () =>
      new Promise(resolve =>
        resolve({
          json: jest.fn(() => ({
            access_token: 'mocked-access-token',
          })),
        }),
      ),
  ),
);

describe('fetchRepositories', () => {
  it('should call node-fetch with the Twitter API oauth token endpoint and config object as parameters', async () => {
    await getBearerToken('test-consumer-key', 'test-consumer-secret');

    expect(fetch).toHaveBeenCalledWith('https://api.twitter.com/oauth2/token', {
      body: 'grant_type=client_credentials',
      headers: {
        Authorization: 'Basic dGVzdC1jb25zdW1lci1rZXk6dGVzdC1jb25zdW1lci1zZWNyZXQ=',
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
      method: 'POST',
    });
  });

  it('should return the bearer token from the response', async () => {
    const bearerToken = await getBearerToken('test-consumer-key', 'test-consumer-secret');

    expect(bearerToken).toBe('mocked-access-token');
  });
});
