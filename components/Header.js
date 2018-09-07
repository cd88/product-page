import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faGem from '@fortawesome/fontawesome-free-regular/faGem'

import SpinningRectangles from './SpinningRectangles'
import Carousel from './Carousel'


const Header = (props) => (

    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
          <SpinningRectangles />
        </div>
        <div className="content">
            <div className={`${props.isDemoVisible ? 'collapsed' : ''} ${props.paintingIntro} inner`}>
                <h1>The Mulchmate</h1>
                <p>A reusable garden tool that keeps yard waste bags open while they&#39;re being filled</p>
            </div>
            <div className={props.isDemoVisible ? 'demo' : 'collapsed demo'}>
              <Carousel />
                {/*<pre className="ui-center"><code id="console" ></code></pre>*/}
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.updateDemoState(true)}}>Demo</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('purchase')}}>Purchase</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>About</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
        <div className={`${props.isDemoVisible ? 'demoVisible' : ''} ${props.paintingIntro} cornerLogo`}>
          <a href="javascript:;" onClick={() => {props.updateDemoState(false)}}>
            <SpinningRectangles />
            <h2 className="title">The Mulchmate</h2>
          </a>
        </div>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    updateDemoState: PropTypes.func,
    timeout: PropTypes.bool,
    isDemoVisible: PropTypes.bool,
    paintingIntro: PropTypes.string
}

export default Header
