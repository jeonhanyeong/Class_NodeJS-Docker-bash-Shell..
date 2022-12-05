const express = require("express");
const bodyParser = require('body-parser');
const axios = require("axios");
const CircularJSON = require("circular-json");
const request = require("request");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));
app.use(express.json());
app.use(express.urlencoded({extended : true}));

let urls = "";


// simple api
app.get("/Hello", (req, res) => {
  urls = "http://3.36.225.231:3000/Hello";
  request(urls, { json: true}, (err, result, body) => {
      if (err) { return console.log(err); }
      res.send(CircularJSON.stringify(body))
  })
});

// request param X, response O
app.get("/api/users", (req, res) => {
    res.json({ ok:true, users: users })
})

// Query param, request param O, response O
app.get("/api/users/user", (req, res) => {
    const user_id = req.query.user_id
    const user = users.filter(data => data.id == user_id)
    res.json({ ok:false, users: user })
})

// Path param, request param O, response O
app.get("/api/users/:user_id", (req, res) => {
    const user_id = req.params.user_id
    const user = users.filter(data => data.id == user_id)
    res.json({ ok:false, users: user })
})

// post, request body, response O
app.post("/api/users/userBody", (req, res) => {
    const user_id = req.body.id
    const user = users.filter(data => data.id == user_id)
    res.json({ ok:true, users: user })
})

// post, request body, response O
app.post("/api/users/add", (req, res) => {
    const { id, name } = req.body
    const user = users.concat({ id, name })
    res.json({ ok:true, users: user })
})

// put, request body, response O
app.put("/api/users/update", (req, res) => {
    const { id, name } = req.body
    const user = users.map( data => {
        if (data.id == id ) data.name = name
        return {
            id : data.id,
            name : data.name
        }
    })
    res.json({ ok:true, users: user })
})

// patch, request body, response O
app.patch("/api/user/update/:user_id", (req, res) => {
    const { user_id } = req.params
    const { name } = req.body
    const user = users.map( data => {
        if (data.id == user_id ) data.name = name
        return {
            id : data.id,
            name : data.name
        }
    })
    res.json({ ok:true, users: user })
})

// delete, request body, response O
app.delete("/api/user/delete", (req, res) => {
    const { user_id } = req.body
    const user = users.filter( data => data.id != user_id )
    res.json({ ok:true, users: user })
})