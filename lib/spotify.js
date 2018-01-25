import http from 'utils/http'

const SPOTIFY_API_URL = 'https://api.spotify.com/v1'
const SEARCH_PATH = '/search'
const ARTIST = '/artist'
const ALBUMS = '/albums'
const TRACKS = '/tracks'
const request = (path, queries, limit, headers) =>
  http(composePath(path, Object.assign(queries, { limit: limit })), headers)
const prepareQueries = ({ ...queryParams }) => Object.entries(queryParams).reduce(e => `?${e.join('=')}`)
const joinPath = (...args) => `${SPOTIFY_API_URL}${args.join('')}`
const composePath = (path, queryObject) => joinPath(path, prepareQueries(queryObject))

/**
 * Search for any item
 * Read https://developer.spotify.com/web-api/search-item/ for some more info
 * @param options the query options for Spotify API
 * @type {object}
 * @property {string} q the search text
 * @property {string} type {Optional} the type of item search {album,artist,playlist,track}
 */
export const search = ({ ...options }) => request(SEARCH_PATH, options, 1)

/**
 * Retrieve artist albums
 * Read https://developer.spotify.com/web-api/get-artists-albums/ for some more info
 * @param options the query options for Spotify API
 * @type {object}
 * @property {string} id the artist id
 * @property {string} album_type {Optional} the type of album {album,single,appears_on,compilation}
 */
export const artistAlbums = ({ ...options }) => request(`${ARTIST}/${optons.id}/${ALBUMS}`, options, 50)

/**
 * Retrieve album tracks
 * Read https://developer.spotify.com/web-api/get-albums-tracks/ for some more info
 * @param options the query options for Spotify API
 * @type {object}
 * @property {string} id the album id
 */
export const albumTracks = ({ ...options }) => request(`${ALBUMS}/${options.id}/${TRACKS}`, options, 50)
