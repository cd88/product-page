import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter'
import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook'
import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram'
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types';
import { useState } from 'react';

import { useState } from 'react';
import 'bulma/css/bulma.min.css';

function ResponseMessage(props) {
  const classes = ['screen-height-min', 'response-message', props.response.type];

  return (
    <div className={classes}>
      <p>{props.response.message}</p>
    </div>
  )
}

const Home = () => {
  const [contact, setContact] = useState({
    name: '',
    email: '',
    honeypot: '', // if any value received in this field, form submission will be ignored.
    message: '',
    accessKey: 'd5a1e280-f0cf-41c4-a3f8-a2abc0b1d9efda' // get your access key from https://www.staticforms.xyz
  });

  const [response, setResponse] = useState({
    type: '',
    message: ''
  });

  const handleChange = e =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await fetch('https://api.staticforms.xyz/submit', {
        method: 'POST',
        body: JSON.stringify(contact),
        headers: { 'Content-Type': 'application/json' }
      });

      const json = await res.json();

      if (json.success) {
        setResponse({
          type: 'success',
          message: 'Thank you for reaching out to us.'
        });
      } else {
        setResponse({
          type: 'error',
          message: json.message
        });
      }
    } catch (e) {
      console.log('An error occurred', e);
      setResponse({
        type: 'error',
        message: 'An error occured while submitting the form'
      });
    }
  };

  render() {
    return (
      <div>
        <h2 className="major">{response.message === "" ? "Contact The Mulchmate Team" : "Thanks For Reaching Out"}</h2>
        {response.message !== ''
            ? <ResponseMessage response={response} />
            : <form
                action="https://api.staticforms.xyz/submit"
                method="post"
                className="contact-form screen-height-min"
                onSubmit={handleSubmit}
              >
                <div className="field half first">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div
                  className='field half'
                  style={{ height: '0', overflow: 'hidden', opacity: '0' }}
                  // style={{ display: 'none' }}
                  tabIndex="-1"
                >
                  <label className='label'>Title</label>
                  <div className='control'>
                    <input
                      type='text'
                      name='honeypot'
                      // style={{ display: 'none' }}
                      onChange={handleChange}
                    />
                    <input
                      type='hidden'
                      name='subject'
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="field half">
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="field">
                  <label htmlFor="message">Message</label>
                  <textarea name="message" id="message" rows="4" required></textarea>
                </div>
                <ul className="actions">
                  <li><input type="submit" value="Send Message" className="special" /></li>
                  <li><input type="reset" value="Reset" /></li>
                </ul>
              </form>
          }
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
