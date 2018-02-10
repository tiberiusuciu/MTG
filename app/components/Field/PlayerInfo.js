import React, { Component } from 'react';

import PlayerPicture from './PlayerPicture';
import PlayerPiles from './PlayerPiles';
import PlayerCountersList from './Counter/PlayerCountersList';

import styles from '../../styles/Field/PlayerInfo.css';

class PlayerInfo extends Component {
	render() {
		return (
			<div className={styles.PlayerInfo}>
				<PlayerPicture />
				<div className={styles.QuicktoolsArea}>
					<PlayerCountersList />
					<PlayerPiles />
				</div>
			</div>
		)
	}
};

export default PlayerInfo;
