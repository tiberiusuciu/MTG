import React, { Component } from 'react';

import DeckPile from './Piles/DeckPile';
import GraveyardPile from './Piles/GraveyardPile';
import ExilePile from './Piles/ExilePile';


import styles from '../../styles/Field/PlayerPiles.css';

class PlayerPiles extends Component {
	render() {
		return (
			<div className={styles.PlayerPiles}>
				<DeckPile user={this.props.user} client={this.props.client} onRequestCardToHand={this.props.onRequestCardToHand} />
				<GraveyardPile user={this.props.user} client={this.props.client} />
				<ExilePile user={this.props.user} client={this.props.client} />
			</div>
		)
	}
};

export default PlayerPiles;
