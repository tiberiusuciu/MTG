var _ = require('lodash');

var config = require('../../config.js');
var setsToOmit = require('../../setsToOmit.js');
var User = require('./User.js');

var MTGJSON = require('../resources/mtg.json');

function Game() {
	this.users = [];
	this.nextPlayerID = 0;
	this.obj_keys_sets = Object.keys(MTGJSON);
}

Game.prototype.addUser = function(username, profilepic) {
	var user = new User(username, profilepic, this.nextPlayerID);
	this.users.push(user);
	var id = this.nextPlayerID;
	this.nextPlayerID++;
	return id;
};

Game.prototype.getUsers = function() {
	return this.users;
};

Game.prototype.drawCard = function(amount, who) {
	var cards = [];
	for (var i = 0; i < amount; i++) {
		var found = false;
		while (!found) {
			var ran_set = this.obj_keys_sets[Math.floor(Math.random() * this.obj_keys_sets.length)];
			var set = MTGJSON[ran_set];
			// var foundElligibleSet = false;
			// while (!foundElligibleSet) {
			// 	console.log("LOOPING");
			// 	console.log("HERE IS THE CURRENT SET", set.code.toLowerCase());
			// 	if(_.indexOf(setsToOmit.sets, set.code.toLowerCase()) > -1) {
			// 		var ran_set = this.obj_keys_sets[Math.floor(Math.random() * this.obj_keys_sets.length)];
			// 		var set = MTGJSON[ran_set];
			// 		foundElligibleSet = false;
			// 	}
			// 	else {
			// 		foundElligibleSet = true;
			// 	}
			// }
			var set_code = set.code.toLowerCase();
			var card = set.cards[Math.floor(Math.random() * set.cards.length)];
			if (card.multiverseid) {
				found = true;
				card.MTG_SELECTED_TYPE = set_code;
				cards[cards.length] = card;
			}
			else {
			}
		}
	}

	for (var i = 0; i < this.users.length; i++) {
		if (this.users[i].id == who) {
			this.users[i].hand.push.apply(this.users[i].hand, cards);
		}
	}

	return this.users;
};

Game.prototype.removeUser = function(who) {
	var index = -1;
	for (var i = 0; i < this.users.length; i++) {
		if (this.users[i].id == who) {
			index = 0;
			break;
		}
	}
	if (index > -1) {
	  this.users = this.users.splice(index, 1);
		console.log("REMOVING USER, HERE IS NEW lenght", this.users.length);
	}
	return this.users;
};

module.exports = Game;
