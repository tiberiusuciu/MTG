import {
	NEW_USER,
  FOCUS_TAB,
} from '../actions';

const client = (state = {
	userID: 0,
  focusedTab: "Hand",
  focusedCard: "https://magiccards.info/scans/en/nph/9.jpg",
}, action) => {
	switch (action.type) {
    case FOCUS_TAB:
      return {
        ...state,
        focusedTab: action.focusedTab,
      }
		default:
			return state;
	}
};

export default ({
	client,
});
