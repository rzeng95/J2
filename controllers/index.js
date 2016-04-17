var express = require('express')
var router = express.Router()

router.use('/', require('./default_controller'))

router.use('/blobs', require('./blobs_controller'))


module.exports = router
