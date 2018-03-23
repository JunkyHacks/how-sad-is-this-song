const cheerio = require('cheerio')
const axios = require('axios')
const fetch = require('isomorphic-unfetch')

const BASE_URL = 'http://lyrics.wikia.com/wiki/'

const lyrics = query =>
  axios(`${BASE_URL}${query}`).then(res => {
    const $ = cheerio.load(res.data)

    return $('.lyricbox')
      .html()
      .replace(/<br>/g, ' ')
      .replace(/&apos;/g, "'")
      .replace(/<[^>]*>/g, '')
  }, console.log)

const lyricalDensity = (str, duration) => str.split(' ').length / duration * 1000

const sentiment = async str => {
  const removeSpecials = str => str.replace(/!?,.()/, ' ')

  const removeStopWords = str =>
    str
      .replace(/\n/g, ' ')
      .split(' ')
      .filter(
        s =>
          !/^(a|about|above|after|again|against|all|am|an|and|any|are|as|at|be|because|been|before|being|below|between|both|but|by|could|did|do|does|doing|down|during|each|for|from|had|has|have|having|he|he’d|he’ll|he’s|her|here|here’s|hers|herself|him|himself|his|how|how’s|I|I’d|I’ll|I’m|I’ve|if|in|into|is|it|it’s|its|itself|let’s|me|more|most|my|myself|nor|of|on|once|only|or|other|ought|our|ours|ourselves|out|over|own|same|she|she’d|she’ll|she’s|should|so|some|such|than|that|that’s|the|their|theirs|them|themselves|then|there|there’s|the|set|hey|they’d|they’ll|they’re|they’ve|this|those|through|to|too|under|until|up|was|we|we’d|we’ll|we’re|we’ve|were|what|what’s|when|when’s|where|where’s|which|while|who|who’s|whom|why|why’s|with|would|you|you’d|you’ll|you’re|you’ve|your|yours|yourself|yourselves)$/g.test(
            s,
          ),
      )
      .join(' ')

  const emotions = await fetch('/static/emotions.csv')
    .then(data => data.text())
    .then(e => e.split(/\n/).map(f => f.split(',').pop()))

  const words = removeStopWords(removeSpecials(str))
}

module.exports = { lyrics, lyricalDensity }
