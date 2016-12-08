"use strict";
var express = require('express');
var router = express.Router();
const StalkSample = require("../src/sample/node/stalk_sample");
/* GET home page. */
router.get('/', function (req, res, next) {
    StalkSample.testCall();
    res.render('index', { title: 'Express' });
});
module.exports = router;
