const SpotifyAPI = require('../spotify')
const { prepareQueries, http } = require('../utils/')

const SENTIMENT_FEELS = '/feels'

const request = (path, queries) => http.get(composePath(path, queries))

const joinPath = (...args) => args.join('')
const composePath = (path, queryObject) => joinPath(path, prepareQueries(queryObject))

/**
 * @param {string} text the search text
 * @param {string} type (Optional) the type of search {album,artist,playlist,track}
 * @param {number} limit limit amount of data retrieved
 * @returns {array} of search results
 */
module.exports.search = SpotifyAPI.search

/**
 * @param {object} options of the following attributes
 * @param {string} artist name of the artist (encoded)
 * @param {string} name name of the song (encoded)
 * @param {number} duration length of the song is ms
 * @param {number} trackId spotify track id
 * @return {object} quantifier for song sentiment from 0 to 1
 */
module.exports.songSentiment = options => request(SENTIMENT_FEELS, options)
