import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css'

import ActionTab from './Tabs/ActionTab';
import styles from '../../styles/Menu/MenuTools.css';

class MenuTools extends Component {
	render() {
		return (
			<div className={styles.menuTools}>
				<Tabs className={styles.fontSize}>
					<TabList className={styles.fontSize}>
						<Tab>Stats</Tab>
						<Tab>Hand</Tab>
						<Tab>Chat</Tab>
						<Tab>Menu</Tab>
						<Tab>Action</Tab>
					</TabList>

					<TabPanel>
						<div className={styles.tabPanelDiv}>
							<h2>Any content 1</h2>
						</div>
					</TabPanel>
					<TabPanel>
						<div className={styles.tabPanelDiv}>
							<h2>Any content 2</h2>
						</div>
					</TabPanel>
					<TabPanel>
						<div className={styles.tabPanelDiv}>
							<h2>Any content 3</h2>
						</div>
					</TabPanel>
					<TabPanel>
						<div className={styles.tabPanelDiv}>
							<h2>Any content 4</h2>
						</div>
					</TabPanel>
					<TabPanel>
						<div className={styles.tabPanelDiv}>
							<ActionTab />
						</div>
					</TabPanel>
				</Tabs>

			</div>
		)
	}
};

export default MenuTools;
