//EXPRESS SETUP
var express = require('express')
var app = express()
var router = express.Router()

// DATABASE SET UP
var mongoose = require('mongoose')
var db_username = 'admin'
var db_password = 'reverse'
mongoose.connect('mongodb://' + db_username + ':' + db_password + '@ds011281.mlab.com:11281/jira69db')


app.use(require('./controllers'))

app.listen(3000, function() {
    console.log('App running on port 3000')
})
