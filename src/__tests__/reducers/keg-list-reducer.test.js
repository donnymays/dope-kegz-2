import kegListReducer from '../../reducers/keg-list-reducer';
import * as a from './../../actions/ActionTypes'

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
 
  test('Should successfully add new keg data to masterKegList', () => {
    const {name, brand, price, abv, pints, id} = testKeg;
    action = {
      type: a.ADD_KEG,
      name: name,
      brand: brand,
      price: price,
      abv: abv,
      pints: pints,
      id: id
    };

    expect(kegListReducer({}, action)).toEqual({
      [id] : {
        name: name,
        brand: brand,
        price: price,
        abv: abv,
        pints: pints,
        id: id
      }
    });
  });

});