import React, { Component } from 'react';

import DrawButton from './ActionTab/DrawButton';
import ScryButton from './ActionTab/ScryButton';
import RevealButton from './ActionTab/RevealButton';
import DeckButton from './ActionTab/DeckButton';

import styles from '../../../styles/Menu/Tabs/ActionTab.css';

class ActionTabs extends Component {
	render() {
		return (
			<div>
				<div className={styles.actionTabButton}>
				</div>
			</div>
		)
	}
};

export default ActionTabs;



// <DeckButton />
// <DrawButton />
// <ScryButton />
// <RevealButton />
// <DrawButton />
// <ScryButton />
// <RevealButton />
