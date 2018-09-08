import React, { Component } from 'react';

import styles from '../../../styles/Field/Counter/PlayerCountersList.css';

class PoisonCounter extends Component {
	counterClickIncrement(e) {
		e.preventDefault();
		if (this.props.client.userID == this.props.user.id) {
			this.props.onCounterClick("poison", this.props.client.userID, ++this.props.user.counters.poison);
		}
	}

	counterClickDecrement(e) {
		e.preventDefault();
		if (this.props.client.userID == this.props.user.id) {
			this.props.onCounterClick("poison", this.props.client.userID, --this.props.user.counters.poison);
		}
	}

	render() {
		return (
			<div onClick={(e) => {this.counterClickIncrement(e)}} onContextMenu={(e) => {this.counterClickDecrement(e)}} className={styles.counter} style={{backgroundColor: this.props.color}}>
				<div className={styles.hoverStyle}>
					<div className={styles.text}>{this.props.title}</div>
					<div className={styles.counterCount}>{this.props.value}</div>
				</div>
			</div>
		)
	}
};

export default PoisonCounter;
