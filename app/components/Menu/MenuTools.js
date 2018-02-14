import React, { Component } from 'react';
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css'

import ActionTab from './Tabs/ActionTab';
import HandTab from './Tabs/HandTab';
import ChatTab from './Tabs/ChatTab';
import GameTab from './Tabs/GameTab';
import HelpTab from './Tabs/HelpTab';
import styles from '../../styles/Menu/MenuTools.css';

class MenuTools extends Component {
	render() {
		return (
			<div className={styles.menuTools}>
				<div className={styles.header}>
					<div className={styles.tab + " " + styles.active}>Game</div>
					<div className={styles.tab}>Hand</div>
					<div className={styles.tab}>Chat</div>
					<div className={styles.tab}>Help</div>
				</div>
				<div className={styles.content}>
					<HandTab />
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
