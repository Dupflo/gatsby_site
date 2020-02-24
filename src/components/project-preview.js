import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus, faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


library.add(faPlus);



const ProjectPreview = ({ slug, title, projectType, imageData }) => (
  <div className="item">
    <Link to={`/${slug}/`}>
      <Image fluid={imageData} alt="{title}" />
    </Link>
    <h2>
      <Link to={`/${slug}/`}>{title}</Link>
    </h2>
    <span className="btn-light">{projectType}</span>
    <Link to={`/${slug}/`} className="btn-dark">
      En savoir <FontAwesomeIcon icon="plus"/>
    </Link>
  </div>
)

export default ProjectPreview
