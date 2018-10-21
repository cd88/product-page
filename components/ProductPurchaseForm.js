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
const priceLabelStyle = {
  display: 'inline-block',
  marginRight: '8px'
}
const priceStyle = {
  display: 'inline-block'
}

class ProductPurchaseForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      purchaseQuantity: 1,
      purchaseAmount: 8
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
    // TODO: redux, also pass product id
    // let bulkDiscount = int >= 10 ? .75 : int >= 3 ? .875 : 1
    let bulkDiscount = 1
    let unitPrice = 8
    this.setState({
      purchaseAmount: int * unitPrice * bulkDiscount
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
        <h4 style={priceLabelStyle}>Price:</h4><h2 style={priceLabelStyle}>${this.state.purchaseAmount}</h2>
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
