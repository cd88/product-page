import PropTypes from 'prop-types';

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <p className="copyright">&copy;2018 Mulch Mate &mdash; <a href="http://www.paulsonindustries.net/">Paulson Industries, LLC</a><br/>Design: <a href="https://github.com/celloworld">Cameron Donahue</a></p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
