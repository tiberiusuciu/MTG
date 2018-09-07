module.exports = {
	actionConst: {
		SET_USER_CURRENT_INPUT: 'SET_USER_CURRENT_INPUT',
		SUBMIT_USER_INPUT: 'SUBMIT_USER_INPUT',
		NEW_LOG_ENTRY: 'NEW_LOG_ENTRY',
		SEND_COMMAND: 'SEND_COMMAND',
		INVALID_COMMAND: 'INVALID_COMMAND',
		NEW_USER: 'NEW_USER',
		FOCUS_TAB: 'FOCUS_TAB',
		FOCUS_CARD: 'FOCUS_CARD',
		ASK_FOR_CARD: 'ASK_FOR_CARD',
		CLIENT_CONNECT: 'CLIENT_CONNECT',
		USERS_UPDATE: 'USERS_UPDATE',
		PLAY_CARD: 'PLAY_CARD',
		CARD_POSITION_UPDATE: 'CARD_POSITION_UPDATE',
	},
	card_image_repository: {
		// Requires SET/NUMBER OR MCINUMBER as additional arguments
		hd_link: "https://img.scryfall.com/cards/large/en/",
		hd_link_token:  ".jpg?1517813031",
		// Require MULTIVERSE ID to be inserted in between
		fallback_link: "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=",
		fallback_link_ending: "&type=card",
	}
}
