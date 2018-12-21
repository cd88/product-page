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

import foo from '../static/config';
const checkoutUrl = 'https://tou03qbxk5.execute-api.us-east-1.amazonaws.com/dev'

class PayButton extends React.Component {
  constructor(props) {
    super(props);
  }

  onToken = async (token) => {
  // async onToken(token) { // On a successful tokenization request,
    debugger;
    const res = await fetch(checkoutUrl, { // POST to our backend server with the token and charge details
      method: 'POST',
      body: JSON.stringify({
        token,
        charge: {
          amount: this.props.amount,
          currency: foo.stripe.currency,
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
      <div>
      <StripeCheckout
        name="Paulson Industries"
        description="The Mulchmate"
        _image="bg.png"
        ComponentClass="div"
        paneLabel="trade monies"
        token={this.onToken}
        amount={this.props.amount}
        currency={foo.stripe.currency}
        stripeKey={foo.stripe.publicApiTestKey} // Stripe publishable API Key
        shippingAddress
        billingAddress
        zipCode
        allowRememberMe={false}
      />
      </div>
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
