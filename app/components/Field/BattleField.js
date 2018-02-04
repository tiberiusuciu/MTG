import React, { Component } from 'react';

import styles from '../../styles/Field/BattleField.css';

class PlayerBox extends Component {
	render() {
		return (
			<div className={styles.BattleField}>
				<p>Battlefield</p>
			</div>
		)
	}
};

export default PlayerBox;
