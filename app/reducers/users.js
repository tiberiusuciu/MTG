import {
	NEW_USER,
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
			hand: [

			],
			piles: {
				deck: [

				],
				graveyard: [

				],
				exile: [

				]
			},
		},
	], action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default ({
	users,
});
