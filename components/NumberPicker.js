import React from 'react'
import PropTypes from 'prop-types'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faPlus from '@fortawesome/react-fontawesome'
import faMinus from '@fortawesome/react-fontawesome'

const numberPicker = (props) => {
    let handleChange = (event) => {
      let newVal = event.target.value < 1 ? 1
      : event.target.value > 20 ? (() => {
        // TODO: make this dialog user friendly
        console.log('Please use the contact form to inquire about vendor rates');
        return 20})()
        : Math.floor(event.target.value)
        props.updatePurchaseQuantity(newVal);
      }


    return (
      <label>
        <h4 className="quantity">Quantity:</h4>
        <input type="number"
          value={props.value}
          onChange={(event) => handleChange(event)}
        />
      </label>
    )
}

export default numberPicker
