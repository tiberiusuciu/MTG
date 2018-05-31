import React, { Component } from 'react';

import styles from '../../styles/Field/PlayerPicture.css';

class PlayerPicture extends Component {
	render() {
		return (
			<div className={styles.PlayerPicture} style={{backgroundImage: "linear-gradient(to bottom, transparent, transparent, transparent, #000000, black, black, black), url(" + this.props.user.picture + ")" }}>
        <p className={styles.PlayerName}>{this.props.user.username}</p>
			</div>
		)
	}
};

export default PlayerPicture;
