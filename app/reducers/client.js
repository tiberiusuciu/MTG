import {
	NEW_USER,
  FOCUS_TAB,
	FOCUS_CARD,
	CLIENT_CONNECT,
} from '../actions';

const client = (state = {
	userID: 0,
  focusedTab: "Hand",
  focusedCard: "https://deckmaster.info/images/cards/MPS_AKH/429860-hr.jpg",
}, action) => {
	switch (action.type) {
    case FOCUS_TAB:
      return {
        ...state,
        focusedTab: action.focusedTab,
      };
		case FOCUS_CARD:
			return {
				...state,
				focusedCard: action.focusedCard,
			};
		case CLIENT_CONNECT:
			console.log("ASSIGNGING NEW STUFF", action);
			return {
				...state,
				userID: action.clientID,
			};
		default:
			return state;
	}
};

export default ({
	client,
});
