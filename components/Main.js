import React from 'react';
import PropTypes from 'prop-types';
import fetch from 'isomorphic-unfetch'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter'
import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook'
import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram'
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub'

import ProductPurchaseForm from './ProductPurchaseForm'

function PurchasePageContent(props) {
  let status = props.transactionStatus;
  switch(status) {
    case 'success':
      // return <SuccessPage />;
      return <div><h1>Order succeeded, check your email</h1></div>;
      break;
    case 'error':
      let failedTransactions = props.failedTransactions++
      props.updateFailedTransactions(failedTransactions)
      if (failedTransactions >= 3) {
        // return <ErrorPage />;
        return <div><h1>Order failed 3 times</h1></div>;
        break;
      } else {
        props.updateTransactionStatus('retry')
      }
    default:
      return <ProductPurchaseForm
              updateTransactionStatus={props.transactionStatus}
              />;
  }
}




class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      transactionStatus: 'clean',
      failedTransactions: 0
    }
    this.updateTransactionStatus = this.updateTransactionStatus.bind(this);

  }

  submitToAPI = () => {
    debugger;
    var userData = {
      name : "name",
      phone : "1231231231",
      email : "camerondonahue@gmail.com",
      desc : "example message"
    };

    fetch("https://tou03qbxk5.execute-api.us-east-1.amazonaws.com/dev/mailfwd", {
      method: 'POST',
      body: JSON.stringify({userData})
    })
    .then( res => res.json())
    .then( data => console.log(data));


      // success: function () {
      //   // clear form and show a success message
      //   alert("Successfull");
      //   // document.getElementById("contact-form").reset();
      //   // location.reload();
      // },
      // error: function () {
      //   // show an error message
      //   alert("UnSuccessfull");
      // }
  }

  updateTransactionStatus(results) {
    this.setState({
      transactionStatus: results
    })
  }

  handleClick = e => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
  }


  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    // .image:before { background-image: url({process.env.BACKEND_URL + '/static/images/overlay.png'}); }
    // {JSON.stringify(process.env)}

    return (
      <div id="main" onClick={this.handleClick} style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>
        <article id="purchase" className={`purchase ${this.props.article === 'purchase' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>

          {close}
          <PurchasePageContent
            updateTransactionStatus={this.updateTransactionStatus}
            transactionStatus={this.state.transactionStatus}/>
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About</h2>
          <span className="image main"><img src={process.env.BACKEND_URL + "/static/images/pic03.jpg"} alt="" /></span>
          <p>Paulson Industries text copied to here</p>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <div>
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li><button className="special" onClick={this.submitToAPI}>Send Message</button></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
          </div>
          <ul className="icons">
            <li><a href="#">
              <FontAwesomeIcon icon={faTwitter} />
            </a></li>
            <li><a href="#">
              <FontAwesomeIcon icon={faFacebook} />
            </a></li>
            <li><a href="#">
              <FontAwesomeIcon icon={faInstagram} />
            </a></li>
            <li><a href="https://github.com/celloworld">
              <FontAwesomeIcon icon={faGithub} />
            </a></li>
          </ul>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool
}

export default Main
