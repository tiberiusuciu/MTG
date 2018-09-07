import React, { Component } from 'react';

import FieldCard from './FieldCard';
import PlayerInfo from './PlayerInfo';

import styles from '../../styles/Field/BattleField.css';

class BattleField extends Component {

	displayCards() {
		return this.props.user.battlefield.map((card) => {
			return (
				<FieldCard 
					card={card}
					onCardFocus={this.props.onCardFocus}
					onUpdateCardPosition={this.props.onUpdateCardPosition}
					client={this.props.client}/>
			);
		});
	}

	render() {
		return (
			<div className={styles.BattleField}>
				<PlayerInfo user={this.props.user} client={this.props.client} onRequestCardToHand={this.props.onRequestCardToHand} />
				{this.displayCards()}
			</div>
		)
	}
};

export default BattleField;
