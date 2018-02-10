import React, { Component } from 'react';

import styles from '../../../styles/Field/Piles/DeckPile.css';

class DeckPile extends Component {
	render() {
		return (
			<div className={styles.DeckPile}>
				<div className={styles.backCard}>
					<div className={styles.backCircle}></div>
				</div>
				<div className={styles.cardCount}>60</div>
			</div>
		)
	}
};

export default DeckPile;

//<img src="https://magiccards.info/scans/en/nph/9.jpg" className={styles.deckCard} />
//<div className={styles.emptyPile}></div>

// <div className={styles.backCard}>
// 	<div className={styles.backCircle}></div>
// </div>



// <div className={styles.deckCard}>
// 	card
// </div>
