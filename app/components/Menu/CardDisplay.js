import React, { Component } from 'react';

import styles from '../../styles/Menu/CardDisplay.css';

class CardDisplay extends Component {
	render() {
		return (
			<div className={styles.display}>
					<img width="300px" height="400px" />
			</div>
		)
	}
};

//src="https://magiccards.info/scans/en/dgm/11.jpg"

export default CardDisplay;
