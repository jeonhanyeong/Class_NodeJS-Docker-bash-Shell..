const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")
const request = require("request")
const moment = require("moment")
const dateutil = require("data-utils")
const mongoClient = require("mongodb").MongoClient

let day = new Date().toLocaleDateString('sv').replaceAll('-','');

var keys = "0ANiabS3khoXLJNYEm0QQL1rRF3z9l%2Botmj0pW%2F3agWf8wZayrEOs%2Bw9DtGPze4H6cVI28ipfl3yhvZbCYW8Qg%3D%3D";
var url = "http://apis.data.go.kr/1360000/WthrChartInfoService/getSurfaceChart";

var queryParams = '?' + encodeURIComponent('serviceKey') + '=' + keys;
queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1');
queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10');
queryParams += '&' + encodeURIComponent('dataType') + '=' + encodeURIComponent('JSON');
queryParams += '&' + encodeURIComponent('code') + '=' + encodeURIComponent('3');
queryParams += '&' + encodeURIComponent('time') + '=' + encodeURIComponent(day);

// define schema
var DataSchema = mongoose.Schema({
    resultcode : String,
    resultMsg : String,
    dataType : String,
    manfile : String
})

// create model with mongodb collection and schema
var Data = mongoose.model('weather', DataSchema);

// getdata
router.get('/getdata', function(req, res, next) {
    request({
            url : url + queryParams,
            method : "GET"
    }, function (error, response, body) {
        Data.find({}).remove().exec();
        if (error) console.log(error);
//        console.log('resultCode', response.resultCode);
//        console.log('Headers', JSON.stringify(response.headers));
    
        let data = JSON.parse(body);
        let imgSrcArr = data['response']['body']['items']['item'][0]['man-file'].split(',');
        let imgSrc1 = imgSrcArr[0].slice(1);
        let imgSrc2 = imgSrcArr[1].trim().slice(0, -1);
        console.log(imgSrc1);
        console.log(imgSrc2);

        console.log(data['response']['body']['items']['item']['man-file']);
        res.writeHead(200);
        var template =`
        <!doctype html>
        <html>
        <head>
        <title>Result</title>
        <meta charset="urf-8">
        </head>
        <body>
        <img src="${imgSrc1}"></img><br>
        <img src="${imgSrc2}"></img><br>
        </body>
        </html>
        `;
        res.end(template);
    })
})

module.exports = router;