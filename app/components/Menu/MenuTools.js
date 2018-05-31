import React, { Component } from 'react';
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css'

// import ActionTab from './Tabs/ActionTab';
import HandTab from './Tabs/HandTab';
import ChatTab from './Tabs/ChatTab';
import GameTab from './Tabs/GameTab';
import HelpTab from './Tabs/HelpTab';
import styles from '../../styles/Menu/MenuTools.css';

class MenuTools extends Component {
	handleClick(selectedTab) {
		this.props.onTabFocusedChange(selectedTab);
	}

	getClientUser() {
		var user = null;
		console.log("USERS ", this.props.users);
		console.log("CLIENT", this.props.client);
		for (var i = 0; i < this.props.users.length; i++) {
			if (this.props.users[i].id == this.props.client.userID) {
				user = this.props.users[i];
			}
		}
		return user;
	}

	renderFocusedTab() {
		switch (this.props.focusedTab) {
			case "Hand":
				var user = this.getClientUser();
				return (<HandTab user={user} onCardFocus={this.props.onCardFocus}/>)
				break;
			case "Chat":
				return (<ChatTab/>)
				break;
			case "Help":
				return (<HelpTab/>)
				break;
			case "Game":
			default:
				return (<GameTab/>)
				break;

		}
	}

	addActive(requestedTab) {
		if (requestedTab == this.props.focusedTab) {
			return styles.active;
		}
		return "";
	}

	render() {
		return (
			<div className={styles.menuTools}>
				<div className={styles.header}>
					<div className={styles.tab + " " + this.addActive("Game")} onClick={() => {this.handleClick("Game")}}>Game</div>
					<div className={styles.tab + " " + this.addActive("Hand")} onClick={() => {this.handleClick("Hand")}}>Hand</div>
					<div className={styles.tab + " " + this.addActive("Chat")} onClick={() => {this.handleClick("Chat")}}>Chat</div>
					<div className={styles.tab + " " + this.addActive("Help")} onClick={() => {this.handleClick("Help")}}>Help</div>
				</div>
				<div className={styles.content}>
					{
						this.renderFocusedTab()
					}
				</div>

			</div>
		)
	}
};

export default MenuTools;
// <HandTab/>
// <ChatTab/>
// <GameTab/>

// <Tabs className={styles.dimensions}>
// 	<TabList className={styles.fontSize}>
// 		<Tab>Stats</Tab>
// 		<Tab>Hand</Tab>
// 		<Tab>Chat</Tab>
// 		<Tab>Menu</Tab>
// 		<Tab>Action</Tab>
// 	</TabList>
//
// 	<TabPanel  style={{overflowX: "scroll"}}>
// 		<div className={styles.tabPanelDiv}>
// 			<h2>Any content 1</h2>
// 		</div>
// 	</TabPanel>
// 	<TabPanel>
// 		<div className={styles.tabPanelDiv}>
// 			<HandTab />
// 		</div>
// 	</TabPanel>
// 	<TabPanel>
// 		<div className={styles.tabPanelDiv}>
// 			<h2>Any content 3</h2>
// 		</div>
// 	</TabPanel>
// 	<TabPanel>
// 		<div className={styles.tabPanelDiv}>
// 			<h2>Any content 4</h2>
// 		</div>
// 	</TabPanel>
// 	<TabPanel>
// 		<div className={styles.tabPanelDiv}>
// 			<ActionTab />
// 		</div>
// 	</TabPanel>
// </Tabs>
