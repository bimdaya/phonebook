/**
 * Filter list items using the query
 * @param {string} query search query
 * @param {string} list object list
 * @param {string} filters object keys
 * @return {object} filtered objects
 */
export const searchQuery = (query, list, filters) => Array.from(list).filter((item) => {
  const regex = new RegExp(`^${query}`, 'i');

  for (const filter of filters) {
    if (regex.test(item[filter])) {
      return true;
    }
  }
  return false;
});

/**
 * Validate input string to only accept letters
 * @param {string} value input value
 * @return {boolean} valid/invalid
 */
export const validateInputString = (value) => {
  const regex = new RegExp(/^[a-zA-Z\s]*$/);

  if (regex.test(value)) {
    return true;
  }
  return false;
};
