import React, { Component } from 'react';

import PlayerBox from './PlayerBox';

import styles from '../../styles/Field/CardField.css';

class CardField extends Component {
	generatePlayerFields() {
		return this.props.users.map((user) => {
			return (
				<div className={styles.PlayerBox}>
					<PlayerBox user={user}/>
				</div>
			)
		})
	}

	render() {
		return (
			<div className={styles.cardField}>
        <div className={styles.dimensions}>
					{
						this.generatePlayerFields()
					}
        </div>
			</div>
		)
	}
};

export default CardField;
