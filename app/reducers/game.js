import {
	NEW_USER,
} from '../actions';

const game = (state = {
	currentUser: 0,
	currentTurn: "Untap",
	chatlogs: [
	],
}, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default ({
	game,
});
