
import newFormVisibleReducer from '../../reducers/new-form-visible-reducer';
import * as a from '../../actions/ActionTypes'

describe('formVisibleReducer', () => {
  
  test('Should return default state if no action type is recognized', () => {
    expect(newFormVisibleReducer(false, { type: null })).toEqual(false);
  })

  test('Should successfully toggle form visibility', () => {
    expect(newFormVisibleReducer(false, {type: a.TOGGLE_NEW_FORM})).toEqual(true);
  })
})