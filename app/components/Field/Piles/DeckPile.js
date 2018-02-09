import React, { Component } from 'react';

import styles from '../../../styles/Field/Piles/DeckPile.css';

class DeckPile extends Component {
	render() {
		return (
			<div className={styles.DeckPile}>
				<div className={styles.deckCard}>
					card
				</div>
			</div>
		)
	}
};

export default DeckPile;
