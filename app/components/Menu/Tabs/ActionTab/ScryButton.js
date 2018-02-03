import React, { Component } from 'react';

import styles from '../../../../styles/Menu/Tabs/ActionTab.css';

class ScryButton extends Component {
	render() {
		return (
			<div>
				<div className={"btn btn-dark " + styles.button}>Scry</div>
        <input type="number" className={"form-control " + styles.formDimensions} placeholder="3" aria-label="scryNumber" aria-describedby="basic-addon1" />
			</div>
		)
	}
};

export default ScryButton;
