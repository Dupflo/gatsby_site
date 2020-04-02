import React, { Component } from "react"
import { Link } from "gatsby"
import useToggler from "../components/useToggler"

function Menu() {

  const [show, toggle] = useToggler(false);
    return (
      <>
        <div className={show ? "menu-btn close" : "menu-btn"} onClick={toggle}>
          <div className="btn-line"></div>
          <div className="btn-line"></div>
          <div className="btn-line"></div>
        </div>
        <div className={show ? "menu show" : "menu"}>
          <div className={show ? "menu-branding show" : "menu-branding"}>
            <div className="portrait"></div>
          </div>
          <ul className={show ? "menu-nav show" : "menu-nav"}>
            <li className={show ? "nav-item current show" : "nav-item "}>
              <Link to="/" className="nav-link" activeClassName="active">Accueil</Link>
            </li>
            <li className={show ? "nav-item show" : "nav-item "}>
              <Link to="/about" className="nav-link" activeClassName="active">A propos</Link>
            </li>
            <li className={show ? "nav-item show" : "nav-item"}>
              <Link to="/projects" className="nav-link" activeClassName="active">Projets</Link>
            </li>
            {/* <li className={show ? "nav-item show" : "nav-item "}>
              <Link to="/blog" className="nav-link">Blog</Link>
            </li> */}
            <li className={show ? "nav-item show" : "nav-item "}>
              <Link to="/contact" className="nav-link" activeClassName="active">Contact</Link>
            </li>
          </ul>
        </div>
      </>
    )
}

export default Menu
