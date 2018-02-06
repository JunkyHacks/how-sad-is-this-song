const { prepareQueries, http } = require('../utils/')

const SPOTIFY_API_URL = 'https://api.spotify.com/v1'
const SEARCH = '/search'
const ARTISTS = '/artists'
const ALBUMS = '/albums'
const TRACKS = '/tracks'
const AUDIO_FEATURES = '/audio-features'

const request = (path, queries, limit, accessToken) =>
  http.get(composePath(path, Object.assign(queries, { limit: limit })), accessToken)

const joinPath = (...args) => `${SPOTIFY_API_URL}${args.join('')}`
const composePath = (path, queryObject) => joinPath(path, prepareQueries(queryObject))

/**
 * Searches for any item
 * Read https://developer.spotify.com/web-api/search-item/ for some more info
 * @param {object} options the query object for Spotify API
 * @property {string} q the search text
 * @property {string} type {Optional} the type of item search {album,artist,playlist,track}
 * @param {number} limit the limit of results coming from search
 */
const search = ({ limit, accessToken, ...options }) => request(SEARCH, options, limit, accessToken)

/**
 * Retrieves artist albums
 * Read https://developer.spotify.com/web-api/get-artists-albums/ for some more info
 * @param {string} id the artist id
 * @param {object} options the query object for Spotify API
 * @property {string} album_type {Optional} the type of album {album,single,appears_on,compilation}
 */
const artistAlbums = (id, options) => request(`${ARTISTS}/${id}${ALBUMS}`, options, 50)

/**
 * Retrieves album tracks
 * Read https://developer.spotify.com/web-api/get-albums-tracks/ for some more info
 * @param {string} id the album id
 * @param {object} options the query object for Spotify API
 */
const albumTracks = (id, options) => request(`${ALBUMS}/${id}${TRACKS}`, options, 50)

/**
 * Retrieves multiple tracks audio details
 * Read https://developer.spotify.com/web-api/get-albums-tracks/ for some more info
 * @param {string} id the music id
 */
const audioFeatures = (id, token) => request(`${AUDIO_FEATURES}/${id}`, [], null, token)

module.exports = {
  search,
  artistAlbums,
  albumTracks,
  audioFeatures,
}
