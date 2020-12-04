import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";

function KegList(props){
  const { kegList, onKegSelection } = props
  return (
    <React.Fragment>
      <hr/>
      {Object.values(props.kegList).map((keg) =>
        <Keg
          whenKegClicked = { onKegSelection }
          name = {keg.name}
          brand = {keg.brand}
          type = {keg.type}
          price = {keg.price}
          abv = {keg.abv}
          pints = {keg.pints}
          id= {keg.id}
          key= {keg.id}/>
      )}
    </React.Fragment>
  )
}

KegList.propTypes = {
  kegList: PropTypes.object,
  onKegSelection: PropTypes.func
};

export default KegList;