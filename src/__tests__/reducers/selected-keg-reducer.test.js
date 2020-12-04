import selectedKegReducer from '../../reducers/selected-keg-reducer';
import * as a from './../../actions/ActionTypes'

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
  })

});



