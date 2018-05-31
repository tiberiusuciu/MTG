import MainPage from '../components/MainPage';
import { connect } from 'react-redux';
// import Oracle from '../modules/oracle';

import {
	setUserCurrentInput, submitCurrentInput, newLogEntry,
	sendCommand, invalidCommand, changeFocusedTab,
	changeFocusedCard, requestCardToHand,
} from '../actions';

const _parser = (username, userCurrentInput) => {
	return Parser.validate(username, userCurrentInput);
	// Oracle.sendCommand(username, parsedCommand, dispatch);
};

const mapStateToProps = (state, ownProps) => {
	return {
		users: state.users,
		game: state.game,
		client: state.client,
		// referredId: ownProps.location.query.referredId,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onUserCurrentInput: (userCurrentInput) => {
			dispatch(setUserCurrentInput(userCurrentInput));
		},
		onSubmitCurrentInput: (username, userCurrentInput) => {
			// Temporarily disabled empty inputs until I figure out what purpose they could serve
			if (userCurrentInput !== "") {
				dispatch(submitCurrentInput(username, userCurrentInput));
				dispatch(newLogEntry(username, userCurrentInput, "#666"));
				// PARSER
				let parsedCommand = _parser(username, userCurrentInput);
				if(parsedCommand.validCommand) {
					if (parsedCommand.broadcast) {
						dispatch(sendCommand(parsedCommand));
					}
					else {
						// When the command does not require to notify the api
					}
				}
				else {
					dispatch(invalidCommand(parsedCommand));
				}
			}
		},
		onTabFocusedChange: (focusedTab) => {
			dispatch(changeFocusedTab(focusedTab));
		},

		onCardFocus: (focusedCard) => {
			dispatch(changeFocusedCard(focusedCard));
		},

		onRequestCardToHand: (amount, who) => {
			dispatch(requestCardToHand(amount, who));
		},
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(MainPage);
