import cheerio from 'cheerio'
import axios from 'axios'

const BASE_URL = 'http://lyrics.wikia.com/wiki/'

const lyrics = (artist, song) =>
  axios(`${BASE_URL}${artist}:${song}`).then(
    res => {
      const $ = cheerio.load(res.data)

      return $('.lyricbox')
        .html()
        .replace(/<br>/g, ' ')
        .replace(/&apos;/g, "'")
        .replace(/<[^>]*>/g, '')
    },
    err => console.log(err),
  )

export default lyrics
