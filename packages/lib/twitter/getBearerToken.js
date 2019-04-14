import fetch from 'node-fetch';

const TWITTER_API_ENDPOINT = 'https://api.twitter.com';

/**
 * Fetches an a valid Bearer Token from Twitter API.
 * @param  {string} consumerKey  Twitter consumer key
 * @param  {string} consumerSecret Twitter consumer secret
 */
export const getBearerToken = async (consumerKey, consumerSecret) => {
  const credentials = `${consumerKey}:${consumerSecret}`;
  const credentialsBase64Encoded = new Buffer(credentials).toString('base64');
  const getBearerTokenEndpoint = `${TWITTER_API_ENDPOINT}/oauth2/token`;
  const { access_token: accessToken } = await fetch(getBearerTokenEndpoint, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${credentialsBase64Encoded}`,
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    },
    body: 'grant_type=client_credentials',
  })
    .then(res => res.json())
    .then(json => json)
    .catch(err => console.log(err));

  return accessToken;
};
