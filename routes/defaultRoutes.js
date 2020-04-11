// default routes
"use strict";

const router = require('express').Router()
const defaultController = require('../controllers/defaultController')

router.get('/', defaultController.index)
router.get('/info',defaultController.info)
router.get('/message',defaultController.showMsg)

module.exports = router