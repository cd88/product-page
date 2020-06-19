import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faGem from '@fortawesome/fontawesome-free-regular/faGem'

import SpinningRectangles from './SpinningRectangles'
import Carousel from './Carousel'

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      animationState: '',
      currentSlide: 0
    }
    this.revealDemoAnimationSequence = this.revealDemoAnimationSequence.bind(this)
    this.concealDemoAnimationSequence = this.concealDemoAnimationSequence.bind(this)
    this.updateCurrentSlide = this.updateCurrentSlide.bind(this)
  }

  revealDemoAnimationSequence(){
    this.setState({
      animationState: 'revealDemoStage1'
    })
    setTimeout(() => {
        this.setState({
          animationState: this.state.animationState.concat(' revealDemoStage2')
        })
        this.props.updateDemoState(true);
    }, 100)
    setTimeout(() => {
        this.setState({
          animationState: this.state.animationState.concat(' revealDemoStage3')
        })
    }, 450)
    setTimeout(() => {
        this.setState({
          animationState: this.state.animationState.concat(' revealDemoStage4')
        })
    }, 900)
  }

  concealDemoAnimationSequence(){
    this.setState({
      animationState: 'concealDemoStage1'
    })
    setTimeout(() => {
      this.props.updateDemoState(false)
        this.setState({
          animationState: this.state.animationState.concat(' concealDemoStage2')
        })
    }, 50)
    setTimeout(() => {
        this.setState({
          animationState: ''
        })
    }, 1200)
  }

  updateCurrentSlide(index) {
    this.setState({
      currentSlide: index
    })
  }

  render() {
    return (
      <header id="header" style={this.props.timeout ? {display: 'none'} : {}}>
          <div className={`carousel-pagination-wrapper ${this.state.animationState}`}>
            <div className="carousel-pagination">
                {[1,2,3].map((_, index) => (

                  <button
                    key={index}
                    className={`${this.state.animationState} ${this.state.currentSlide === index ? 'current' : ''} ${'carouselPagePicker' + (1+index)}`}
                    onClick={(event) => {this.carousel.handlePaginationClick(index)}}
                  >
                  <div></div>
                  {index + 1}
                  </button>
                ))}

            </div>
          </div>
          <div className={`logoWrapper ${this.state.animationState}`}>
            <div className={`logo ${this.state.animationState}`}>
              <SpinningRectangles />
            </div>
          </div>
          <div className={`content ${this.state.animationState}`}>
              <div className={`inner ${this.props.isDemoVisible ? 'collapsed' : ''} ${this.props.paintingIntro}`}>
                  <h1 className='main-title'>The Mulchmate</h1>
                  <p>A reusable garden tool that keeps yard waste bags open</p>
              </div>
              <div className={`demo ${this.props.isDemoVisible ? '' : 'collapsed'}`}>
                <Carousel
                  ref={instance => { this.carousel = instance }}
                  updateCurrentSlide={this.updateCurrentSlide}
                />
                  {/*<pre className="ui-center"><code id="console" ></code></pre>*/}
              </div>
          </div>
          <nav>
              <ul>
                  <li><a href="javascript:;" onClick={() => {if(!this.props.isDemoVisible) {this.revealDemoAnimationSequence()}}}>Demo</a></li>
                  <li><a href="javascript:;" onClick={() => {this.props.onOpenArticle('purchase')}}>Purchase</a></li>
                  <li><a href="javascript:;" onClick={() => {this.props.onOpenArticle('about')}}>About</a></li>
                  <li><a href="javascript:;" onClick={() => {this.props.onOpenArticle('contact')}}>Contact</a></li>
              </ul>
          </nav>
          <div className={`cornerLogo ${this.props.isDemoVisible ? 'demoVisible' : ''} ${this.props.paintingIntro}`}>
            <a href="javascript:;" onClick={() => {this.concealDemoAnimationSequence()}}>
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
