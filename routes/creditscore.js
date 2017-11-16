var SCORE_MAX = 800;
var SCORE_MIN = 550;
var util = require('util');

/*
 * POST scoring.
 */

exports.score = function(req, res){
  console.log('Request body: ' + util.inspect(req.body));
  var firstname = req.body.firstname,
      lastname = req.body.lastname,
      dateofbirth = req.body.dateofbirth,
      ssn = req.body.ssn;
  
  var score = firstname.hashCode() + lastname.hashCode() + dateofbirth.hashCode() + ssn.hashCode();
  
  score = score % SCORE_MAX;
  
  while (score < SCORE_MIN) {
	score = score + 100;
  }  
  
  var resultData = { "firstname": firstname, 
		  "lastname": lastname, 
		  "ssn": ssn, 
		  "dateofbirth": dateofbirth, 
		  "score": score
		};

  
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(resultData));
};

/*
 * Hashcode for String.
 */

String.prototype.hashCode = function() {
  var hash = 0, i, chr;
  if (this.length === 0) {
	  return hash;
  }
  for (i = 0; i < this.length; i++) {
	/*jslint bitwise: true */
    chr   = this.charCodeAt(i);
    hash  = ((hash << 5) - hash) + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return Math.abs(hash);
};
