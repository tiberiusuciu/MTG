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
        defaultPosition={{x: 0, y: 24}}
        position={null}
        grid={[71, 100]}
				bounds={{top: 24, left: 0, bottom: 324}}
        onStart={this.handleStart}
        onDrag={this.handleDrag}
        onStop={this.handleStop}>
				<div className="handle">
					<img className={styles.card} src="https://magiccards.info/scans/en/nph/9.jpg" />
				</div>
			</Draggable>
		)
	}
};

export default FieldCard;
// styles.cardActive
