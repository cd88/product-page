import React, {Component} from 'react'
import {render} from 'react-dom'
import PropTypes from 'prop-types';
// export {
//   clamp: somethingTheyalreadyCreated
// }
// export default TouchCarousel
// export touchWithMouseHOC


const productInfo = [
  {
    name: "The Mulchmate",
    dimensions: "22 x 14 in.",

  }
]

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
      <form>
        <script
          src="https://checkout.stripe.com/checkout.js" class="stripe-button"
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
