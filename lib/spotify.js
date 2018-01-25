import http from 'utils/http'

const SPOTIFY_API_URL = 'https://api.spotify.com/v1/'

const preparePath = ({ ...queryParams }) => Object.entries(queryParams).reduce(e => `?${e.join('=')}`)
const joinPath = params => `${SPOTIFY_API_URL}/${params}`

/**
 * Search for any item
 * Read https://developer.spotify.com/web-api/search-item/ for some more info
 * @param options the query options for Spotify API
 * @type {object}
 * @property {string} q the search text
 * @property {string} type the type of item search {album,artist,playlist,track}
 */
export const search = ({ ...options }) => http(joinPath(preparePath(Object.assign(options, { limit: 1 }))))
