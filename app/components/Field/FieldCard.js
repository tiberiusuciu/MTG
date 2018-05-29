import React, { Component } from 'react';

// import FieldCard from './FieldCard';
import Draggable from 'react-draggable';

import styles from '../../styles/Field/FieldCard.css';

class FieldCard extends Component {
	eventLogger(e, data) {
	    console.log('Event: ', e);
	    console.log('Data: ', data);
	}

	render() {
		return (
			<Draggable
        axis="both"
        handle=".handle"
        defaultPosition={{x: 24, y: 24}}
        position={null}
        grid={[71, 100]}
        onStart={this.handleStart}
        onDrag={this.handleDrag}
        onStop={this.handleStop}
				bounds={{top: 24, left: 24, bottom: 324}}>
				<div className={"handle " + styles.fieldCardPositionning}>
					<div className={styles.card}></div>
				</div>
			</Draggable>
		)
	}
};

export default FieldCard;
// bounds={{top: 24, left: 0, bottom: 324}}
// styles.cardActive
//  + styles.tapped

// <div className={"handle " + styles.fieldCardPositionning}>
// 	<div className={styles.card}></div>
// </div>

// <div className={"handle " + styles.fieldCardPositionning + " " + styles.backCard}>
// 	<div className={styles.backCircle}></div>
// </div>
