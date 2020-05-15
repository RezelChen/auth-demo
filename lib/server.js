const http = require('http')
const Koa = require('koa')
const bodyParser = require('koa-bodyparser')

const config = require('./config')
const router = require('./router')

const app = new Koa()

app.use(bodyParser())
app.use(router.routes())
app.use(router.allowedMethods())

const server = http.createServer(app.callback())
server.listen(config.appPort, () => console.log('Server is listening on port: ', config.appPort))
