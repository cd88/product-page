import PropTypes from 'prop-types';

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <p className="copyright">&copy;2019 The Mulchmate &mdash; <a href="http://www.paulsonindustries.net/">Paulson Industries, LLC</a><br/>Design by <a href="https://github.com/celloworld">FuturePilots</a></p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
