import SpotifyAPI from '../spotify'
import fetch from 'isomorphic-unfetch'
import { withTimeout } from '../utils'

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

/**
 * Retrieves auth access token from spotify app
 * Read https://developer.spotify.com/web-api/authorization-guide/ Client Credentials Flow
 */
export const token = () =>
  withTimeout(5000, fetch)('https://accounts.spotify.com/api/token', {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: process.env.SPOTIFY_OAUTH_TOKEN,
    },
    body: 'grant_type=client_credentials',
  })
