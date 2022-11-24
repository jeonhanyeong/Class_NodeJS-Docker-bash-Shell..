const express = require('express');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');
const mongoClient = require('mongodb').MongoClient;
const app = express();

app.use(morgan('dev'));

var db;
var databaseUrl = "mongodb+srv://admin:pass@cluster0.9lorjx4.mongodb.net/test";

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get('/mydata-list', (req, res) => {
  console.log(mongoClient)
  mongoClient.connect(databaseUrl, function(err, database) {
    if (err != null) {
      res.json({'count' : 0});
      console.log(err);
    } else {
      db = database.db('test');
      db.collection('things').find({}, {_id:1})
      .toArray(function(err, result) {
        if (err) throw err;
        console.log('result: ');
        console.log(result);
        //res.json(JSON.stringify(result));

        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        var template = `
            <table border="1" margin: auto; text-align: center;>
            <tr>
              <th> 번 호 </th>
              <th> 이 름 </th>
            </tr>
        `;

	result.forEach((item) => {
        	template += `
        	<tr>
        		<th>${item.id}</th>
        		<th>${item.name}</th>
        	</tr>`
        });

         template +=`</table>`;
      res.end(template);
      });
    }
  });
});

module.exports = app;
