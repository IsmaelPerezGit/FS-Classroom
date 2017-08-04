var express = require('express');
var router = express.Router();
var fs = require('fs');

var reader = fs.createReadStream('classrooms.json', 'utf8');


/* GET classroom page. */
router.get('/', function(req, res, next) {
  res.render('classroom', {
    title: 'Blah School',
    classroom: classData,
    students: studentNames,studentAverage: average
  });
});


getGradeAverage = function() {
  var average = 0;
  var scoreTotal = 0;
  var studentScore = classData[0].scores;
  for (var i = 0; i < studentScore.length; i++) {
    scoreTotal += studentScore[i];
    average = scoreTotal / studentScore.length;
  }
  return average;
}


reader.on('data', function(info) {
  classData = JSON.parse(info)[0].students;
  studentNames = JSON.parse(info)[0].students[0].name;
  average = getGradeAverage();
})
module.exports = router;
