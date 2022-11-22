const express    = require('express');
const app        = express.Router();
const bodyParser = require('body-parser');
const fs         = require('fs');
const path       = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));
app.use(express.json());
app.use(express.urlencoded({extended : true}));

module.exports = app;
