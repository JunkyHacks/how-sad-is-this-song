require('dotenv').config()

const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
const conf = require('./next.config.js')
const fetch = require('isomorphic-unfetch')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true)
    const { pathname, query } = parsedUrl

    handle(req, res, parsedUrl)
  }).listen(3000, err => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
