import React from 'react'
import PropTypes from 'prop-types'

const Footer = props => (
  <footer id="footer" style={props.timeout ? { display: 'none' } : {}}>
    <p className="contact"> Telefon: 0721082747</p>
    <p className="contact-email"> EMAIL: dprautodragan@gmail.com</p>
    <a
      className="contact"
      href="https://www.google.com/maps/search/?api=1&query=Calea Sagului Timisoara 221"
    >
      Adresa: Calea Sagului, Nr. 221, Etaj 1
    </a>
    <p className="copyright">&copy; Auto Drăgan </p>
  </footer>
)

Footer.propTypes = {
  timeout: PropTypes.bool,
}

export default Footer
