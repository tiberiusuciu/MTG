import React, { Component } from 'react';

import styles from '../../../styles/Field/Piles/DeckPile.css';

class DeckPile extends Component {
	requestCard(amount) {
		if (this.props.user.id == this.props.client.userID) {
			this.props.onRequestCardToHand(amount, this.props.client.userID);
		}
	}

	render() {
		return (
			<div className={styles.DeckPile} onDoubleClick={()=> {this.requestCard(1)}}>
				<div className={styles.backCard}>
					<div className={styles.backCircle}></div>
				</div>
				<div className={styles.cardCount}>60</div>
			</div>
		)
	}
};

export default DeckPile;
