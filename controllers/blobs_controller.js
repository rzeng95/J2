var mongoose = require('mongoose')
var Blob = require('../models/blobs')
var express = require('express')
var router = express.Router()

router.route('/all')
    .get(function(req,res){
        Blob.findOne({'account_name': 'roland'}, function(err, blob) {
            if (err) res.send('nope')
            else res.json({'age' : blob.age})
        })

    })

router.route('/do')
    .post(function(req,res) {
        var tmpBlob = new Blob()
        tmpBlob.account_name = 'roland'
        tmpBlob.age = '21'

        tmpBlob.save(function(err) {
            if (err) res.send('couldn\'t save')
            else res.send('success!')

        })
    })

module.exports = router 
