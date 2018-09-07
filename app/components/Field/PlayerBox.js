import React, { Component } from 'react';

import BattleField from './BattleField';

import styles from '../../styles/Field/PlayerField.css';

class PlayerBox extends Component {
	render() {
		return (
			<div className={styles.PlayerBox}>
				<BattleField user={this.props.user} client={this.props.client} onRequestCardToHand={this.props.onRequestCardToHand} onCardFocus={this.props.onCardFocus} />
			</div>
		)
	}
};

export default PlayerBox;
