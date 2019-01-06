import React from 'react'
import fetch from 'isomorphic-unfetch'
import PropTypes from 'prop-types'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faPlus from '@fortawesome/react-fontawesome'
import faMinus from '@fortawesome/react-fontawesome'
import StripeCheckout from 'react-stripe-checkout'

// export {
//   clamp: somethingTheyalreadyCreated
// }
// export default TouchCarousel
// export touchWithMouseHOC

import foo from '../static/stripe-config.js'

const checkoutUrl = 'https://tou03qbxk5.execute-api.us-east-1.amazonaws.com/dev/createCharge'

class PayButton extends React.Component {
  constructor(props) {
    super(props);
  }
  /*
  "shipping": {
    "name": "Fake Name",
    "address": {
      "city": "Los Angeles",
      "country": "US",
      "line1": "123 Street Lane",
      "line2":null,
      "postal_code": "90001",
      "state": "CA"
    }
  },
  */
  onToken = async (token, args) => {
  // async onToken(token) { // On a successful tokenization request,
    debugger;
    const res = await fetch(checkoutUrl, { // POST to our backend server with the token and charge details
      method: 'POST',
      body: JSON.stringify({
        token,
        order: {
          amount: this.props.amount,
          currency: "USD",
          skus: ["prod_DiT3Hrr3Qw8QMV"],
          shipping: {
            name: args.shipping_name,
            address: {
              line1: args.shipping_address_line1,
              line2: args.shipping_address_line2 ? args.shipping_address_line2: null,
              city: args.shipping_address_city,
              state: args.shipping_address_state ? args.shipping_address_state : null,
              country: args.shipping_address_country_code,
              postal_code: args.shipping_address_zip
            }
          }
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
        _image="bg.png"
        ComponentClass="div"
        paneLabel="Buy The Mulchmate"
        token={this.onToken}
        amount={this.props.amount}
        currency={foo.stripe.currency}
        stripeKey={foo.stripe.publicApiTestKey} // Stripe publishable API Key
        shippingAddress
        billingAddress
        zipCode
        allowRememberMe={true}
      />
    );
  }
}

PayButton.propTypes = {
  amount: PropTypes.number.isRequired
};

export default PayButton;
