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
    }, 350)
    setTimeout(() => {
        this.setState({
          animationState: this.state.animationState.concat(' revealDemoStage3')
        })
    }, 1000)
    setTimeout(() => {
        this.setState({
          animationState: this.state.animationState.concat(' revealDemoStage4')
        })
    }, 1500)
  }

  concealDemoAnimationSequence(){
    this.setState({
      animationState: 'concealDemoStage1'
    })
    setTimeout(() => {
        this.setState({
          animationState: this.state.animationState.concat(' concealDemoStage2')
        })
    }, 250)
    setTimeout(() => {
        this.setState({
          animationState: this.state.animationState.concat(' concealDemoStage3')
        })
    }, 750)
    setTimeout(() => {
        this.setState({
          animationState: this.state.animationState.concat(' concealDemoStage4')
        })
    }, 1300)
    setTimeout(() => {
        this.setState({
          animationState: ''
        })
    }, 1500)
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
                  >
                  <div></div>
                  {index + 1}
                  </button>
                ))}

            </div>
          </div>
          <div className={`logo ${this.state.animationState}`}>
            <SpinningRectangles />
          </div>
          <div className={`content ${this.state.animationState}`}>
              <div className={`inner ${this.props.isDemoVisible ? 'collapsed' : ''} ${this.props.paintingIntro}`}>
                  <h1>The Mulchmate</h1>
                  <p>A reusable garden tool that keeps yard waste bags open while they&#39;re being filled</p>
              </div>
              <div className={`demo ${this.props.isDemoVisible ? '' : 'collapsed'}`}>
                <Carousel updateCurrentSlide={this.updateCurrentSlide}/>
                  {/*<pre className="ui-center"><code id="console" ></code></pre>*/}
              </div>
          </div>
          <nav>
              <ul>
                  <li><a href="javascript:;" onClick={() => {if(!this.props.isDemoVisible) {this.props.updateDemoState(true); this.revealDemoAnimationSequence()}}}>Demo</a></li>
                  <li><a href="javascript:;" onClick={() => {this.props.onOpenArticle('purchase')}}>Purchase</a></li>
                  <li><a href="javascript:;" onClick={() => {this.props.onOpenArticle('about')}}>About</a></li>
                  <li><a href="javascript:;" onClick={() => {this.props.onOpenArticle('contact')}}>Contact</a></li>
              </ul>
          </nav>
          <div className={`cornerLogo ${this.props.isDemoVisible ? 'demoVisible' : ''} ${this.props.paintingIntro}`}>
            <a href="javascript:;" onClick={() => {this.concealDemoAnimationSequence(); this.props.updateDemoState(false)}}>
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
