const SpotifyAPI = require('../spotify')
const fetch = require('isomorphic-unfetch')
const { withTimeout, lyrics, lyricalDensity } = require('../utils')
const sentiment = require('sentiment')

const configNameForWikiSearch = name => name.split(' ').join('_')
/**
 * @param {string} artist name of the artist (encoded)
 * @param {string} song name of the song (encoded)
 * @param {number} duration length of the song is ms
 * @param {number} trackId spotify track id
 * @return {object} quantifier for song sentiment from 0 to 1
 */
const songSentiment = async (artist, song, duration, trackId) => {
  const { access_token } = await token().then(res => res.json())
  const text = await lyrics(configNameForWikiSearch(artist + ':' + song))
  const totalSentiment = sentiment(text)

  /* 
    This is probably what we should be aiming for in order to read the CSV.
    We should wrap this into another function/util/package and avoid doing async unreadable calls on a major function lol.
  
    fetch('/static/emotions.csv')
      .then(data => data.text())
      .then(e => 
        console.log(e.split(/\n/).map(f => { 
            const col = f.split(',')
            return col[col.length - 1] 
          }))) */

  const totalValence = await trackFeatures(trackId, access_token)
  const totalNegativity = totalSentiment.words.length ? totalSentiment.negative.length / totalSentiment.words.length : 0
  const totalDensity = lyricalDensity(text, duration)
  /**
   * Based on this R arcticle:
   * https://www.r-bloggers.com/everything-in-its-right-place-visualization-and-content-analysis-of-radiohead-lyrics/
   */
  const gloomIndex = (1 - totalValence + totalNegativity * (1 + totalDensity)) / 2

  return gloomIndex
}

/**
 * Retrieves auth access token from spotify app
 * Read https://developer.spotify.com/web-api/authorization-guide/ Client Credentials Flow
 */
const token = () =>
  withTimeout(5000, fetch)('https://accounts.spotify.com/api/token', {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: process.env.SPOTIFY_OAUTH_TOKEN,
    },
    body: 'grant_type=client_credentials',
  })

/**
 * @param {object} id a music id
 * @returns {object} of albums and allTracks
 */
const trackFeatures = (id, token) => SpotifyAPI.audioFeatures(id, token).then(res => res.valence)

exports.token = token

exports.songSentiment = songSentiment

exports.trackFeatures = trackFeatures
