import React, { Component } from 'react';

import styles from '../../../styles/Menu/TabStyle.css';

class StatsTab extends Component {
	render() {
		return (
			<div className={styles.tabLayout}>
        <div className={styles.timer}>00:00:00</div>
			</div>
		)
	}
};

export default StatsTab;
