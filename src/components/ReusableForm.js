import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input 
          type='text'
          name='name'
          placeholder='Name'
          defaultValue = {props.name ? props.name : ""} />
        <input 
          type='text'
          name='brand'
          placeholder='Brand'
          defaultValue = {props.brand ? props.brand : ""} />
        <input 
          type='text'
          name='price'
          placeholder='Price'
          defaultValue = {props.price ? props.price : ""} />
        <input 
          type='text'
          name='abv'
          placeholder='ABV %'
          defaultValue = {props.abv ? props.abv : ""} />
        <input 
          type='number'
          name='pints'
          placeholder='No. of Pints (124 for normal keg)'
          defaultValue = {props.pints ? props.pints : ""} />
          <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  )
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;