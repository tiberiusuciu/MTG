var User = function(username, profilepic, userID, selectColor) {
	this.id = userID;
	this.username = username;
	this.picture = profilepic;
	this.counters = {
		life: 20,
		poison: 0,
		white: 0,
		blue: 0,
		black: 0,
		red: 0,
		green: 0,
	};
	this.hand = [];
	this.piles = {
		deck: [],
		graveyard: [],
		exile: []
	};
	this.battlefield = [];
	this.selectColor = selectColor;
	this.selectedCard = -1;
}

module.exports = User;
