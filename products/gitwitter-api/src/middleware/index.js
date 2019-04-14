import { fetchLatestTweets } from '@gitwitter/lib-twitter';
import { fetchRepositories } from '@gitwitter/lib-github';

/**
 * GitHub + Twitter search Middleware.
 * @param  {object} req Request object passed by express
 * @param  {object} res Response object passed by express
 */
export const searchMiddleware = (req, res) => {
  const { TWITTER_CONSUMER_KEY, TWITTER_CONSUMER_SECRET } = process.env;
  const twitterConfig = {
    consumerKey: TWITTER_CONSUMER_KEY,
    consumerSecret: TWITTER_CONSUMER_SECRET,
  };
  const {
    query: { q, normalise = false },
  } = req;

  if (!TWITTER_CONSUMER_KEY || !TWITTER_CONSUMER_SECRET) {
    console.log(
      '>>>>> Please specify the Twitter Authentication keys in the .env file <<<<<',
    );
  }

  if (!q) return res.status(400).send({ status: 400, message: 'Bad Request' });

  return fetchRepositories(q, normalise).then(async repoList => {
    const response = await Promise.all(
      repoList.map(async repo => {
        const { name: repoName, language } = repo;
        const searchQuery = `${repoName} ${language}`;
        const repoTweets = await fetchLatestTweets(searchQuery, twitterConfig, normalise);

        return {
          ...repo,
          tweets: repoTweets,
        };
      }),
    );

    return res.status(200).send(response);
  });
};
