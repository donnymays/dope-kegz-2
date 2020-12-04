
import editFormVisibleReducer from '../../reducers/edit-form-visible-reducer';
import * as a from '../../actions/ActionTypes'

describe('formVisibleReducer', () => {
  
  test('Should return default state if no action type is recognized', () => {
    expect(editFormVisibleReducer(false, { type: null })).toEqual(false);
  })

  test('Should successfully toggle form visibility', () => {
    expect(editFormVisibleReducer(false, {type: a.TOGGLE_EDIT_FORM})).toEqual(true);
  })
})