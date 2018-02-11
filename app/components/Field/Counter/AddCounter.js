import React, { Component } from 'react';

import styles from '../../../styles/Field/Counter/PlayerCountersList.css';

class AddCounter extends Component {
	render() {
		return (
			<div className={styles.counter} style={{backgroundColor: this.props.color}}>
				<div className={styles.hoverAddStyle}>
					<div className={styles.addText}>{this.props.title}</div>
				</div>
			</div>
		)
	}
};

export default AddCounter;
