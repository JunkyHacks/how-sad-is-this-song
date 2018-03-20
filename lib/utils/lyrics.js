const cheerio = require('cheerio')
const axios = require('axios')

const BASE_URL = 'http://lyrics.wikia.com/wiki/'

const lyrics = (artist, song) =>
  axios(`${BASE_URL}${encodeURIComponent(artist)}:${encodeURIComponent(song)}`).then(res => {
    const $ = cheerio.load(res.data)

    return $('.lyricbox')
      .html()
      .replace(/<br>/g, ' ')
      .replace(/&apos;/g, "'")
      .replace(/<[^>]*>/g, '')
  }, console.log)

const lyricalDensity = (str, duration) => str.split(' ').length / duration * 1000

module.exports = { lyrics, lyricalDensity }
