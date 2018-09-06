import React, { Component } from 'react';

import HandCard from './HandCard';

import styles from '../../../styles/Menu/TabStyle.css';

class HandTab extends Component {

	generateCards() {
		return this.props.user.hand.map((card) => {
			return (
				<HandCard card={card} client={this.props.client} onCardFocus={this.props.onCardFocus} onRequestPlayCard={this.props.onRequestPlayCard} />
			)
		});
	}

	render() {
		return (
			<div className={styles.tabLayout}>
        {this.generateCards()}
			</div>
		)
	}
};

export default HandTab;
