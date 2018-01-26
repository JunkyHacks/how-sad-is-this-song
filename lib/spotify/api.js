import http, { prepareQueries } from 'utils/http'

const SPOTIFY_API_URL = 'https://api.spotify.com/v1'
const SEARCH = '/search'
const ARTIST = '/artist'
const ALBUMS = '/albums'
const TRACKS = '/tracks'
const AUDIO_FEATURES = '/audio-features'
const request = (path, queries, limit) =>
  http.get(composePath(path, Object.assign(queries, { limit: limit })), {
    authorization: process.env.SPOTIFY_OAUTH_TOKEN,
  })

const joinPath = (...args) => `${SPOTIFY_API_URL}${args.join('')}`
const composePath = (path, queryObject) => joinPath(path, prepareQueries(queryObject))

/**
 * Search for any item
 * Read https://developer.spotify.com/web-api/search-item/ for some more info
 * @param options the query object for Spotify API
 * @type {object}
 * @property {string} q the search text
 * @property {string} type {Optional} the type of item search {album,artist,playlist,track}
 * @param limit the limit of results coming from search
 */
export const search = ({ ...options }, limit) => request(SEARCH, options, limit)

/**
 * Retrieve artist albums
 * Read https://developer.spotify.com/web-api/get-artists-albums/ for some more info
 * @param id the artist id
 * @type {number}
 * @param options the query object for Spotify API
 * @type {object}
 * @property {string} album_type {Optional} the type of album {album,single,appears_on,compilation}
 */
export const artistAlbums = (id, { ...options }) => request(`${ARTIST}/${id}${ALBUMS}`, options, 50)

/**
 * Retrieve album tracks
 * Read https://developer.spotify.com/web-api/get-albums-tracks/ for some more info
 * @param id the album id
 * @type {number}
 * @param options the query object for Spotify API
 * @type {object}
 */
export const albumTracks = (id, { ...options }) => request(`${ALBUMS}/${id}${TRACKS}`, options, 50)

/**
 * Retrieve multiple tracks audio details
 * Read https://developer.spotify.com/web-api/get-albums-tracks/ for some more info
 * @param options the query object for Spotify API
 * @type {object}
 * @property {Array} ids a list with multiple track ids
 */
export const audioFeatures = ({ ...options }) => request(AUDIO_FEATURES, options)