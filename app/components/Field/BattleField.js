import React, { Component } from 'react';

import FieldCard from './FieldCard';

import styles from '../../styles/Field/BattleField.css';

class BattleField extends Component {

	displayCards() {
		return this.props.user.battlefield.map((card) => {
			return (
				<FieldCard card={card} onCardFocus={this.props.onCardFocus}/>
			);
		});
	}

	render() {
		return (
			<div className={styles.BattleField}>
				{this.displayCards()}
			</div>
		)
	}
};

export default BattleField;
