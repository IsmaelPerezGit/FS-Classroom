var express = require('express');
var router = express.Router();
var fs = require('fs');

var reader = fs.createReadStream('classrooms.json', 'utf8');

/* Read classrooms.json file */
reader.on('data', function(info) {
  console.log("new info recieved");
  mathClassData = JSON.parse(info)[0].students;
  mathStudentNames = JSON.parse(info)[0].students[0].name;
  classData = JSON.parse(info);
  math = classData[0].subject;
  science = classData[1].subject;
  music = classData[2].subject;
  literature = classData[4].subject;
});

/* GET home page. */ 
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'ACME tech school',
    classes: classData,
  });
});

/* GET classroom page. */
router.get('/classlist', function(req, res, next) {
  res.render('classList', {
    title: 'Class List',
    classroom: classData,
    mathClass: math,
    scienceClass: science,
    musicClass: music,
    litClass: literature
  });
});

/* GET math page. */
router.get('/math', function(req, res, next) {
  res.render('math', {
    title: 'ACME Math',
    classroom: mathClassData,
    students: mathStudentNames,
    mathClass: math,
    scienceClass: science,
    musicClass: music,
    litClass: literature
  });
});

/* GET science page. */
router.get('/science', function(req, res, next) {
  res.render('science', {
    title: 'ACME Science',
    classroom: mathClassData,
    students: mathStudentNames,
    mathClass: math,
    scienceClass: science,
    musicClass: music,
    litClass: literature
  });
});

/* GET music page. */
router.get('/music', function(req, res, next) {
  res.render('music', {
    title: 'ACME Music',
    classroom: mathClassData,
    students: mathStudentNames,
    mathClass: math,
    scienceClass: science,
    musicClass: music,
    litClass: literature
  });
});

/* GET literature page. */
router.get('/literature', function(req, res, next) {
  res.render('literature', {
    title: 'ACME Literature',
    classroom: mathClassData,
    students: mathStudentNames,
    mathClass: math,
    scienceClass: science,
    musicClass: music,
    litClass: literature
  });
});



module.exports = router;
