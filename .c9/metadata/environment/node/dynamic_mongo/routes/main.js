{"filter":false,"title":"main.js","tooltip":"/node/dynamic_mongo/routes/main.js","undoManager":{"mark":11,"position":11,"stack":[[{"start":{"row":0,"column":0},"end":{"row":22,"column":24},"action":"remove","lines":["const express = require(\"express\")","const router = express.Router()","const mongoose = require(\"mongoose\")","","// define schema","var userSchema = mongoose.Schema({","    userid : String,","    name : String,","    city : String,","    sex : String,","    age : Number","})","","var User = mongoose.model('users', userSchema);","","router.get('/list', function(req, res, next) {","    User.find({}, function(err, docs) {","        if(err) console.log('err')","        res.send(docs)","    })","})","","module.exports = router;"],"id":2},{"start":{"row":0,"column":0},"end":{"row":45,"column":7},"action":"insert","lines":["const express = require(\"express\")","const router = express.Router()","const mongoose = require(\"mongoose\")","","// define schema","var userSchema = mongoose.Schema({","    ename : String,","    empno : Number","})","","// create model with mongodb collection and schema","var User = mongoose.model('things', userSchema);","","// list","router.get('/list', function(req, res, next) {","    User.find({}, function(err, docs) {","        if(err) console.log('err')","        res.send(docs)","    })","})","","// get","router.get('/get', function(req, res, next) {","    var input = req.query.input","    User.findOne({'empno': input}, function(err,doc) {","        if(err) console.log('err')","        res.send(doc)","    })","})","","//post","router.post('/post_list', function(req, res, next) {","    var input = req.query.input","    User.findOne({'empno': input}, function(err,doc) {","        if(err) console.log('err')","        res.send(doc)","    })","})","","// select * from things","User.find({},{'_id':0}).exec(function (err, things) {","    if (err) console.log(err);","    console.log(\"\\nQuery 1\");","    console.log(things+\"\\n\");","    return;","    }) "]}],[{"start":{"row":0,"column":0},"end":{"row":45,"column":7},"action":"remove","lines":["const express = require(\"express\")","const router = express.Router()","const mongoose = require(\"mongoose\")","","// define schema","var userSchema = mongoose.Schema({","    ename : String,","    empno : Number","})","","// create model with mongodb collection and schema","var User = mongoose.model('things', userSchema);","","// list","router.get('/list', function(req, res, next) {","    User.find({}, function(err, docs) {","        if(err) console.log('err')","        res.send(docs)","    })","})","","// get","router.get('/get', function(req, res, next) {","    var input = req.query.input","    User.findOne({'empno': input}, function(err,doc) {","        if(err) console.log('err')","        res.send(doc)","    })","})","","//post","router.post('/post_list', function(req, res, next) {","    var input = req.query.input","    User.findOne({'empno': input}, function(err,doc) {","        if(err) console.log('err')","        res.send(doc)","    })","})","","// select * from things","User.find({},{'_id':0}).exec(function (err, things) {","    if (err) console.log(err);","    console.log(\"\\nQuery 1\");","    console.log(things+\"\\n\");","    return;","    }) "],"id":3},{"start":{"row":0,"column":0},"end":{"row":38,"column":3},"action":"insert","lines":["const express = require(\"express\")","const router = express.Router()","const mongoose = require(\"mongoose\")","","// define schema","var userSchema = mongoose.Schema({","    ename : String,","    empno : Number","})","","// create model with mongodb collection and schema","var User = mongoose.model('things', userSchema);","","// list","router.get('/list', function(req, res, next) {","    User.find({}, function(err, docs) {","        if(err) console.log('err')","        res.send(docs)","    })","})","","// get","router.get('/get', function(req, res, next) {","    var input = req.query.input","    User.findOne({'empno': input}, function(err,doc) {","        if(err) console.log('err')","        res.send(doc)","    })","})","","module.exports = router;","","// select * from users","User.find({},{'_id':0}).exec(function (err, things) {","    if (err) console.log(err);","    console.log(\"\\nQuery 1\");","    console.log(things+\"\\n\");","    return;","}) "]}],[{"start":{"row":11,"column":27},"end":{"row":11,"column":33},"action":"remove","lines":["things"],"id":4},{"start":{"row":11,"column":27},"end":{"row":11,"column":28},"action":"insert","lines":["n"]},{"start":{"row":11,"column":28},"end":{"row":11,"column":29},"action":"insert","lines":["y"]}],[{"start":{"row":11,"column":28},"end":{"row":11,"column":29},"action":"remove","lines":["y"],"id":5},{"start":{"row":11,"column":27},"end":{"row":11,"column":28},"action":"remove","lines":["n"]}],[{"start":{"row":11,"column":27},"end":{"row":11,"column":28},"action":"insert","lines":["m"],"id":6},{"start":{"row":11,"column":28},"end":{"row":11,"column":29},"action":"insert","lines":["y"]},{"start":{"row":11,"column":29},"end":{"row":11,"column":30},"action":"insert","lines":["d"]},{"start":{"row":11,"column":30},"end":{"row":11,"column":31},"action":"insert","lines":["b"]}],[{"start":{"row":0,"column":0},"end":{"row":38,"column":3},"action":"remove","lines":["const express = require(\"express\")","const router = express.Router()","const mongoose = require(\"mongoose\")","","// define schema","var userSchema = mongoose.Schema({","    ename : String,","    empno : Number","})","","// create model with mongodb collection and schema","var User = mongoose.model('mydb', userSchema);","","// list","router.get('/list', function(req, res, next) {","    User.find({}, function(err, docs) {","        if(err) console.log('err')","        res.send(docs)","    })","})","","// get","router.get('/get', function(req, res, next) {","    var input = req.query.input","    User.findOne({'empno': input}, function(err,doc) {","        if(err) console.log('err')","        res.send(doc)","    })","})","","module.exports = router;","","// select * from users","User.find({},{'_id':0}).exec(function (err, things) {","    if (err) console.log(err);","    console.log(\"\\nQuery 1\");","    console.log(things+\"\\n\");","    return;","}) "],"id":7},{"start":{"row":0,"column":0},"end":{"row":60,"column":3},"action":"insert","lines":["const express = require(\"express\")","const router = express.Router()","const mongoose = require(\"mongoose\")","","// define schema","var userSchema = mongoose.Schema({","    ename : String,","    empno : Number","})","","// create model with mongodb collection and schema","var User = mongoose.model('users', userSchema);","","// list","router.get('/list', function(req, res, next) {","    User.find({}, {'_id':0}).exec(function(err, docs) {","        if(err) console.log('err')","        res.writeHead(200);","        var template = `","        <!DOCTYPE html>","        <html>","        <head>","            <title>Result</title>","            <meta charset=\"utf-8\">","        </head>","        <body>","            ${docs}","        </body>","        </html>","        `;","        res.end(template)","    })","})","","// get","router.get('/get', function(req, res, next) {","    var input = req.query.input","    User.findOne({'users': input}, {'_id':0}).exec(function(err,doc) {","        if(err) console.log('err')","        res.send(doc)","    })","})","","//post","router.post('/post_list', function(req, res, next) {","    var input = req.body.input","    User.findOne({'users': input}, {'_id':0}).exec(function(err,doc) {","        if(err) console.log('err')","        res.send(doc)","    })","})","","module.exports = router;","","// select * from users","User.find({},{'_id':0}).exec(function (err, users) {","    if (err) console.log(err);","    console.log(\"\\nQuery 1\");","    console.log(users+\"\\n\");","    return;","}) "]}],[{"start":{"row":0,"column":0},"end":{"row":60,"column":3},"action":"remove","lines":["const express = require(\"express\")","const router = express.Router()","const mongoose = require(\"mongoose\")","","// define schema","var userSchema = mongoose.Schema({","    ename : String,","    empno : Number","})","","// create model with mongodb collection and schema","var User = mongoose.model('users', userSchema);","","// list","router.get('/list', function(req, res, next) {","    User.find({}, {'_id':0}).exec(function(err, docs) {","        if(err) console.log('err')","        res.writeHead(200);","        var template = `","        <!DOCTYPE html>","        <html>","        <head>","            <title>Result</title>","            <meta charset=\"utf-8\">","        </head>","        <body>","            ${docs}","        </body>","        </html>","        `;","        res.end(template)","    })","})","","// get","router.get('/get', function(req, res, next) {","    var input = req.query.input","    User.findOne({'users': input}, {'_id':0}).exec(function(err,doc) {","        if(err) console.log('err')","        res.send(doc)","    })","})","","//post","router.post('/post_list', function(req, res, next) {","    var input = req.body.input","    User.findOne({'users': input}, {'_id':0}).exec(function(err,doc) {","        if(err) console.log('err')","        res.send(doc)","    })","})","","module.exports = router;","","// select * from users","User.find({},{'_id':0}).exec(function (err, users) {","    if (err) console.log(err);","    console.log(\"\\nQuery 1\");","    console.log(users+\"\\n\");","    return;","}) "],"id":8},{"start":{"row":0,"column":0},"end":{"row":85,"column":3},"action":"insert","lines":["const express = require(\"express\")","const router = express.Router()","const mongoose = require(\"mongoose\")","","// define schema","var userSchema = mongoose.Schema({","    userid : String,","    name : String,","    city : String,","    sex : String,","    age : Number","})","","// create model with mongodb collection and schema","var User = mongoose.model('users', userSchema);","","// list","router.get('/list', function(req, res, next) {","    User.find({}, {'_id':0}).exec(function(err, docs) {","        if(err) console.log('err')","        console.log(docs)","        res.writeHead(200);","        var template = `","        <!DOCTYPE html>","        <html>","        <head>","            <title>Result</title>","            <meta charset=\"utf-8\">","        </head>","        <body>","            <table border=\"1\" margin: auto; text-align : center;>","            <tr>","                <th>userid</th>","                <th>name</th>","                <th>city</th>","                <th>sex</th>","                <th>age</th>","            </tr>","            `;","            for(var i=0; i<docs.length; i++) {","                template += `","                <tr>","                    <th>${docs[i]['userid']}</th>","                    <th>${docs[i]['name']}</th>","                    <th>${docs[i]['city']}</th>","                    <th>${docs[i]['sex']}</th>","                    <th>${docs[i]['age']}</th>   ","                </tr>","                `;","            }","            template += `","            </table>","        </body>","        </html>","        `;","        res.end(template)","    })","})","","// get","router.get('/get', function(req, res, next) {","    var input = req.query.input","    User.findOne({'users': input}, {'_id':0}).exec(function(err,doc) {","        if(err) console.log('err')","        res.send(doc)","    })","})","","//post","router.post('/post_list', function(req, res, next) {","    var input = req.body.input","    User.findOne({'users': input}, {'_id':0}).exec(function(err,doc) {","        if(err) console.log('err')","        res.send(doc)","    })","})","","module.exports = router;","","// select * from users","User.find({},{'_id':0}).exec(function (err, users) {","    if (err) console.log(err);","    console.log(\"\\nQuery 1\");","    console.log(users+\"\\n\");","    return;","}) "]}],[{"start":{"row":43,"column":35},"end":{"row":43,"column":39},"action":"remove","lines":["name"],"id":9},{"start":{"row":43,"column":35},"end":{"row":43,"column":36},"action":"insert","lines":["e"]},{"start":{"row":43,"column":36},"end":{"row":43,"column":37},"action":"insert","lines":["m"]},{"start":{"row":43,"column":37},"end":{"row":43,"column":38},"action":"insert","lines":["p"]},{"start":{"row":43,"column":38},"end":{"row":43,"column":39},"action":"insert","lines":["n"]},{"start":{"row":43,"column":39},"end":{"row":43,"column":40},"action":"insert","lines":["o"]}],[{"start":{"row":44,"column":35},"end":{"row":44,"column":39},"action":"remove","lines":["city"],"id":10},{"start":{"row":44,"column":35},"end":{"row":44,"column":36},"action":"insert","lines":["e"]},{"start":{"row":44,"column":36},"end":{"row":44,"column":37},"action":"insert","lines":["n"]},{"start":{"row":44,"column":37},"end":{"row":44,"column":38},"action":"insert","lines":["a"]},{"start":{"row":44,"column":38},"end":{"row":44,"column":39},"action":"insert","lines":["m"]},{"start":{"row":44,"column":39},"end":{"row":44,"column":40},"action":"insert","lines":["e"]}],[{"start":{"row":42,"column":35},"end":{"row":42,"column":41},"action":"remove","lines":["userid"],"id":11},{"start":{"row":42,"column":35},"end":{"row":42,"column":36},"action":"insert","lines":["_"]},{"start":{"row":42,"column":36},"end":{"row":42,"column":37},"action":"insert","lines":["i"]},{"start":{"row":42,"column":37},"end":{"row":42,"column":38},"action":"insert","lines":["d"]}],[{"start":{"row":45,"column":0},"end":{"row":46,"column":49},"action":"remove","lines":["                    <th>${docs[i]['sex']}</th>","                    <th>${docs[i]['age']}</th>   "],"id":12},{"start":{"row":44,"column":48},"end":{"row":45,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":0,"column":0},"end":{"row":83,"column":3},"action":"remove","lines":["const express = require(\"express\")","const router = express.Router()","const mongoose = require(\"mongoose\")","","// define schema","var userSchema = mongoose.Schema({","    userid : String,","    name : String,","    city : String,","    sex : String,","    age : Number","})","","// create model with mongodb collection and schema","var User = mongoose.model('users', userSchema);","","// list","router.get('/list', function(req, res, next) {","    User.find({}, {'_id':0}).exec(function(err, docs) {","        if(err) console.log('err')","        console.log(docs)","        res.writeHead(200);","        var template = `","        <!DOCTYPE html>","        <html>","        <head>","            <title>Result</title>","            <meta charset=\"utf-8\">","        </head>","        <body>","            <table border=\"1\" margin: auto; text-align : center;>","            <tr>","                <th>userid</th>","                <th>name</th>","                <th>city</th>","                <th>sex</th>","                <th>age</th>","            </tr>","            `;","            for(var i=0; i<docs.length; i++) {","                template += `","                <tr>","                    <th>${docs[i]['_id']}</th>","                    <th>${docs[i]['empno']}</th>","                    <th>${docs[i]['ename']}</th>","                </tr>","                `;","            }","            template += `","            </table>","        </body>","        </html>","        `;","        res.end(template)","    })","})","","// get","router.get('/get', function(req, res, next) {","    var input = req.query.input","    User.findOne({'users': input}, {'_id':0}).exec(function(err,doc) {","        if(err) console.log('err')","        res.send(doc)","    })","})","","//post","router.post('/post_list', function(req, res, next) {","    var input = req.body.input","    User.findOne({'users': input}, {'_id':0}).exec(function(err,doc) {","        if(err) console.log('err')","        res.send(doc)","    })","})","","module.exports = router;","","// select * from users","User.find({},{'_id':0}).exec(function (err, users) {","    if (err) console.log(err);","    console.log(\"\\nQuery 1\");","    console.log(users+\"\\n\");","    return;","}) "],"id":13},{"start":{"row":0,"column":0},"end":{"row":159,"column":3},"action":"insert","lines":["const express = require(\"express\")","const router = express.Router()","const mongoose = require(\"mongoose\")","","// define schema","var userSchema = mongoose.Schema({","    userid : String,","    name : String,","    city : String,","    sex : String,","    age : Number","})","","// create model with mongodb collection and schema","var User = mongoose.model('users', userSchema);","","// list","router.get('/list', function(req, res, next) {","    User.find({}, {'_id':0}).exec(function(err, docs) {","        if(err) console.log('err')","        console.log(docs)","        res.writeHead(200);","        var template = `","        <!DOCTYPE html>","        <html>","        <head>","            <title>Result</title>","            <meta charset=\"utf-8\">","        </head>","        <body>","            <table border=\"1\" margin: auto; text-align : center;>","            <tr>","                <th>userid</th>","                <th>name</th>","                <th>city</th>","                <th>sex</th>","                <th>age</th>","            </tr>","            `;","            for(var i=0; i<docs.length; i++) {","                template += `","                <tr>","                    <th>${docs[i]['userid']}</th>","                    <th>${docs[i]['name']}</th>","                    <th>${docs[i]['city']}</th>","                    <th>${docs[i]['sex']}</th>","                    <th>${docs[i]['age']}</th>   ","                </tr>","                `;","            }","            template += `","            </table>","        </body>","        </html>","        `;","        res.end(template)","    })","})","","// get","router.get('/get_userid', function(req, res, next) {","    var input = req.query.input","    User.findOne({'userid': input}, {'_id':0}).exec(function(err,docs) {","        if(err) console.log('err')","        console.log(docs)","        res.writeHead(200);","        var template = `","        <!DOCTYPE html>","        <html>","        <head>","            <title>Result</title>","            <meta charset=\"utf-8\">","        </head>","        <body>","            <table border=\"1\" margin: auto; text-align : center;>","            <tr>","                <th>userid</th>","                <th>name</th>","                <th>city</th>","                <th>sex</th>","                <th>age</th>","            </tr>","            <tr>","                <th>${docs['userid']}</th>","                <th>${docs['name']}</th>","                <th>${docs['city']}</th>","                <th>${docs['sex']}</th>","                <th>${docs['age']}</th>   ","            </tr>","        </table>","        </body>","        </html>","        `;","        res.end(template)","    })","})","","// get","router.get('/get_city', function(req, res, next) {","    var input = req.query.input","    User.find({'city': input}, {'_id':0}).exec(function(err,docs) {","        if(err) console.log('err')","        console.log(docs)","        res.writeHead(200);","        var template = `","        <!DOCTYPE html>","        <html>","        <head>","            <title>Result</title>","            <meta charset=\"utf-8\">","        </head>","        <body>","            <table border=\"1\" margin: auto; text-align : center;>","            <tr>","                <th>userid</th>","                <th>name</th>","                <th>city</th>","                <th>sex</th>","                <th>age</th>","            </tr>","            `;","            for(var i=0; i<docs.length; i++) {","                template += `","                <tr>","                    <th>${docs[i]['userid']}</th>","                    <th>${docs[i]['name']}</th>","                    <th>${docs[i]['city']}</th>","                    <th>${docs[i]['sex']}</th>","                    <th>${docs[i]['age']}</th>   ","                </tr>","                `;","            }","            template += `","            </table>","        </body>","        </html>","        `;","        res.end(template)","    })","})","","//post","router.post('/post_list', function(req, res, next) {","    var input = req.body.input","    User.find({'userid': input}, {'_id':0}).exec(function(err,docs) {","        if(err) console.log('err')","        console.log(docs)","        res.send(docs)","    })","})","","module.exports = router;","","// select * from users","User.find({},{'_id':0}).exec(function (err, users) {","    if (err) console.log(err);","    console.log(\"\\nQuery 1\");","    console.log(users+\"\\n\");","    return;","}) "]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":159,"column":3},"end":{"row":159,"column":3},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1670479089120,"hash":"8a144b299da997f40696fc3154e6f61bdb8aa767"}