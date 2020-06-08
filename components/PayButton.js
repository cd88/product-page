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

import stripeConfig from '../static/stripe-config.js'
console.log(stripeConfig);

class PayButton extends React.Component {
  constructor(props) {
    super(props);
  }
  onToken = async (token, args) => {
  // async onToken(token) { // On a successful tokenization request,
    debugger;
    const res = await fetch(stripeConfig.checkoutUrl, { // POST to our backend server with the token and charge details
      method: 'POST',
      body: JSON.stringify({
        token,
        order: {
          amount: this.props.amount,
          currency: "USD",
          skus: [stripeConfig.productSKU],
          shipping: {
            name: args.shipping_name,
            address: {
              line1: args.shipping_address_line1,
              city: args.shipping_address_city,
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
        currency={stripeConfig.currency}
        stripeKey={stripeConfig.publicApiTestKey} // Stripe publishable API Key
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
