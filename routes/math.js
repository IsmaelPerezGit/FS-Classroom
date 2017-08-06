var express = require('express');
var router = express.Router();
var fs = require('fs');

var reader = fs.createReadStream('classrooms.json', 'utf8');


/* GET classroom page. */
router.get('/', function(req, res, next) {
  res.render('math', {
    title: 'ACME math',
    classroom: classData,
    students: studentNames,
    mathClass: math,
    scienceCLass: science,
    musicClass: music,
    litClass: literature
  });
});

reader.on('data', function(info) {
  classData = JSON.parse(info)[0].students;
  console.log(classData);
  studentNames = JSON.parse(info)[0].students[0].name;
  //  average = getGradeAverage();
})

module.exports = router;
