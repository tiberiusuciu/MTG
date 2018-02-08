import React, { Component } from 'react';

import PlayerPicture from './PlayerPicture';

import styles from '../../styles/Field/PlayerInfo.css';

class PlayerInfo extends Component {
	render() {
		return (
			<div className={styles.PlayerInfo}>
				<PlayerPicture />
				<div>
					test
				</div>
			</div>
		)
	}
};

export default PlayerInfo;
