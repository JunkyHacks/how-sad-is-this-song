/**
 * Turns object of KVs into a string of query parameters
 * @param {object} queryParams KV object for queries on the request
 * @returns {string} string of query parameters
 */
module.exports = queryParams =>
  `?${Object.entries(queryParams)
    .map(kv => kv.join('='))
    .join('&')}`
