import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter'
import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook'
import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram'
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub'

import ProductPurchaseForm from './ProductPurchaseForm'



class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      transactionStatus: 'clean',
      failedTransactions: 0
    }
  }

  function PurchasePageContent() {
    const status = this.state.transactionStatus;
    switch(status) {
      case 'success':
        return <SuccessPage />;
        break;
      case 'error':
        let failedTransactions = this.state.failedTransactions++
        this.setState({failedTransactions})

        if (failedTransactions >= 3) {
          return <ErrorPage />;
          break;
        } else {
          this.setState.({transactionStatus: 'retry'})
        }
      default:
        return <ProductPurchaseForm
                  updateTransactionStatus={this.updateTransactionStatus}
                />;
    }
  }

  updateTransactionStatus(results) {
    this.setState({
      transactionStatus: results
    })
  }


  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    // .image:before { background-image: url({process.env.BACKEND_URL + '/static/images/overlay.png'}); }
    // {JSON.stringify(process.env)}

    return (
      <div id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>
        <article id="purchase" className={`${this.props.article === 'purchase' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Purchase</h2>
          <span className="image main"><img src={process.env.BACKEND_URL + "/static/images/mulchmate-demo-slide-3.png"} alt="A picture of The Mulchmate in action" /></span>
          {close}
          <PurchasePageContent isLoggedIn={false} />
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About</h2>
          <span className="image main"><img src={process.env.BACKEND_URL + "/static/images/pic03.jpg"} alt="" /></span>
          <p>Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices. Aliquam libero et malesuada fames ac ante ipsum primis in faucibus. Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit amet.</p>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
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
              <li><input type="submit" value="Send Message" className="special" /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
          </form>
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
            <li><a href="#">
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
