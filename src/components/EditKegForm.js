import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";


function EditKegForm (props) {
  const { keg, onEditKeg } = props;
  function handleEditKegFormSubmission(event) {
    event.preventDefault();
    onEditKeg({name: event.target.name.value, brand: event.target.brand.value, price: event.target.price.value, abv: event.target.abv.value, pints: event.target.pints.value, id: keg.id})
    console.log("yo")
  }
  return (
    <React.Fragment>
      <ReusableForm
        name={keg.name}
        brand={keg.brand}
        price={keg.price}
        abv={keg.abv}
        pints={keg.pints}
        id={keg.id}
        formSubmissionHandler={handleEditKegFormSubmission}
        buttonText="Update Deets" />
    </React.Fragment>
  );
}

EditKegForm.propTypes = {
  keg: PropTypes.object,
  onEditKeg: PropTypes.func
};

export default EditKegForm;