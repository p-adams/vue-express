var express = require('express')
var db = require('../db')
var bodyParser = require('body-parser');
var app = express()
var router = express.Router()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

router.get('/', (req, res, next) => {
  res.render('index')  
})

module.exports = router;
