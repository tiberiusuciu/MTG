import React, { Component } from 'react';

import MenuBox from './Menu/MenuBox';
import CardField from './Field/CardField';

import styles from '../styles/MainPage.css';

class MainPage extends Component {
	render() {
		return (
			<div className={styles.backgroundColor}>
				<div className={styles.MainPageLayout}>
					<div className={styles.HorizontalLayout}>
						<div className={styles.MenuBox}>
							<MenuBox game={this.props.game} users={this.props.users} client={this.props.client} onTabFocusedChange={this.props.onTabFocusedChange}/>
						</div>
						<div className={styles.CardField}>
							<CardField game={this.props.game} users={this.props.users} onCardFocus={this.props.onCardFocus}/>
						</div>
					</div>
				</div>
			</div>
		)
	}
};

export default MainPage;
