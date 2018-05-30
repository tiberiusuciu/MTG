import React, { Component } from 'react';

import styles from '../../styles/Menu/CardDisplay.css';

class CardDisplay extends Component {
	render() {
		return (
			<div className={styles.display}>
					<img src={this.props.focusedCard} width="300px" height="400px" />
			</div>
		)
	}
};

export default CardDisplay;
