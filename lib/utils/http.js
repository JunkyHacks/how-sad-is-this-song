const METHOD_GET = 'GET'

const request = (path, options) => fetch(path, options).then(res => res.json())

const prepareFetch = (method, headers) => ({
  method,
  headers: new Headers({
    'Content-Type': 'application/json',
    Authorization: headers.authorization,
  }),
})

const http = Object.assign(fetch, {
  get: (path, headers, payload) => request(path, prepareFetch(METHOD_GET, headers, payload)),
})

export default http
