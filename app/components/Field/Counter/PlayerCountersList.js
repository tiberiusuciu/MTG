import React, { Component } from 'react';

import styles from '../../../styles/Field/Counter/PlayerCountersList.css';

class PlayerCountersList extends Component {
	render() {
		return (
			<div className={styles.PlayerCountersList}>
				<div className={styles.counter}>
					<div className={styles.hoverStyle}>
						counter
					</div>
				</div>

			</div>
		)
	}
};

export default PlayerCountersList;
