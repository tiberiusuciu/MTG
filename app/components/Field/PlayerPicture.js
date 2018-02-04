import React, { Component } from 'react';

import styles from '../../styles/Field/PlayerPicture.css';

class PlayerPicture extends Component {
	render() {
		return (
			<div className={styles.PlayerPicture}>
        <p className={styles.PlayerName}>Player Name</p>
			</div>
		)
	}
};

export default PlayerPicture;
