import SpotifyAPI from '../spotify'

/**
 * @param {string} text the search text
 * @param {string} type (Optional) the type of search {album,artist,playlist,track}
 * @param {number} limit limit amount of data retrieved
 * @returns {array} of search results
 */
export const search = (text, type, limit) => SpotifyAPI.search({ q: text, type: type }, limit)

/**
 * @param {object} id a music id
 * @returns {object} of albums and allTracks
 */
export const trackFeatures = id => SpotifyAPI.audioFeatures(id).then(res => res.valence)
