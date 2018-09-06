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
            <div className={props.isDemoVisible ? 'collapse inner' : 'inner'}>
                <h1>The Mulchmate</h1>
                <p>A reusable garden tool that keeps yard waste bags open while they&#39;re being filled</p>
            </div>
            <div className={props.isDemoVisible ? 'demo' : 'collapse demo'}>
              <Carousel />
                {/*<pre className="ui-center"><code id="console" ></code></pre>*/}
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.updateDemoState(true)}}>Demo</a></li>
                <li><a href="javascript:;" onClick={() => {props.updateDemoState(false)}}>Purchase</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>About</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    updateDemoState: PropTypes.func,
    timeout: PropTypes.bool,
    isDemoVisible: PropTypes.bool
}

export default Header
