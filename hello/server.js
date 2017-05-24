'use strict';

const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');

const myapp = require('./app');
const router = express.Router();

// Request logger
app.use(morgan('combined'))

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.raw());


//myapp(router);

// 转到子系统
app.get('/', function(req,res){
    res.send('Hello World!');
});

/* istanbul ignore next */
if (!module.parent) {
  app.listen(80);
  console.log('Express started on port 80');
}
