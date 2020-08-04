import PropTypes from 'prop-types'
import React from 'react'
import logoImg from '../images/AutoDragan-Final.png'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span>
        <img
          src={logoImg}
          alt=""
          style={{ width: '100%', height: '100%', paddingTop: '10px' }}
        />
      </span>
    </div>
    <div className="content">
      <div className="inner">
        <h1>AUTO DRĂGAN</h1>
        <p>
        Cursuri în vederea obținerii permisului de conducere pentru categoria B.
        </p>
      </div>
    </div>
    <nav>
      <ul style={{paddingRight: "6px"}}>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('servicii')
            }}
          >
            Servicii
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('inscriere')
            }}
          >
            Înscrieri
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('tarife')
            }}
          >
            Tarife
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
