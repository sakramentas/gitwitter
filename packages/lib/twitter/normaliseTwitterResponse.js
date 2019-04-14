/**
 * Normalises the response retrieved from Twitter API with relevant data.
 * @param  {object} {statuses=[]}
 */
export const normaliseTwitterResponse = ({ statuses = [] }) =>
  statuses.map(
    ({
      id,
      text,
      user: { name: userName, screen_name: nickName, followers_count: followers },
      created_at: createdAt,
    }) => ({
      id,
      text,
      user: {
        userName,
        nickName,
        followers,
      },
      createdAt,
    }),
  );
