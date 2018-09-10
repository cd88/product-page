import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faGem from '@fortawesome/fontawesome-free-regular/faGem'

import SpinningRectangles from './SpinningRectangles'
import Carousel from './Carousel'

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPage: 0,
      logoAnimationClasses: '',
      paginationAnimationClasses: '',
    }
    this.triggerDemoAnimationSequence = this.triggerDemoAnimationSequence.bind(this)
  }

  triggerDemoAnimationSequence(){
    setTimeout(() => {
        this.setState({

        })
    }, 325)
  }

  render() {
    return (
      <header id="header" style={this.props.timeout ? {display: 'none'} : {}}>
          <div className={`${this.props.isDemoVisible ? '' : 'collapsed' } carousel-pagination-wrapper`}>
            <div className="carousel-pagination">
                {[1,2,3].map((_, index) => (
                  <button
                    key={index}
                    className={`${this.state.currentPage === index ? 'current' : ''} ${'carouselPagePicker' + (1+index)}`}

                  >
                  {index + 1}
                  </button>
                ))}

            </div>
          </div>
          <div className={`${this.props.isDemoVisible ? 'collapsed' : '' } logo `}>
            <SpinningRectangles />
          </div>
          <div className={`${this.props.isDemoVisible ? 'demo' : '' } content`}>
              <div className={`${this.props.isDemoVisible ? 'collapsed' : ''} ${this.props.paintingIntro} inner`}>
                  <h1>The Mulchmate</h1>
                  <p>A reusable garden tool that keeps yard waste bags open while they&#39;re being filled</p>
              </div>
              <div className={this.props.isDemoVisible ? 'demo' : 'collapsed demo'}>
                <Carousel currentPage={this.state.currentPage}/>
                  {/*<pre className="ui-center"><code id="console" ></code></pre>*/}
              </div>
          </div>
          <nav>
              <ul>
                  <li><a href="javascript:;" onClick={() => {if(!this.props.isDemoVisible) {this.props.updateDemoState(true); this.triggerDemoAnimationSequence()}}}>Demo</a></li>
                  <li><a href="javascript:;" onClick={() => {this.props.onOpenArticle('purchase')}}>Purchase</a></li>
                  <li><a href="javascript:;" onClick={() => {this.props.onOpenArticle('about')}}>About</a></li>
                  <li><a href="javascript:;" onClick={() => {this.props.onOpenArticle('contact')}}>Contact</a></li>
              </ul>
          </nav>
          <div className={`${this.props.isDemoVisible ? 'demoVisible' : ''} ${this.props.paintingIntro} cornerLogo`}>
            <a href="javascript:;" onClick={() => {this.props.updateDemoState(false)}}>
              <SpinningRectangles />
              <h2 className="title">The Mulchmate</h2>
            </a>
          </div>
      </header>
    )
  }
}

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    updateDemoState: PropTypes.func,
    timeout: PropTypes.bool,
    isDemoVisible: PropTypes.bool,
    paintingIntro: PropTypes.string
}

export default Header
