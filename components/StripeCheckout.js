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


class StripeCheckout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {

  }

  render () {
    return (
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
    )
  }
}

StripeCheckout.propTypes = {
  processTransaction: PropTypes.func
}

export default StripeCheckout
