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
  }

  it('addKeg should create ADD-KEG action', () => {
    expect (actions.addKeg(testKeg))
      .toEqual({
      type: a.ADD_KEG,
      name: "testName",
      brand: "testBrand",
      price: 100,
      abv: 5,
      pints: 124,
      id: 1
    })
  })
})

