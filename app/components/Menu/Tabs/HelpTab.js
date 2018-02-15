import React, { Component } from 'react';

import styles from '../../../styles/Menu/TabStyle.css';

class HelpTab extends Component {
	render() {
		return (
			<div className={styles.tabLayout + " " + styles.helpBox}>
        <p>This is the help tab!</p>
        <p>Don't panic! We have everything you need to know, otherwise let us know!</p>
        <p>The Game tab provides you the following:</p>
        <ul>
          <li>Timer of the game</li>
          <li>Surrender the game button</li>
          <li>Information about the players and their ranks</li>
        </ul>
        <p>The Hand tab shows you all the cards in your hands</p>
        <p>The Chat tab is where you can communicate with your fellow players. Try running /help for more information within the chat tab</p>
			</div>
		)
	}
};

export default HelpTab;
