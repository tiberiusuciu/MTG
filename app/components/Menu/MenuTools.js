import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css'

import ActionTabs from './Tabs/ActionTabs';
import styles from '../../styles/Menu/MenuTools.css';

class MenuTools extends Component {
	render() {
		return (
			<div className={styles.menuTools}>
				<Tabs>
					<TabList>
						<Tab>Stats</Tab>
						<Tab>Hand</Tab>
						<Tab>Chat</Tab>
						<Tab>Menu</Tab>
						<Tab>Action</Tab>
					</TabList>

					<TabPanel>
						<h2>Any content 1</h2>
					</TabPanel>
					<TabPanel>
						<h2>Any content 2</h2>
					</TabPanel>
					<TabPanel>
						<h2>Any content 3</h2>
					</TabPanel>
					<TabPanel>
						<h2>Any content 4</h2>
					</TabPanel>
					<TabPanel>
						<ActionTabs />
						<h2>Any content 5</h2>
					</TabPanel>
				</Tabs>

			</div>
		)
	}
};

export default MenuTools;
