import React, { Component } from 'react';

import styles from '../../../styles/Field/Piles/GraveyardPile.css';

class GraveyardPile extends Component {
	render() {
		return (
			<div className={styles.GraveyardPile}>
				<div className={styles.emptyPile}></div>
				<div className={styles.cardCount}>0</div>
			</div>
		)
	}
};

export default GraveyardPile;
// <img src="https://magiccards.info/scans/en/nph/9.jpg" className={styles.graveyardCard} />
