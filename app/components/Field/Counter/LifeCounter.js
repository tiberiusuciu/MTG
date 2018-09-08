import React, { Component } from 'react';

import styles from '../../../styles/Field/Counter/PlayerCountersList.css';

class LifeCounter extends Component {

	counterClickIncrement(e) {
		e.preventDefault();
		if (this.props.client.userID == this.props.user.id) {
			this.props.onCounterClick("life", this.props.client.userID, ++this.props.user.counters.life);
		}
	}

	counterClickDecrement(e) {
		e.preventDefault();
		if (this.props.client.userID == this.props.user.id) {
			this.props.onCounterClick("life", this.props.client.userID, --this.props.user.counters.life);
		}
	}

	render() {
		return (
			<div onClick={(e) => {this.counterClickIncrement(e)}} className={styles.counter} onContextMenu={(e) => {this.counterClickDecrement(e)}} style={{backgroundColor: this.props.color}}>
				<div className={styles.hoverStyle}>
					<div className={styles.text}>{this.props.title}</div>
					<div className={styles.counterCount}>{this.props.value}</div>
				</div>
			</div>
		)
	}
};

export default LifeCounter;
