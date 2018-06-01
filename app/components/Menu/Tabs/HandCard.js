import React, { Component } from 'react';

import styles from '../../../styles/Menu/TabStyle.css';

class HandCard extends Component {
	handleHover(cardLink) {
		this.props.onCardFocus(cardLink);
	}

	handlePlayCard() {
		this.props.onRequestPlayCard(this.props.card.MTG_CARD_ID, this.props.client.userID);
	}

	render() {
		return (
			<div key={this.props.card.MTG_CARD_ID} className={styles.cardShape} onMouseOver={() => {this.handleHover(this.props.cardLink)}} onDoubleClick={()=>{this.handlePlayCard()}}>
        <img src={this.props.cardLink} width={100} height={140}/>
			</div>
		)
	}
};

export default HandCard;
