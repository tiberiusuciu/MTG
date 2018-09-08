var _ = require('lodash');

var config = require('../../config.js');
var setsToOmit = require('../../setsToOmit.js');
var User = require('./User.js');

var MTGJSON = require('../resources/mtg.json');

function Game() {
	this.cardID = 0;
	this.users = [];
	this.nextPlayerID = 0;
	this.obj_keys_sets = Object.keys(MTGJSON);
}

Game.prototype.addUser = function(username, profilepic) {
	// This is for testing purposes, users will already have a default select colors
	var colors = ['#4286f4', '#f78b42', '#aae53b', '#e2dd38', '#dd35d2', '#db4a34'];
	var color = colors[_.random(0, colors.length - 1)];
	// TO BE REMOVED
	var pics = [
		"https://deckmaster.info/images/cards/DDP/401706.jpg",
		"https://magiccards.info/scans/en/eve/85.jpg",
		"https://img.scryfall.com/cards/large/en/ddg/58.jpg?1517813031",
		"https://img.scryfall.com/cards/large/en/ddn/19.jpg?1517813031",
	]
	profilepic = pics[_.random(0, pics.length - 1)];
	var user = new User(username, profilepic, this.nextPlayerID, color);
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

			// This is to exclude sets to generate if ever needed
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
				card.MTG_CARD_ID = this.cardID;
				card.MTG_CARD_LINK = this.generate_image_link(card);
				card.MTG_CARD_IS_TAPPED = false;
				// card.MTG_CARD_OWNER = who;
				card.xpos = 24;
				card.ypos = 24;
				this.cardID++;
				cards[cards.length] = card;
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

Game.prototype.generate_image_link = function(card) {

	var link = config.card_image_repository.hd_link;
	link += card.MTG_SELECTED_TYPE + "/" + (card.mciNumber ?  card.mciNumber : card.number) + config.card_image_repository.hd_link_token;

	// Sync method for image generation, front-end will show a blank card in the meanwhile in order to maintain page responsiveness 

	var request = require('sync-request');
	var res = request('GET', link);
	if (res.statusCode == 200) {
		return link;
	}
	return config.card_image_repository.fallback_link + card.multiverseid + config.card_image_repository.fallback_link_ending;
};

Game.prototype.updateCardPositions = function(card, who) {
	this.users = _.map(this.users, function (user) {
		if (user.id == who) {
			user.battlefield = _.map(user.battlefield, function (n) {
				if (n.MTG_CARD_ID == card.id) {
					n.xpos = card.x;
					n.ypos = card.y;
				}
				return n;
			});
		}
		return user;
	});

	return this.users;
};

Game.prototype.tapCard = function(cardID, who) {
	this.users = _.map(this.users, function (user) {
		if (user.id == who) {			
			user.battlefield = _.map(user.battlefield, function (n) {
				if (n.MTG_CARD_ID == cardID) {
					n.MTG_CARD_IS_TAPPED = !n.MTG_CARD_IS_TAPPED;
				}
				return n;
			});
		}
		return user;
	});

	return this.users;
};

Game.prototype.selectCard = function(cardID, who) {
	this.users = _.map(this.users, function (user) {
		if (user.id == who) {
			user.selectedCard = cardID;
		}
		return user;
	});

	return this.users;
};

Game.prototype.removeUser = function(who) {
	_.remove(this.users, function(o) {
		return o.id == who;
	});	
	return this.users;
};

Game.prototype.playCard = function(cardID, who) {
	this.users = _.map(this.users, function (user) {
		if (user.id == who) {
			var card = null;
			_.remove(user.hand, function (cardElement) {
				if (cardElement.MTG_CARD_ID == cardID) {
					card = cardElement;
					return true;
				}
			});
	
			if (card) {
				user.battlefield[user.battlefield.length] = card;
			}
		}
		return user;
	});

	return this.users;
}

module.exports = Game;
