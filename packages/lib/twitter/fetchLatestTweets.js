import fetch from "node-fetch";
import { getBearerToken } from "./getBearerToken";
import { normaliseTwitterResponse } from "./normaliseTwitterResponse";

const TWITTER_API_ENDPOINT = "https://api.twitter.com";

/**
 * Fetches the latest tweets from a given subject.
 * @param  {string} query='reactive' Query to be searched on Twitter Search API
 */
export const fetchLatestTweets = async (
  query,
  { consumerKey, consumerSecret },
  normalise
) => {
  const bearerToken = await getBearerToken(consumerKey, consumerSecret);
  const searchEndpoint = `${TWITTER_API_ENDPOINT}/1.1/search/tweets.json?q=${query}&count=10`;

  return fetch(searchEndpoint, {
    method: "GET",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      Authorization: `Bearer ${bearerToken}`
    }
  })
    .then(res => res.json())
    .then(json => (normalise ? normaliseTwitterResponse(json) : json.statuses))
    .catch(err => console.log(err));
};
