import rootReducer from '../../reducers/index';
import { createStore} from 'redux';
import formVisibleReducer from '../../reducers/edit-form-visible-reducer';
import kegListReducer from '../../reducers/keg-list-reducer';
import selectedKegReducer from '../../reducers/selected-keg-reducer';
import * as a from '../../actions/ActionTypes';

let store = createStore(rootReducer);


describe('rootReducer', () => {
  
  test('Should check that initial state of kegListReducer matches root reducer', () => {
    expect(store.getState().masterKegList).toEqual(kegListReducer(undefined, { type: null }));
  });

  test('Check that initial state of formVisibleReducer matches root reducer', () => {
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, { type: null }));
  });

  test('Check that initial state of formVisibleReducer matches root reducer', () => {
    expect(store.getState().selectedKeg).toEqual(selectedKegReducer(undefined, { type: null }));
  });

  test('Check that ADD_KEG action works for kegListReducer and root reducer', () => {
    const action = {
      type: a.ADD_KEG,
      name: "testName",
      brand: "testBrand",
      price: 100,
      abv: 5,
      pints: 124,
      id: 1
    }
    store.dispatch(action);
    expect(store.getState().masterKegList).toEqual(kegListReducer(undefined, action));
  });

});