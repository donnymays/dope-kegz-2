import React from "react";
import PropTypes from "prop-types";

function Keg(props){
  let typeImage;
  if (props.types === 'paleAle') {
    typeImage = '<div>Icons made by <a href="http://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>'
  } else if (props.types === 'lager') {
    typeImage = 'public/images/lager.png';
  } else if (props.types === 'amber') {
    typeImage = 'public/images/amber.png';
  } else {
    typeImage = 'public/images/stout.png';
  }
  
  return (
    <React.Fragment>
      <div className='keg' onClick = {() => props.whenKegClicked(props.id)}>
        <h3>{props.name}</h3>
        {typeImage}
        <p>Pints Left: {props.pints}</p>
        <hr/>
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