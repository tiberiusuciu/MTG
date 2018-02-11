import React, { Component } from 'react';

import ManaCounter from './ManaCounter';

import styles from '../../../styles/Field/Counter/PlayerCountersList.css';

class PlayerCountersList extends Component {
	render() {
		return (
			<div className={styles.PlayerCountersList}>
				<ManaCounter color={"#fffbd5"} title={"White"} value={5}/>
				<ManaCounter color={"#a3d7f0"} title={"Blue"} value={0}/>
				<ManaCounter color={"#bbb3b1"} title={"Black"} value={0}/>
				<ManaCounter color={"#dd977f"} title={"Red"} value={0}/>
				<ManaCounter color={"#84b494"} title={"Green"} value={0}/>

			</div>
		)
	}
};

export default PlayerCountersList;
