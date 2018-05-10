import React, { Component } from 'react';

import FieldCard from './FieldCard';

import styles from '../../styles/Field/BattleField.css';

class BattleField extends Component {
	render() {
		return (
			<div className={styles.BattleField}>
				<FieldCard />
				<FieldCard />
				<FieldCard />
			</div>
		)
	}
};

export default BattleField;
