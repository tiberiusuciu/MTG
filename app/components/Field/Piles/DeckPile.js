import React, { Component } from 'react';
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";

import styles from '../../../styles/Field/Piles/DeckPile.css';

class DeckPile extends Component {
	requestCard(amount) {
		if (this.props.user.id == this.props.client.userID) {
			this.props.onRequestCardToHand(amount, this.props.client.userID);
		}
	}

	render() {
		return (
			<div className={styles.contextStyling}>
				<ContextMenuTrigger id="some_unique_identifier">
					<div className={styles.DeckPile} onDoubleClick={()=> {this.requestCard(1)}}>
						<div className={styles.backCard}>
							<div className={styles.backCircle}></div>
						</div>
						<div className={styles.cardCount}>&infin;</div>
					</div>	
				</ContextMenuTrigger>	
				<ContextMenu id="some_unique_identifier">
					<MenuItem data={{foo: 'bar'}} onClick={()=> {this.requestCard(1)}}>
						Draw
					</MenuItem>
					<MenuItem data={{foo: 'bar'}} onClick={this.handleClick}>
						Draw... (Not Yet Implemented)
					</MenuItem>
					<MenuItem data={{foo: 'bar'}} onClick={this.handleClick}>
						Scry... (Not Yet Implemented)
					</MenuItem>
					<MenuItem data={{foo: 'bar'}} onClick={this.handleClick}>
						Mill... (Not Yet Implemented)
					</MenuItem>
					<MenuItem data={{foo: 'bar'}} onClick={this.handleClick}>
						Reveal top card (Not Yet Implemented)
					</MenuItem>
					<MenuItem data={{foo: 'bar'}} onClick={this.handleClick}>
						Reveal to... (Not Yet Implemented)
					</MenuItem>
					<MenuItem data={{foo: 'bar'}} onClick={this.handleClick}>
						Exile... (Not Yet Implemented)
					</MenuItem>
					<MenuItem data={{foo: 'bar'}} onClick={this.handleClick}>
						Search... (Not Yet Implemented)
					</MenuItem>
					<MenuItem data={{foo: 'bar'}} onClick={this.handleClick}>
						Draw From Bottom... (Not Yet Implemented)
					</MenuItem>
					<MenuItem data={{foo: 'bar'}} onClick={this.handleClick}>
						Shuffle... (Not Yet Implemented)
					</MenuItem>
					<MenuItem divider />
					<MenuItem data={{foo: 'bar'}} onClick={this.handleClick}>
						ContextMenu Item 3
					</MenuItem>
				</ContextMenu>
			</div>
		)
	}
};

export default DeckPile;
