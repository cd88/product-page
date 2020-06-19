import React, {Component} from 'react'
import {render} from 'react-dom'
import PropTypes from 'prop-types'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faPlus from '@fortawesome/react-fontawesome'
import faMinus from '@fortawesome/react-fontawesome'

import NumberPicker from './NumberPicker'

import PayButton from './PayButton'

const productInfo = {
  name: "The Mulchmate",
  description: "The Mulchmate is engineered to fit all brands of yard waste bags and keeps them open as you're filling them, saving you time and skipping the headache.",
  dimensions: "22 x 14 in.",
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
      <div className="product-form">
        <span className="display">
          <img src={process.env.BACKEND_URL + "/static/images/mulchmate-demo-slide-3.png"}
            alt="The Mulchmate holds a yard waste paper bag open and upright" />
        </span>
        <h2 className="name main">{productInfo.name}</h2>
        <h4 className="description">{productInfo.description}</h4>
        <h4 className="size centered-label">dimensions:</h4>
        <h4 className="dimensions">{productInfo.dimensions}</h4>

        <NumberPicker
          value={this.state.purchaseQuantity}
          updatePurchaseQuantity={this.updatePurchaseQuantity}/>
        <h3 className="price-label centered-label">Price:</h3>
        <h2 className="price">${this.state.purchaseAmount}</h2>
        <PayButton amount={this.state.purchaseAmount * 100} />
      </div>
    )
  }
}

ProductPurchaseForm.propTypes = {
  updateTransactionStatus: PropTypes.string
}

export default ProductPurchaseForm
