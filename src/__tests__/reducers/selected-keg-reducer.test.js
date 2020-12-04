import selectedKegReducer from '../../reducers/selected-keg-reducer';
import * as a from './../../actions/ActionTypes';
import * as actions from './../../actions/index';

describe('selectedKegReducer', () => {
  const testKeg = {
    name: "testName",
    brand: "testBrand",
    price: 100,
    abv: 5,
    pints: 124,
    id: 1
  }

  test('Should return default state if no action type is recognized', () => {
    expect(selectedKegReducer(null, { type: null })).toEqual(null);
  });

  test('Should successfully return selected keg data', () => {
    const action = actions.selectKeg(testKeg);
    expect(selectedKegReducer(null, action)).toEqual({
      name: "testName",
      brand: "testBrand",
      price: 100,
      abv: 5,
      pints: 124,
      id: 1 
    });
  });

  test('Should successfully deselct a keg', () => {
    const action = actions.deselectKeg();
    expect(selectedKegReducer({
      name: "testName",
      brand: "testBrand",
      price: 100,
      abv: 5,
      pints: 124,
      id: 1
    }, action)).toEqual(null);
  });
});



