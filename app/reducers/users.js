import {
	NEW_USER,
	USERS_UPDATE,
} from '../actions';

const users = (state = [
	{
		id: 0,
		username: "Chris",
		picture: "https://magiccards.info/scans/en/nph/9.jpg",
		counters: {
			life: 20,
			poison: 0,
			white: 0,
			blue: 0,
			black: 0,
			red: 0,
			green: 0,
		},
		hand: [],
		piles: {
			deck: [],
			graveyard: [],
			exile: []
		},
		battlefield: [],
	},
	{
		id: 1,
		username: "Cam",
		picture: "https://magiccards.info/scans/en/eve/85.jpg",
		counters: {
			life: 20,
			poison: 0,
			white: 0,
			blue: 0,
			black: 0,
			red: 0,
			green: 0,
		},
		hand: [],
		piles: {
			deck: [],
			graveyard: [],
			exile: []
		},
		battlefield: [],
	},
], action) => {
	switch (action.type) {
		case USERS_UPDATE:
			return action.users;
		default:
			return state;
	}
};

export default ({
	users,
});
