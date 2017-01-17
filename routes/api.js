var express = require('express')
var bodyParser = require('body-parser');
var db = require('../db')
var app = express()
var router = express.Router()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

router.get('/', (req, res, next) => {
    
    db.query('SELECT * FROM todos', function(err, results, query) {
    if (err) throw err;
    res.send(results)    
    })
})

router.post('/', (req, res, next) => {
    var todo = {
        todo: req.body.todo,
        completed: 0
    }
     db.query('insert into todos SET? ', todo, function(err, results, query) {
        if (err) throw err;
        console.log("added todo")
     })
    res.redirect('../')
})

router.delete('/:id', (req, res, next) => {
    db.query('delete from todos where id=?', req.params.id, function(err, results, query){
        if(err) throw err
        console.log('deleted todo')
    })
})


module.exports = router
