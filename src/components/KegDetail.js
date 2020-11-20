import React from "react";
import PropTypes from "prop-types";

function KegDetail(props) {
  const { keg, onClickingDelete, onPouringAPint } = props;

  return (
    <React.Fragment>
      <h1>Keg Deets</h1>
      <h3>{keg.name} - {keg.brand}</h3>
      <p>${keg.price} | %{keg.abv}</p>
      <p><em>Pints Left: {keg.pints}</em></p>
      <button onClick={ props.onPouringAPint }>Pour a Pint!</button>
      <button onClick={ props.onClickingEdit }>Edit Deets</button> 
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