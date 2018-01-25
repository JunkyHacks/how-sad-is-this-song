const METHOD_GET = 'GET'

const request = (path, options) => fetch(path, options).then(res => res.json())

const prepareFetch = (method, headers, data) => ({
  method,
  headers: new Headers({
    'Content-Type': 'application/json',
    Authorization: headers.authorization,
  }),
  body: JSON.stringify(data),
})

const http = Object.assign(fetch, {
  get: (path, headers, data) => request(path, prepareFetch(METHOD_GET, headers, data)),
})

export default http
