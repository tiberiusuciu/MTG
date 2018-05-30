import React, { Component } from 'react';

import styles from '../../styles/Menu/MenuBox.css';

class GamePhases extends Component {
	render() {
		return (
			<div className={styles.GamePhases}>
        <div className={styles.phase + " " + styles.title}>{this.props.currentTurn}</div>
        <div className={styles.phase + " " + styles.next}>Next Phase</div>
			</div>
		)
	}
};

export default GamePhases;
