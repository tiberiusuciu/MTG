import React, { Component } from 'react';

import styles from '../../../styles/Menu/TabStyle.css';

class HandCard extends Component {
	render() {
		return (
			<div className={styles.cardShape}>
        <img src="https://magiccards.info/scans/en/nph/9.jpg" width={100} height={140}/>
			</div>
		)
	}
};

export default HandCard;



// <DeckButton />
// <DrawButton />
// <ScryButton />
// <RevealButton />
// <DrawButton />
// <ScryButton />
// <RevealButton />
