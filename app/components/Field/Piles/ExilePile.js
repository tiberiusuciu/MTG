import React, { Component } from 'react';

import styles from '../../../styles/Field/Piles/ExilePile.css';

class ExilePile extends Component {
	render() {
		return (
			<div className={styles.ExilePile}>
				<img src="https://magiccards.info/scans/en/nph/9.jpg" className={styles.exileCard} />
				<div className={styles.cardCount}>0</div>
			</div>
		)
	}
};

export default ExilePile;
