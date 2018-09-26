import React, {Component} from 'react'
import {render} from 'react-dom'
import PropTypes from 'prop-types'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faPlus from '@fortawesome/react-fontawesome'
import faMinus from '@fortawesome/react-fontawesome'

// export {
//   clamp: somethingTheyalreadyCreated
// }
// export default TouchCarousel
// export touchWithMouseHOC


const productInfo = {
  name: "The Mulchmate",
  description: "This is the description of The Mulchmate, reiterate the value proposition here",
  dimensions: "22 x 14 in."
}

class ProductPurchaseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '1'};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
      let val = event.target.value <= 0 ? 1
        : event.target.value >= 21 ? 20
        : event.target.value
      this.setState({value: val});
    }

  render () {
    return (
      <label>
        <h4 className="quantity">Quantity:</h4>
        <input type="number"
          value={this.state.value}
          onChange={this.handleChange}
        />
      </label>
    )
  }
}

ProductPurchaseForm.propTypes = {
  updateTransactionStatus: PropTypes.func
}

export default ProductPurchaseForm
