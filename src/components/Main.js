import PropTypes from 'prop-types'
import React from 'react'
import servicii from '../images/servicii.jpg'
import dosar from '../images/dosar.jpg'
import tarife from '../images/tarife.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="servicii"
          className={`${this.props.article === 'servicii' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">servicii</h2>
          <span className="image main">
            <img src={servicii} alt="" />
          </span>
          <p>
            Şcoala noastră vă oferă servicii de cea mai bună calitate, cu
            personal de înaltă pregătire profesională şi probitate morală, în
            vederea obţinerii permisului de conducere pentru categoria B.
          </p>

          <div className="icons">
            <a className="icon fa-credit-card">
              <span className="label">Card</span>
              <p>
                Plata în rate a cursului și reducerile substanțiale la
                întocmirea fișei medicale și a avizului psihologic sunt doar
                câteva dintre avantaje.
              </p>
            </a>
          </div>

          <div className="icons">
            <a className="icon fa-check-circle">
              <span className="label">Check</span>
              <p>
                Cu o rată de promovabilitate de peste 90%, școala noastră este
                drumul cel mai sigur de la cursant la șofer !
              </p>
            </a>
          </div>

          <div className="icons">
            <a className="icon fa-clipboard">
              <span className="label">Board</span>
              <p>Sală pentru susținerea orelor de legislație.</p>
            </a>
          </div>

          <div className="icons">
            <a className="icon fa-flag">
              <span className="label">Crown</span>
              <p>Promptitudine și seriozitate.</p>
            </a>
          </div>

          {close}
        </article>

        <article
          id="inscriere"
          className={`${this.props.article === 'inscriere' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Înscriere</h2>
          <span className="image main">
            <img src={dosar} alt="" />
          </span>
          <p>Actele necesare întocmirii dosarului sunt:</p>
          <ul>
            <li>Carte de identitate</li>
            <li>Cazier judiciar</li>
          </ul>
          <p>
            Pentru a veni în ajutorul viitorilor cursanți, fișa medicală și
            avizul psihologic vor fi făcute la o clinică medicală privată unde
            școala are contract de colaborare și cu o reducere substanțială .
          </p>

          <p>Pentru înscrieri vizitați secțiunea Contact.</p>
          {close}
        </article>

        <article
          id="tarife"
          className={`${this.props.article === 'tarife' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Tarife</h2>
          <span className="image main">
            <img src={tarife} alt="" />
          </span>
          <p>
            Prețul cursului este de 1650 lei, plătibili în 2 rate, prima rată se
            achită la înscriere iar a doua la începerea modulului de pregătire
            practică.
          </p>

          <p>Prețul școlii de șoferi include:</p>
          <ul>
            <li>Legislație rutieră - 24 de ore didactice</li>
            <li>
              Practică în conducerea autovehiculului - 30 de ore didactice
            </li>
            <li>Carburantul necesar orelor de conducere</li>
            <li>Întocmirea dosarului</li>
            <li>Programarea la ghișeul DRPCIV pentru examenul teoretic</li>
          </ul>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Nume</label>
              <input type="text" name="name" id="name" required minLength="3" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" required />
            </div>
            <div className="field">
              <label htmlFor="message">Mesaj</label>
              <textarea
                name="message"
                id="message"
                rows="4"
                required
                minLength="8"
              ></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Trimite" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://www.facebook.com/dprauto.dragan"
                className="icon fa-facebook"
              >
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/autodragan/"
                className="icon fa-instagram"
              >
                <span className="label">Instagram</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
