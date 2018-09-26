import React, {Component} from 'react'
import {render} from 'react-dom'
import PropTypes from 'prop-types'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faPlus from '@fortawesome/react-fontawesome'
import faMinus from '@fortawesome/react-fontawesome'

import NumberPicker from './NumberPicker'

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
  launchLambdaServer(data) {
    console.log(data)
  }
  handleTransactionResults(results) {
    console.log(results)
    this.props.updateTransactionStatus("success")
  }
  render () {
    return (
      <form className="product-form">
        <span className="display">
          <img src={process.env.BACKEND_URL + "/static/images/mulchmate-demo-slide-3.png"}
            alt="The Mulchmate holds a yard waste paper bag open and upright" />
        </span>
        <h3 className="name">{productInfo.name}</h3>
        <h4 className="description">{productInfo.description}</h4>
        <h6 className="size">dimensions: {productInfo.dimensions}</h6>

        <NumberPicker />

        {/*<Form.Field control={NumberPicker}
          name={"multipleOfThree"}
          value={this.getValue("multipleOfThree")}
          onChange={this.updateNumberPicker}
          label="quantity"
          placeholder="Quantity"
          min={1}
          max={20}/>*/}
        <script
          src="https://checkout.stripe.com/checkout.js" className="stripe-button"
          data-key="pk_test_9ByY3GWai1HHnzu0K9lx1Awc"
          data-amount="999"
          data-name="Stripe.com"
          data-description="Example charge"
          data-image="https://stripe.com/img/documentation/checkout/marketplace.png"
          data-locale="auto"
          data-zip-code="true">
        </script>
      </form>
    )
  }
}

ProductPurchaseForm.propTypes = {
  updateTransactionStatus: PropTypes.func
}

export default ProductPurchaseForm
