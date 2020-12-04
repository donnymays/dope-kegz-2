import * as a from "./ActionTypes";

export const addKeg = (keg) => {
  const { name, brand, price, abv, pints, id } = keg;
  return {
    type: a.ADD_KEG,
    name: name,
    brand: brand,
    price: price, 
    abv: abv,
    pints: pints,
    id: id
  }
}

  export const deleteKeg = id => ({
    type: a.DELETE_KEG,
    id
  });
