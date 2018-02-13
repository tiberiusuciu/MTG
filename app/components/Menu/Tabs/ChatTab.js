import React, { Component } from 'react';

import styles from '../../../styles/Menu/TabStyle.css';

class ChatTab extends Component {
	render() {
		return (
			<div className={styles.tabLayout}>
        <input type="text" className={styles.chatInput} placeholder="Say something"/>
        <div className={styles.chatLog} style={{backgroundColor: '#FFF'}}><span className={styles.chatTimestamp}>[09:21:13] </span><span className={styles.chatLogUsername} style={{color: 'black', textDecoration: 'underline'}}>Game</span><span className={styles.chatLogMessage} style={{fontStyle:'italic'}}>: Player 1 has flipped a coin! Result is HEADS</span></div>
        <div className={styles.chatLog} style={{backgroundColor: '#EEE'}}><span className={styles.chatTimestamp}>[09:14:25] </span><span className={styles.chatLogUsername} style={{color: 'red'}}>Player 2</span><span className={styles.chatLogMessage}>: This is another text to reply to the first message!</span></div>
        <div className={styles.chatLog} style={{backgroundColor: '#FFF'}}><span className={styles.chatTimestamp}>[09:13:58] </span><span className={styles.chatLogUsername} style={{color: 'blue'}}>Player 1</span><span className={styles.chatLogMessage}>: Hello World! This is a test to check what multiple lines of text would look like! The quick brown fox jumps over the lazy dog</span></div>
			</div>
		)
	}
};

export default ChatTab;
