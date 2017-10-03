var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();
var friends = require("./../data/friends.js");

function apiCalls(app) {
	app.post('/api/friends', function(req, res){
		var user_total = 0;
		var user_scores = req.body.scores;
		var best_match = {};
		var lowest = 0;
		
		// loop through all the scores in the form submitted scores array	
		user_scores.forEach(function(score) {
			user_total += Number(score);
		});
		
		// loop through all the friend objects
		friends.forEach(function(friend) {
			var total = 0;
			
			// loop through all the scores in the friend object scores array
			friend.scores.forEach(function(score) {
				// add score to total
				total += Number(score);
			});
			
			// get difference by subtracting friend total from user_total
			// then compare to see if it is less than or equal to the lowest value above (initially zero)
			// Math.abs() will always return a positive number even when a difference is negative (ie. 5 - 7 = -2) 
			var difference = Math.abs(total - user_total);

			// if the difference is less or lowest is zero, we save the current friend object to the variable above
			if ( difference <= lowest || !lowest ) 
				best_match = friend;
			
			// overwrite the lowest with the difference to compare with the next friend
			lowest = difference;
		});
		
		// We now have the best match 
		console.log(best_match);
	});
}

module.exports = apiCalls;
