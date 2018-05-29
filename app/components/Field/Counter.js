import React, { Component } from 'react';

import styles from '../../styles/Field/FieldCard.css';

class Counter extends Component {

	render() {
		return (
			<div className={styles.counter}>
        <p className={styles.counterText}>999</p>
			</div>
		)
	}
};

export default Counter;
