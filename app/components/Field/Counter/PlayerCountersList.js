import React, { Component } from 'react';

import ManaCounter from './ManaCounter';
import PoisonCounter from './PoisonCounter';
import HandCounter from './HandCounter';
import LifeCounter from './LifeCounter';
import AddCounter from './AddCounter';

import styles from '../../../styles/Field/Counter/PlayerCountersList.css';

class PlayerCountersList extends Component {
	render() {
		return (
			<div className={styles.PlayerCountersList}>
				<LifeCounter color={"tomato"} title={"Life"} value={20}/>
				<HandCounter color={"royalblue"} title={"Hand"} value={this.props.user.hand.length}/>
				<PoisonCounter color={"limegreen"} title={"Poison"} value={0}/>
				<ManaCounter color={"#fffbd5"} title={"White"} value={5}/>
				<ManaCounter color={"#a3d7f0"} title={"Blue"} value={0}/>
				<ManaCounter color={"#bbb3b1"} title={"Black"} value={0}/>
				<ManaCounter color={"#dd977f"} title={"Red"} value={0}/>
				<ManaCounter color={"#84b494"} title={"Green"} value={0}/>

			</div>
		)
	}
};

// Might not need after all, might make a /countercreate <name> & /counterremove <name>
// <AddCounter color={"white"} title={"+"}/>
export default PlayerCountersList;
