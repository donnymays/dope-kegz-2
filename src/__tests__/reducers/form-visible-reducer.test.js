
import formVisibleReducer from '../../reducers/form-visible-reducer';
import * as a from './../../actions/ActionTypes'

describe('formVisibleReducer', () => {
  
  test('Should return default state if no action type is recognized', () => {
    expect(formVisibleReducer(false, { type: null })).toEqual(false);
  })

  test('Should successfully toggle form visibility', () => {
    expect(formVisibleReducer(false, {type: a.TOGGLE_FORM})).toEqual(true);
  })
})