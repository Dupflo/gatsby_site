import React, { Component } from "react"
import { Link } from "gatsby"

class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = { addClass: false }
  }
  toggle() {
    this.setState({ addClass: !this.state.addClass })
  }
  render() {
    return (
      <>
        <div className={this.state.addClass ? "menu-btn close" : "menu-btn"} onClick={this.toggle.bind(this)}>
          <div className="btn-line"></div>
          <div className="btn-line"></div>
          <div className="btn-line"></div>
        </div>
        <div className={this.state.addClass ? "menu show" : "menu"}>
          <div className={this.state.addClass ? "menu-branding show" : "menu-branding"}>
            <div className="portrait"></div>
          </div>
          <ul className={this.state.addClass ? "menu-nav show" : "menu-nav"}>
            <li className={this.state.addClass ? "nav-item current show" : "nav-item "}>
              <Link to="/" className="nav-link" activeClassName="active">Accueil</Link>
            </li>
            <li className={this.state.addClass ? "nav-item show" : "nav-item "}>
              <Link to="/about" className="nav-link" activeClassName="active">A propos</Link>
            </li>
            <li className={this.state.addClass ? "nav-item show" : "nav-item"}>
              <Link to="/projects" className="nav-link" activeClassName="active">Projets</Link>
            </li>
            {/* <li className={this.state.addClass ? "nav-item show" : "nav-item "}>
              <Link to="/blog" className="nav-link">Blog</Link>
            </li> */}
            <li className={this.state.addClass ? "nav-item show" : "nav-item "}>
              <Link to="/contact" className="nav-link" activeClassName="active">Contact</Link>
            </li>
          </ul>
        </div>
      </>
    )
  }
}

export default Menu
