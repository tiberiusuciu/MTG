import React, { Component } from 'react';

import styles from '../../../styles/Menu/TabStyle.css';

class HandCard extends Component {
	handleHover(cardLink) {
		this.props.onCardFocus(cardLink);
	}

	render() {
		return (
			<div className={styles.cardShape} onMouseOver={() => {this.handleHover(this.props.cardLink)}}>
        <img src={this.props.cardLink} width={100} height={140}/>
			</div>
		)
	}
};

export default HandCard;
