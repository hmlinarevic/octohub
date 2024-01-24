/**
 * Extracts unique values from an array of objects based on a specified key.
 *
 * @param {Object[]} array - An array of objects to be processed.
 * @param {string} key - The key in the objects to extract values from.
 * @returns {any[]} An array of unique values extracted from the specified key of each object.
 */
export const getUniqueValuesByKey = (array, key) => {
  return array.reduce((uniqueValues, item) => {
    const value = item[key];
    if (!uniqueValues.includes(value)) {
      uniqueValues.push(value);
    }
    return uniqueValues;
  }, []);
};

/**
 * Filters an array of objects based on a specified attribute and a search term.
 *
 * @param {Object[]} data - The array of objects to filter.
 * @param {string} attribute - The attribute of the object to apply the filter on.
 * @param {string} searchTerm - The term to search for within the specified attribute.
 * @returns {Object[]} An array of objects where the specified attribute contains the search term.
 */
export const filterByAttribute = (data, attribute, searchTerm) => {
  const lowerCaseSearchTerm = searchTerm.toLowerCase();
  return data.filter((entry) => {
    const attributeValue = entry[attribute];
    return (
      attributeValue &&
      attributeValue.toLowerCase().includes(lowerCaseSearchTerm)
    );
  });
};

/**
 * Modifies the first alphabetical character in a given string.
 *
 * @param {string} str - The string to be processed.
 * @param {boolean} [capitalize=true] - If true, capitalizes the first letter; if false, makes it lowercase.
 * @returns {string} The string with the first alphabetical character modified, if present.
 */
export const modifyFirstLetter = (str, capitalize = true) => {
  // check if the string is empty or not
  if (!str) return str;

  // find the first alphabetical character
  const firstAlphaCharMatch = str.match(/[a-zA-Z]/);
  if (!firstAlphaCharMatch) return str; // no alphabetical character found

  const index = firstAlphaCharMatch.index;

  // modify the first letter based on the 'capitalize' parameter
  const modifiedLetter = capitalize
    ? str.charAt(index).toUpperCase()
    : str.charAt(index).toLowerCase();

  // reconstruct the string with the modified first letter
  return str.substring(0, index) + modifiedLetter + str.substring(index + 1);
};
