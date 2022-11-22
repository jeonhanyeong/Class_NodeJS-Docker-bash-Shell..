const express = require('express');
const app = express.Router();
const fs = require('fs');
const view = require("../views/index.html");

app.get("/", function (req, res){
	fs.readFile("../views/index.html", "utf8", function (err,data) {
		res.end(data);
		console.log(data);
	})
});

module.exports = app;
