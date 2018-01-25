const METHOD_GET = 'GET'

const request = (path, options) => fetch(`${SPOTIFY_API_URL}${path}`, options).then(res => res.json())

const prepareFetch = method => ({
  method,
  headers: new Headers({
    'Content-Type': 'application/json',
  }),
})

const http = Object.assign(fetch, {
  get: path => request(path, prepareFetch(METHOD_GET)),
})

export default http
