import { combineReducers } from 'redux';
import kegListReducer from './keg-list-reducer';
import editFormVisibleReducer from './edit-form-visible-reducer';
import newFormVisibleReducer from './new-form-visible-reducer';
import selectedKegReducer from './selected-keg-reducer';


const rootReducer = combineReducers({
  masterKegList: kegListReducer,
  editFormVisibleOnPage: editFormVisibleReducer,
  newFormVisibleOnPage: newFormVisibleReducer,
  selectedKeg: selectedKegReducer
});

export default rootReducer;