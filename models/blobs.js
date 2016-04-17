var mongoose = require('mongoose')

var BlobSchema = new mongoose.Schema({
    account_name: String,
    age: Number

})
module.exports = mongoose.model("Blob", BlobSchema)
