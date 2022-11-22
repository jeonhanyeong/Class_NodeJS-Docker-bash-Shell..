const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const router = express.Router();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.set('port', 8000)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'views')));

//routes setup
var main = require('./routes/main.js');
app.use('/', main);

app.listen(app.get('port'), () =>{
	console.log('8000 Port : 서버 실행 중')
});
