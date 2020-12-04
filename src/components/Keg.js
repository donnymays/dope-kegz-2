import React from "react";
import PropTypes from "prop-types";

function Keg(props){
  
  let typeImage;
    if (props.type === 'paleAle') {
      typeImage = <img src= 'images/pale-ale.png' alt=''/>
    } else if (props.type === 'lager') {
      typeImage = <img src= 'images/lager.png' alt=''/>
    } else if (props.type === 'amber') {
      typeImage = <img src= 'images/amber.png' alt=''/>
    } else if (props.type === 'stout') {
      typeImage = <img src= 'images/stout.png' alt=''/>
    };  

  return (
    <React.Fragment>
      <div className='keg' onClick = {() => props.whenKegClicked(props.id)}>
        <h3>{props.name}</h3>
        {typeImage}
        <p>Pints Left: {props.pints}</p>
      </div>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  type: PropTypes.string,
  price: PropTypes.string,
  abv: PropTypes.string,
  pints: PropTypes.number,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func,
}

export default Keg;