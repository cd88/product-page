import fetch from 'isomorphic-unfetch';
import React from 'react'
import PropTypes from 'prop-types'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faPlus from '@fortawesome/react-fontawesome'
import faMinus from '@fortawesome/react-fontawesome'
import StripeCheckout from 'react-stripe-checkout';

// export {
//   clamp: somethingTheyalreadyCreated
// }
// export default TouchCarousel
// export touchWithMouseHOC

import config from 'static/config';

class PayButton extends React.Component {
  constructor(props) {
    super(props);
    this.onToken = this.onToken.bind(this);
  }

  async onToken(token) { // On a successful tokenization request,
    const res = await fetch(config.stripe.apiUrl, { // POST to our backend server with the token and charge details
      method: 'POST',
      body: JSON.stringify({
        token,
        charge: {
          amount: this.props.amount,
          currency: config.stripe.currency,
        },
      }),
    });
    const data = await res.json();
    console.log('onToken');
    console.log(data);
  }

  render() {
    console.log(this.props.amount)

    return (
      <StripeCheckout
        name="Paulson Industries"
        description="The Mulchmate"
        image="bg.png"
        ComponentClass="div"
        paneLabel="give dollars"
        token={this.onToken}
        amount={this.props.amount}
        currency={config.stripe.currency}
        stripeKey={config.stripe.apiKey} // Stripe publishable API Key
        shippingAddress
        billingAddress
        zipCode
        allowRememberMe={false}
      />
    );
  }
}

PayButton.propTypes = {
  amount: PropTypes.number.isRequired
};

export default PayButton;

      // <script
      //   src="https://checkout.stripe.com/checkout.js" className="stripe-button"
      //   data-key="pk_test_9ByY3GWai1HHnzu0K9lx1Awc"
      //   data-amount="999"
      //   data-name="Stripe.com"
      //   data-description="Example charge"
      //   data-image="https://stripe.com/img/documentation/checkout/marketplace.png"
      //   data-locale="auto"
      //   data-zip-code="true">
      // </script>
