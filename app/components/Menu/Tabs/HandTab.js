import React, { Component } from 'react';

import HandCard from './HandCard';

import styles from '../../../styles/Menu/TabStyle.css';

class HandTab extends Component {

	generateCards() {
		return this.props.user.hand.map((card) => {
			var cardLink = "https://deckmaster.info/images/cards/" + card.multiverseid + ".jpg"
			return (
				<HandCard cardInfo={card} cardLink={cardLink} onCardFocus={this.props.onCardFocus} />
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
