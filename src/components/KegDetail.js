import React from "react";
import PropTypes from "prop-types";


function KegDetail(props) {
  const { keg, onClickingDelete, onPouringAPint, onClickingEdit } = props;
  let pintsRemaning = keg.pints - 1;
  let pourAPintButton;
  if (keg.pints > 0){
      pourAPintButton = <button onClick={() => onPouringAPint({
      name: keg.name,
      brand: keg.brand,
      type: keg.type,
      price: keg.price,
      abv: keg.abv,
      pints: pintsRemaning,
      id: keg.id
    })}>Pour!</button>
  } else {
    pourAPintButton = "Kegz Cached!"
  }

  let typeImage;
  if (props.type === 'paleAle') {
    typeImage = <img src= 'images/pale-ale.png' alt=''/>
  } else if (props.type === 'lager') {
    typeImage = <img src= 'images/lager.png' alt=''/>
  } else if (props.type === 'amber') {
    typeImage = <img src= 'images/amber.png' alt=''/>
  } else {
    typeImage = <img src= 'images/stout.png' alt=''/>
  };
  
  return (
    <React.Fragment>
      <h1>Keg Deets</h1>
      <h3>{keg.name} - {keg.brand}</h3>
      {typeImage}
      <p>${keg.price} | ABV: {keg.abv}%</p>
      <p><em>Pints Left: {keg.pints}</em></p>
      {pourAPintButton}
      <button onClick={ onClickingEdit }>Edit Deets</button> 
      <button onClick={()=> onClickingDelete(keg.id) }>Keg's Cached!</button>
      <hr/>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onPouringAPint: PropTypes.func,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default KegDetail;