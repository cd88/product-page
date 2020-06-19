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

  const quantityStyle = {
    width: '45px',
    fontSize: '18px',
    paddingLeft: '5px',
    marginLeft: '10px',
    borderRadius: '5px',
    border: '1px solid lightgrey',
    backgroundColor: 'transparent',
  }

  const quantityLabelStyle = {
    display: 'inline-block',
    width: '50%',
    textAlign: 'right',
  }

  const noMargin = {
    margin: '0',
  }


    return (
      <label style={noMargin}>
        <h3
          style={quantityLabelStyle}
          className="quantity"
        >
          Quantity:
        </h3>
        <input
          style={quantityStyle}
          type="number"
          value={props.value}
          onChange={(event) => handleChange(event)}
        />
      </label>
    )
}

export default numberPicker
