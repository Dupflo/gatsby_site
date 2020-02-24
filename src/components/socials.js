import React from "react"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)

const Socials = () => (
       <div className="icons">
                {/* <a href="#!">
                    <i className="fab fa-twitter fa-2x"></i>
                </a> */}
                {/* <a href="#!">
                    <i className="fab fa-facebook fa-2x"></i>
                </a> */}
                <a href="https://www.linkedin.com/in/florian-dupuis-701310b1/" target="_blank">
                <FontAwesomeIcon icon={['fab', 'linkedin']} size="2x"/>
                </a>
                <a href="https://g.page/r/CQbCKQKinS2xEAE" target="_blank">
                <FontAwesomeIcon icon={['fab', 'google']} size="2x"/>
                </a>
                <a href="https://github.com/Dupflo" target="_blank">
                <FontAwesomeIcon icon={['fab', 'github']} size="2x"/>
                </a>
            </div>
    )
  
export default Socials
