const fetch = require('isomorphic-unfetch')

const METHOD_GET = 'GET'

const request = (path, options) => fetch(path, options).then(res => res.json())

const prepareFetch = (method, accessToken, data) => ({
  method,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${accessToken}`,
  },
  body: JSON.stringify(data),
})

const http = Object.assign(fetch, {
  get: (path, accessToken, data) => request(path, prepareFetch(METHOD_GET, accessToken, data)),
})

module.exports = http
