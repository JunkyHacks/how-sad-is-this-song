require('dotenv').config()

const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
const conf = require('./next.config.js')
const fetch = require('isomorphic-unfetch')
const bodyParser = require('body-parser')
const express = require('express')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()
  server.use(bodyParser.json())
  server.use(bodyParser.urlencoded({ extended: true }))

  server.get('/token', (req, res) =>
    fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: process.env.SPOTIFY_OAUTH_TOKEN,
      },
      body: 'grant_type=client_credentials',
    })
      .then(ret => ret.json())
      .then(fin => res.send(fin)),
  )

  server.get('*', (req, res) => handle(req, res))

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
