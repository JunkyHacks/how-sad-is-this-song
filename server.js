const Koa = require('koa')
const next = require('next')
const Router = require('koa-router')
const config = require('./next.config')
const bodyParser = require('koa-bodyparser')
const { songSentiment } = require('./lib/api/server')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev, config })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = new Koa()
  server.use(bodyParser())
  const router = new Router()

  router.get('/feels', async ctx => {
    try {
      const { artist, song, duration, trackId } = ctx.req.query
      ctx.body = await songSentiment(artist, song, duration, trackId)
    } catch (err) {
      ctx.status = err.status || 500
      ctx.body = 'An error has occurred'
      ctx.app.emit('error', err, ctx)
    }
  })

  router.get('*', async ctx => {
    await handle(ctx.req, ctx.res)
  })

  server.use(async (ctx, next) => {
    ctx.res.statusCode = 200
    await next()
  })

  server.use(router.routes())
  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
