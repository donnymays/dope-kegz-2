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

export const deleteKeg = (id) => ({
  type: a.DELETE_KEG,
  id
});

export const toggleEditForm = () => ({
  type: a.TOGGLE_EDIT_FORM
});

export const toggleNewForm = () => ({
  type: a.TOGGLE_NEW_FORM
});

export const selectKeg = (keg) => {
  const { name, brand, price, abv, pints, id } = keg;
  return {
    type: a.SELECT_KEG,
    name: name,
    brand: brand,
    price: price, 
    abv: abv,
    pints: pints,
    id: id
  }
};

export const deselectKeg = () => ({
  type: a.DESELECT_KEG
});
