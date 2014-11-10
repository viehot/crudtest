var app = module.parent.exports.app;
var Persons = require('../models/persons.js');

app.get('/list', function(req, res){
    Persons.find({}, function(err, docs){
        res.render('list', { title: 'List', persons: docs});
    });
});