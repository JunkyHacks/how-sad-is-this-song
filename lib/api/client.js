const SpotifyAPI = require('../spotify')

/**
 * @param {string} text the search text
 * @param {string} type (Optional) the type of search {album,artist,playlist,track}
 * @param {number} limit limit amount of data retrieved
 * @returns {array} of search results
 */
module.exports.search = SpotifyAPI.search
