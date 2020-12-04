import React from "react";
import EditKegForm from "./EditKegForm";
import KegDetail from "./KegDetail";
import KegList from "./KegList";
import PropTypes from 'prop-types';
import NewKegForm from "./NewKegForm";
import * as a from '../actions';
import { v4 } from 'uuid';

class KegControl extends React.Component {
  handleClick = () => {
    const { dispatch } = this.props;
    if (this.props.selectedKeg != null) {
      const action = a.deselectKeg();
      dispatch(action);
    } else {
      const action = a.toggleForm();
      dispatch(action);
    };
  };

  handleAddingNewKegToList = (newKeg) => {
    const { dispatch } = this.props;
    const action = a.addKeg(newKeg);
    dispatch(action);
    const action2 = a.toggleForm();
    dispatch(action2);
  }

  handleChangingSelectedKeg = (id) => {
    const { dispatch } = this.props;
    const selectedKeg = this.props.masterKegList[id];
    const action = a.selectedKeg(selectedKeg);
    dispatch(action);
  }

  handleDeletingKeg = (id) => {
   const { dispatch } = this.props;
   const action = a.deleteKeg(id);
   dispatch(action);
  }
  

  handleEditClick = (id) => {
    const { dispatch } = this.props;
    if (this.props.selectedKeg === null) {
      const kegToEdit = this.props.masterKegList[id];
      dispatch(a.selectKeg(kegToEdit));
    } else {
      dispatch(a.deselectKeg())
    }
    dispatch(a.toggleForm)
  }

  handleEditingKegInList = (kegToEdit) => {
    const { dispatch } = this.props;
    dispatch(a.addKeg(kegToEdit));
    dispatch(a.deselectKeg());
    dispatch(a.toggleForm());
  }

  // handlePouringAPint = (kegToPourFrom) => {
  //   const editedMasterKegList = this.state.masterKegList.filter(keg => keg.id !== this.state.selectedKeg.id).concat(kegToPourFrom);
  //   this.setState({ 
  //     masterKegList: editedMasterKegList,
  //     selectedKeg: kegToPourFrom
  //   });
  //   console.log(kegToPourFrom.pints)
  // }

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

const mapStateToProps = state => {
  return {
    masterKegList: state.masterKegList,
    formVisibleOnPage: state.formVisibleOnPage,
    selectedKeg: state.selectedKeg
  }
}

KegControl.propTypes = {
  masterKegList: PropTypes.object,
  formVisibleOnPage: PropTypes.bool,
  selectedKeg: PropTypes.object
}

KegControl = connect(mapStateToProps)(KegControl)

export default KegControl;
