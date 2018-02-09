import React, { Component } from 'react';

import styles from '../../../styles/Field/Piles/DeckPile.css';

class DeckPile extends Component {
	render() {
		return (
			<div className={styles.DeckPile}>
				<img src="https://magiccards.info/scans/en/nph/9.jpg" className={styles.deckCard} />
			</div>
		)
	}
};

export default DeckPile;





// <div className={styles.deckCard}>
// 	card
// </div>
