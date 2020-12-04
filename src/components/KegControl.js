import React from "react";
import EditKegForm from "./EditKegForm";
import KegDetail from "./KegDetail";
import KegList from "./KegList";
import PropTypes from 'prop-types';
import NewKegForm from "./NewKegForm";
import * as a from '../actions';
import { connect } from 'react-redux';

class KegControl extends React.Component {
  handleClick = () => {
    const { dispatch } = this.props;
    if (this.props.selectedKeg != null) {
      const action = a.deselectKeg();
      dispatch(action);
    } else {
      const action = a.toggleNewForm();
      dispatch(action);
    };
  };

  handleAddingNewKegToList = (newKeg) => {
    const { dispatch } = this.props;
    const action = a.addKeg(newKeg);
    dispatch(action);
    const action2 = a.toggleNewForm();
    dispatch(action2);
  }

  handleChangingSelectedKeg = (id) => {
    const { dispatch } = this.props;
    const selectedKeg = this.props.masterKegList[id];
    const action = a.selectKeg(selectedKeg);
    dispatch(action);
  }

  handleDeletingKeg = (id) => {
   const { dispatch } = this.props;
   const action = a.deleteKeg(id);
   dispatch(action);
  }
  

  handleEditClick = (id) => {
    const { dispatch } = this.props;
    const action = a.toggleEditForm();
    dispatch(action);
  }

  handleEditingKegInList = (kegToEdit) => {
    const { dispatch } = this.props;
    dispatch(a.addKeg(kegToEdit));
    dispatch(a.deselectKeg());
    dispatch(a.toggleEditForm());
  }

  handlePouringAPint = (kegToPourFrom) => {
    const { dispatch } = this.props;
    dispatch(a.addKeg(kegToPourFrom));
    dispatch(a.selectKeg(kegToPourFrom));
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText =  null;

    if (this.props.editFormVisibleOnPage) {
      currentlyVisibleState = <EditKegForm keg = {this.props.selectedKeg} onEditKeg = {this.handleEditingKegInList} />
      buttonText = "Back to all the kegs!";
    } else if (this.props.selectedKeg != null) {
      currentlyVisibleState = <KegDetail
        keg = {this.props.selectedKeg}
        onClickingDelete = {this.handleDeletingKeg}
        onClickingEdit = {this.handleEditClick}
        onPouringAPint = {this.handlePouringAPint} />
      buttonText = "Back to all the kegs!";
    } else if (this.props.newFormVisibleOnPage) {
      currentlyVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList} />;
      buttonText = "Back to all the kegs!";
    } else {
      currentlyVisibleState = <KegList 
        kegList = {this.props.masterKegList}
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
    editFormVisibleOnPage: state.editFormVisibleOnPage,
    newFormVisibleOnPage: state.newFormVisibleOnPage,
    selectedKeg: state.selectedKeg
  }
}

KegControl.propTypes = {
  masterKegList: PropTypes.object,
  editFormVisibleOnPage: PropTypes.bool,
  newFormVisibleOnPage: PropTypes.bool,
  selectedKeg: PropTypes.object
}

KegControl = connect(mapStateToProps)(KegControl)

export default KegControl;
