import React from "react";
import PropTypes from "prop-types";

function Keg(props){
  
  return (
    <React.Fragment>
      <div className='keg' onClick = {() => props.whenKegClicked(props.id)}>
        <h1> {props.name} | {props.brand} </h1>
        <p>Pints Left: {props.pints}</p>
      </div>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.string,
  abv: PropTypes.string,
  pints: PropTypes.number,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func,
}

export default Keg;