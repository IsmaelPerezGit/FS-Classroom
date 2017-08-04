var express = require('express');
var router = express.Router();
var fs = require('fs');

var reader = fs.createReadStream('classrooms.json', 'utf8');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Blah School',
  });
});




module.exports = router;
