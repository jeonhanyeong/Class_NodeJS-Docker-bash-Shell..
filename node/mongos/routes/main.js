const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")

// define schema
var userSchema = mongoose.Schema({
    userid : String,
    name : String,
    city : String,
    sex : String,
    age : Number
})

var User = mongoose.model('users', userSchema);

router.get('/list', function(req, res, next) {
    User.find({}, function(err, docs) {
        if(err) console.log('err')
        res.send(docs)
    })
})

module.exports = router;