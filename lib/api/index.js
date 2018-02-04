import SpotifyAPI from '../spotify'
import fetch from 'isomorphic-unfetch'
import { withTimeout, lyrics } from '../utils'
import sentiment from 'sentiment'

/**
 * @param {string} artist name of the artist (encoded)
 * @param {song} song name of the song (encoded)
 * @return {object} quantifier object from sentiment api
 */
export const lyricSentiment = (artist, song) => lyrics(artist, song).then(res => sentiment(res))

/**
 * @param {string} text the search text
 * @param {string} type (Optional) the type of search {album,artist,playlist,track}
 * @param {number} limit limit amount of data retrieved
 * @returns {array} of search results
 */
export const search = SpotifyAPI.search

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
