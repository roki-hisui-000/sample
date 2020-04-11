// all route manage
const router = require('express').Router()

const defaultRoutes = require('./defaultRoutes')

router.use('/', defaultRoutes)

module.exports = router