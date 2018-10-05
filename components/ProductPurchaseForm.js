import React, {Component} from 'react'
import {render} from 'react-dom'
import PropTypes from 'prop-types'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faPlus from '@fortawesome/react-fontawesome'
import faMinus from '@fortawesome/react-fontawesome'

import NumberPicker from './NumberPicker'
import StripeCheckout from './StripeCheckout'

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
    super(props)
    this.state = {
      purchaseQuantity: 1
    }
    this.updatePurchaseQuantity = this.updatePurchaseQuantity.bind(this)
  }

  launchLambdaServer(data) {
    console.log(data)
  }

  handleTransactionResults(results) {
    console.log(results)
    this.props.updateTransactionStatus("success")
  }

  updatePurchaseQuantity(int) {
    this.updateTotal(int)
    this.setState({
      purchaseQuantity: int
    })
  }
  updateTotal(int) {
    switch(int) {
      case (int <= 4):
        break;
      case (int <= 9):
        break;
      default:
        break;
    }
    this.setState({
      purchaseQuantity: int
    })
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

        <NumberPicker updatePurchaseQuantity={this.updatePurchaseQuantity}/>

        {/*<Form.Field control={NumberPicker}
          name={"multipleOfThree"}
          value={this.getValue("multipleOfThree")}
          onChange={this.updateNumberPicker}
          label="quantity"
          placeholder="Quantity"
          min={1}
          max={20}/>*/}
        <StripeCheckout />
      </form>
    )
  }
}

ProductPurchaseForm.propTypes = {
  updateTransactionStatus: PropTypes.string
}

export default ProductPurchaseForm
