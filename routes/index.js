var express = require('express');
var router = express.Router();
var fs = require('fs');

var reader = fs.createReadStream('classrooms.json', 'utf8');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'ACME tech school',
    classes: classData,
  });
});


reader.on('data', function(info) {
  classData = JSON.parse(info);
  math = classData[0].subject;
  science = classData[1].subject;
  music = classData[2].subject;
  literature = classData[4].subject;

});


// var subjectGetter = function(){
//   classData = JSON.parse(info);
//   var classSub  = "";
//   for (var i = 0; i < classData.length; i++) {
//     classSub = classdata[i];
//   }
//   return classSub;
// }
// subjectGetter();


module.exports = router;
