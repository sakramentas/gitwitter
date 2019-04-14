/**
 * Normalises GitHub Response with relevant data.
 * @param  {object} {items=[]}
 */
export const normaliseGitHubResponse = ({ items = [] }) =>
  items.map(({ id, name, owner: { login: ownerId }, description, language }) => ({
    id,
    name,
    ownerId,
    description,
    language,
  }));
