import React, { Component } from 'react';

import CardDisplay from './CardDisplay';
import MenuTools from './MenuTools';
import GamePhases from './GamePhases';

import styles from '../../styles/Menu/MenuBox.css';

class MenuBox extends Component {
	render() {
		return (
			<div className={styles.menubox}>
				<CardDisplay focusedCard={this.props.client.focusedCard}/>
				<GamePhases currentTurn={this.props.game.currentTurn} />
        <MenuTools users={this.props.users} client={this.props.client} focusedTab={this.props.client.focusedTab} onTabFocusedChange={this.props.onTabFocusedChange} onCardFocus={this.props.onCardFocus}/>
			</div>
		)
	}
};

export default MenuBox;
