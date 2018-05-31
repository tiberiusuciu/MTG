import React, { Component } from 'react';

import FieldCard from './FieldCard';

import styles from '../../styles/Field/BattleField.css';

class BattleField extends Component {

	displayCards() {
		return this.props.user.battlefield.map((card) => {
			var cardLink = "https://magiccards.info/scans/en/" + card.MTG_SELECTED_TYPE + "/" + card.number + ".jpg";
			return (
				<FieldCard card={card} cardLink={cardLink} />
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
