import React, { Component } from 'react';

// import FieldCard from './FieldCard';

import styles from '../../styles/Field/FieldCard.css';

class FieldCard extends Component {
	render() {
		return (
			<div>
				<img className={styles.card} src="https://magiccards.info/scans/en/nph/9.jpg"/>
			</div>
		)
	}
};

export default FieldCard;
