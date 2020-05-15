const Router = require('koa-router')
const Routes = require(`../${process.env.ROUTES_PATH}`)

const router = new Router()

router.get('/hello', Routes.hello)

module.exports = router
