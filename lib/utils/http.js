import fetch from 'isomorphic-unfetch'

const METHOD_GET = 'GET'

const request = (path, options) => fetch(path, options).then(res => res.json())

const prepareFetch = (method, headers, data) => ({
  method,
  headers: {
    'Content-Type': 'application/json',
    Authorization: headers.authorization,
  },
  body: JSON.stringify(data),
})

const http = Object.assign(fetch, {
  get: (path, headers, data) => request(path, prepareFetch(METHOD_GET, headers, data)),
})

/**
 * Turns object of KVs into a string of query parameters
 * @param {object} queryParams KV object for queries on the request
 * @returns {string} string of query parameters
 */
export const prepareQueries = queryParams =>
  `?${Object.entries(queryParams)
    .map(kv => kv.join('='))
    .join('&')}`

export default http
