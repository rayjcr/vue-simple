var express = require('express');
var path = require('path');

var cheerio = require('cheerio'); //分析网页
var superagent = require('superagent'); //轻量级ajax
// var eventproxy = require('eventproxy'); //控制并发(处理异步问题)

var url = require('url');

var app = express();

var port = process.env.PORT || 3000;



var server = app.listen(3000, function () {
  var port = server.address().port
  console.log("应用实例，访问地址为 http://127.0.0.1:",port)
})

