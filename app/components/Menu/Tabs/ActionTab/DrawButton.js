import React, { Component } from 'react';
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
// import 'react-contexify/dist/ReactContexify.min.css';
// import { ContextMenu, Item, Separator, IconFont } from 'react-contexify';


import styles from '../../../../styles/Menu/Tabs/ActionTab.css';

class DrawButton extends Component {
  handleClick(e, data) {
    console.log(data);
  }


  // onClick(targetNode, ref, data) {
  //     // targetNode refer to the html node on which the menu is triggered
  //     console.log(targetNode);
  //     //ref will be the mounted instance of the wrapped component
  //     //If you wrap more than one component, ref will be an array of ref
  //     console.log(ref);
  //     // Additionnal data props passed down to the `Item`
  //     console.log(data);
  // }

  // <ContextMenu id='menu_id'>
  //   <Item leftIcon={<IconFont className="fa fa-plus" />} onClick={onClick}>
  //     Add
  //   </Item>
  //   <Item leftIcon={<IconFont className="material-icons">remove_circle</IconFont>} onClick={onClick}>
  //     Remove
  //   </Item>
  //   <Item><IconFont className="fa fa-scissors" />cut</Item>
  //   <Separator/>
  //   <Item disabled>
  //     Paste
  //   </Item>
  // </ContextMenu>
	render() {
		return (
			<div>
        <ContextMenuTrigger id="some_unique_identifier">
          <div className="well">Right click to see the menu</div>
        </ContextMenuTrigger>

        <ContextMenu id="some_unique_identifier" className={styles.menuBG}>
          <MenuItem data={"some_data"} onClick={this.handleClick}>
            ContextMenu Item 1
          </MenuItem>
          <MenuItem data={"some_data"} onClick={this.handleClick}>
            ContextMenu Item 2
          </MenuItem>
          <MenuItem divider />
          <MenuItem data={"some_data"} onClick={this.handleClick}>
            ContextMenu Item 3
          </MenuItem>
        </ContextMenu>

				<div className={"btn btn-dark " + styles.button}>Draw</div>
        <input type="number" className={"form-control " + styles.formDimensions} placeholder="3" aria-label="cardNumber" aria-describedby="basic-addon1" />
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
          <label className="form-check-label" for="inlineRadio1">To Hand</label>
        </div>
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
          <label className="form-check-label" for="inlineRadio2">To Field</label>
        </div>
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
          <label className="form-check-label" for="inlineRadio2">To Graveyard</label>
        </div>
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
          <label className="form-check-label" for="inlineRadio2">To Exile</label>
        </div>
      </div>
		)
	}
};

export default DrawButton;
