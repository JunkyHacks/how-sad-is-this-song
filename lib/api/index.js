import SpotifyAPI from '../spotify'
import fetch from 'isomorphic-unfetch'
import { withTimeout, lyrics, lyricalDensity } from '../utils'
import sentiment from 'sentiment'

/**
 * @param {string} artist name of the artist (encoded)
 * @param {string} song name of the song (encoded)
 * @param {number} duration length of the song is ms
 * @param {number} trackId spotify track id
 * @return {object} quantifier for song sentiment from 0 to 1
 */
export const songSentiment = async (artist, song, duration, trackId) => {
  const text = await lyrics(artist, song)
  const totalSentiment = sentiment(text)

  const totalValence = await trackFeatures(trackId)
  const totalNegativity = totalSentiment.words.length / totalSentiment.negative.length
  const totalDensity = lyricalDensity(text, duration)

  /**
   * Based on this R arcticle:
   * https://www.r-bloggers.com/everything-in-its-right-place-visualization-and-content-analysis-of-radiohead-lyrics/
   */
  const gloomIndex = (1 - totalValence + totalNegativity * (1 + totalDensity)) / 2

  return gloomIndex
}

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
