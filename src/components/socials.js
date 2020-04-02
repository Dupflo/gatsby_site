import React from "react"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)

const Socials = () => (
       <div className="icons">
                <a href="https://www.linkedin.com/in/florian-dupuis-701310b1/" target="_blank">
                <FontAwesomeIcon icon={['fab', 'linkedin']} size="2x" width="32px"/>
                </a>
                <a href="https://g.page/r/CQbCKQKinS2xEAE" target="_blank">
                <FontAwesomeIcon icon={['fab', 'google']} size="2x" width="32px"/>
                </a>
                <a href="https://github.com/Dupflo" target="_blank">
                <FontAwesomeIcon icon={['fab', 'github']} size="2x" width="32px"/>
                </a>
                <a href="https://www.instagram.com/dupflo/" target="_blank">
                <FontAwesomeIcon icon={['fab', 'instagram']} size="2x" width="32px"/>
                </a>
            </div>
    )
  
export default Socials
