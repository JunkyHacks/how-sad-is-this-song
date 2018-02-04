import cheerio from 'cheerio'
import fetch from 'isomorphic-unfetch'

const BASE_URL = 'http://lyrics.wikia.com/wiki/'

const lyrics = (artist, song) =>
  fetch(`${BASE_URL}${artist}:${song}`).then(res => {
    const $ = cheerio.load(res.data)

    return $('.lyricbox')
      .html()
      .replace(/<br>/g, ' ')
      .replace(/&apos;/g, "'")
      .replace(/<[^>]*>/g, '')
  })

export default lyrics
