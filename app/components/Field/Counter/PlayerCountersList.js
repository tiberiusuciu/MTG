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
				<LifeCounter color={"tomato"} title={"Life"} value={this.props.user.counters.life} user={this.props.user} client={this.props.client} onCounterClick={this.props.onCounterClick}/>
				<HandCounter color={"royalblue"} title={"Hand"} value={this.props.user.hand.length} user={this.props.user} client={this.props.client}/>
				<PoisonCounter color={"limegreen"} title={"Poison"} value={this.props.user.counters.poison} user={this.props.user} client={this.props.client} onCounterClick={this.props.onCounterClick}/>
				<ManaCounter color={"#fffbd5"} title={"White"} value={this.props.user.counters.white} user={this.props.user} client={this.props.client} onCounterClick={this.props.onCounterClick}/>
				<ManaCounter color={"#a3d7f0"} title={"Blue"} value={this.props.user.counters.blue} user={this.props.user} client={this.props.client} onCounterClick={this.props.onCounterClick}/>
				<ManaCounter color={"#bbb3b1"} title={"Black"} value={this.props.user.counters.black} user={this.props.user} client={this.props.client} onCounterClick={this.props.onCounterClick}/>
				<ManaCounter color={"#dd977f"} title={"Red"} value={this.props.user.counters.red} user={this.props.user} client={this.props.client} onCounterClick={this.props.onCounterClick}/>
				<ManaCounter color={"#84b494"} title={"Green"} value={this.props.user.counters.green} user={this.props.user} client={this.props.client} onCounterClick={this.props.onCounterClick}/>

			</div>
		)
	}
};

// Might not need after all, might make a /countercreate <name> & /counterremove <name>
// <AddCounter color={"white"} title={"+"}/>
export default PlayerCountersList;
