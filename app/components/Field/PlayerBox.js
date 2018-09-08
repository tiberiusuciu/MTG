import React, { Component } from 'react';

import BattleField from './BattleField';

import styles from '../../styles/Field/PlayerField.css';

class PlayerBox extends Component {
	render() {
		return (
			<div className={styles.PlayerBox}>
				<BattleField 
					user={this.props.user}
					users={this.props.users}
					client={this.props.client} 
					onRequestCardToHand={this.props.onRequestCardToHand} 
					onCardFocus={this.props.onCardFocus}
					onUpdateCardPosition={this.props.onUpdateCardPosition}
					onHandleTapCard={this.props.onHandleTapCard}
					onHandleSelect={this.props.onHandleSelect}/>
			</div>
		)
	}
};

export default PlayerBox;
