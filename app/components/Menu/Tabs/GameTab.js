import React, { Component } from 'react';

import styles from '../../../styles/Menu/TabStyle.css';

class GameTab extends Component {
	render() {
		return (
			<div className={styles.tabLayout}>
        <div className={styles.timer}>00:00:00</div>
				<div className={styles.SurrenderButton}>
					<button type="button" className="btn btn-danger">Quit/Surrender</button>
				</div>
        <div style={{backgroundColor:'#EEE'}}><div className={styles.PlayerName} style={{color: 'red'}}>Player 1</div><div className={styles.PlayerStats}>icon/color/lvl</div></div>
        <div style={{backgroundColor:'#FFF'}}><div className={styles.PlayerName} style={{color: 'blue'}}>Player 2</div><div className={styles.PlayerStats}>icon/color/lvl</div></div>
			</div>
		)
	}
};

export default GameTab;
