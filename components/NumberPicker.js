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


class NumberPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 1};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
      let val = this.state.value
      /* 1-20, 25, 30, 35, 40 */
      let newVal = event.target.value < 1 ? 1
        : event.target.value > 20 && event.target.value < 25 ?
            val === 20 ? 25 : 20
        : event.target.value > 25 && event.target.value < 30 ?
            val === 25 ? 30 : 25
        : event.target.value > 30 && event.target.value < 35 ?
            val === 30 ? 35 : 30
        : event.target.value > 35 && event.target.value < 40 ?
            val === 35 ? 40 : 35
        : event.target.value > 40 ? (()=>{ alert('Please use the contact form to inquire about vendor rates'); return 40})()
        : Math.floor(event.target.value)
      this.setState({value: newVal});
      this.props.updatePurchaseQuantity(newVal);
    }

  render () {
    return (
      <label>
        <h4 className="quantity">Quantity:</h4>
        <input type="number"
          value={this.state.value}
          onChange={this.handleChange}

        />
      </label>
    )
  }
}

NumberPicker.propTypes = {
  updatePurchaseQuantity: PropTypes.func
}

export default NumberPicker
