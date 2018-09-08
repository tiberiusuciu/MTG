import React, { Component } from 'react';

import PlayerPicture from './PlayerPicture';
import PlayerPiles from './PlayerPiles';
import PlayerCountersList from './Counter/PlayerCountersList';

import styles from '../../styles/Field/PlayerInfo.css';

class PlayerInfo extends Component {
	render() {
		return (
			<div className={styles.PlayerInfo}>
				<PlayerPicture user={this.props.user}/>
				<div className={styles.QuicktoolsArea}>
					<PlayerCountersList user={this.props.user} client={this.props.client} onCounterClick={this.props.onCounterClick} />
					<PlayerPiles user={this.props.user} client={this.props.client} onRequestCardToHand={this.props.onRequestCardToHand}/>
				</div>
			</div>
		)
	}
};

export default PlayerInfo;
