import React, { Component } from 'react';

import styles from '../../../../styles/Menu/Tabs/ActionTab.css';

class RevealButton extends Component {
	render() {
		return (
			<div>
				<div className={"btn btn-dark " + styles.button}>Reveal</div>
        <input type="number" className={"form-control " + styles.formDimensions} placeholder="3" aria-label="revealNumber" aria-describedby="basic-addon1" />
        
      </div>
		)
	}
};

export default RevealButton;
