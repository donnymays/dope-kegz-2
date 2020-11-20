import React from "react";
import EditKegForm from "./EditKegForm";
import KegDetail from "./KegDetail";
import KegList from "./KegList";
import NewKegForm from "./NewKegForm";
import { v4 } from 'uuid';

class KegControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterKegList: [
        {name: "Beer", brand: "Good Beer", price: '85', ABV: '6', pints: 124, id: v4()},
        {name: "Ale", brand: "Good Ale", price: '75', ABV: '7', pints: 124, id: v4()},
        {name: "Lager", brand: "Good Lager", price: '80', ABV: '4', pints: 124, id: v4()},
      ],
      selectedKeg: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedKeg: null,
        editing: false
      })
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  handleAddingNewKegToList = (newKeg) => {
    const newMasterKegList = this.state.masterKegList.concat(newKeg);
    this.setState({masterKegList: newMasterKegList,
                  formVisibleOnPage: false});
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.state.masterKegList.filter(keg => keg.id === id)[0];
    this.setState({selectedKeg: selectedKeg});
  }

  handleDeletingKeg = (id) => {
    const newMasterKegList = this.state.masterKegList.filter(keg => keg.id !== id);
    this.setState({
      masterKegList: newMasterKegList,
      selectedKeg: null
    });
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleEditingKegInList = (kegToEdit) => {
    const editedMasterKegList = this.state.masterKegList.filter(keg => keg.id !== this.state.selectedKeg.id).concat(kegToEdit);
    this.setState({
      masterKegList: editedMasterKegList,
      editing: false,
      selectedKeg: null
    });
  }

  handlePouringAPint = (kegToPourFrom) => {
    const editedMasterKegList = this.state.masterKegList.filter(keg => keg.id !== this.state.selectedKeg.id).concat(kegToPourFrom);
    this.setState({ 
      masterKegList: editedMasterKegList,
      selectedKeg: null
    });
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText =  null;

    if (this.state.editing) {
      currentlyVisibleState = <EditKegForm keg = {this.state.selectedKeg} onEditKeg = {this.handleEditingKegInList} />
      buttonText = "Back to all the kegs!";
    } else if (this.state.selectedKeg != null) {
      currentlyVisibleState = <KegDetail
        keg = {this.state.selectedKeg}
        onClickingDelete = {this.handleDeletingKeg}
        onClickingEdit = {this.handleEditClick}
        onPouringAPint = {this.handlePouringAPint} />
      buttonText = "Back to all the kegs!";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList} />;
      buttonText = "Back to all the kegs!";
    } else {
      currentlyVisibleState = <KegList 
        kegList = {this.state.masterKegList}
        onKegSelection={this.handleChangingSelectedKeg} />;
        buttonText = "Add Keg!"
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default KegControl;
