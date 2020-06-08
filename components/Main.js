import PropTypes from 'prop-types';
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
          <p>The Mulchmate is simply a rectangular piece of plastic engineered to fit in all brands of yard waste bags to keep them open as you need to fill them.</p>
          <p>How many times have you battled with a stupid paper bag just to get your fallen leaves, clipped grass, or small sticks dumped into it? Well, the Mulchmate cures all your yard bag problems!</p>
          <p>The Mulchmate sets up quickly, so why not use it? "How do you put it in the bag?", you may ask. No need to worry, it’s very easy:</p>
          <span className="image main"><img src={process.env.BACKEND_URL + "/static/images/mulchmate3.jpg"} alt="" /></span>
          <p>From the pictures above, you can see how the Mulchmate fits into a yard waste bag. There is nothing difficult about it, there are no bolts or nuts to attach and it's very lightweight.</p>
          <p>The Mulchmate fits nice and snug into most commercial yard waste bags keeps them open and standing as advertised. Also, if the bag is laid down, clippings, leaves, and sticks can be raked into it. The Mulchmate makes the job of yard clean up so much quicker and easier!</p>
          <p>Fall is right around the corner and The Mulchmate makes a great gift.</p>
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
