import React, { Component } from 'react';

import PlayerInfo from './PlayerInfo';

import styles from '../../styles/Field/PlayerField.css';

class PlayerBox extends Component {
	render() {
		return (
			<div className={styles.PlayerBox}>
				<PlayerInfo />
				asd
			</div>
		)
	}
};

export default PlayerBox;
