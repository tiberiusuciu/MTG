import React, { Component } from 'react';

import PlayerPicture from './PlayerPicture';
import PlayerQuickTools from './PlayerQuickTools';

import styles from '../../styles/Field/PlayerInfo.css';

class PlayerInfo extends Component {
	render() {
		return (
			<div className={styles.PlayerInfo}>
				<PlayerPicture />
				<div className={styles.QuicktoolArea}>
					<PlayerQuickTools />
				</div>
			</div>
		)
	}
};

export default PlayerInfo;
