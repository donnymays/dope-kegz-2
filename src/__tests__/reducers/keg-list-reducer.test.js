import kegListReducer from '../../reducers/keg-list-reducer';
import * as actions from './../../actions/index'

describe('kegListReducer', () => {
  let action;
  const testKeg = {
    name: "testName",
    brand: "testBrand",
    price: 100,
    abv: 5,
    pints: 124,
    id: 1
  }

  test('Should return default state if thes is no action type passed into the reducer', () => {
    expect(kegListReducer({}, { type: null })).toEqual({});
  });
 
})