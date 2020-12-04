import * as a from '../../actions/ActionTypes'
import * as actions from './../../actions';


describe ('dope kegz actions', () => {

  const testKeg = {
    name: "testName",
    brand: "testBrand",
    price: 100,
    abv: 5,
    pints: 124,
    id: 1
  };

  it('addKeg should create ADD_KEG action', () => {
    expect(actions.addKeg(testKeg))
      .toEqual({
      type: a.ADD_KEG,
      name: "testName",
      brand: "testBrand",
      price: 100,
      abv: 5,
      pints: 124,
      id: 1
    });
  });

  it('deleteKeg should create DELETE_KEG action', () => {
    expect(actions.deleteKeg(1)).toEqual({
      type: a.DELETE_KEG,
      id: 1
    });
  });

  it('toggleForm should create TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: a.TOGGLE_FORM
    });
  });

})

