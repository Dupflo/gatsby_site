import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"
import Layout from "../components/layout"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


library.add(faEye);

const Project = ({ title, description, url, imageData }) => (
  <Layout>
    <main>
      <h1 className="lg-heading">{title}</h1>
      <div className="project">
      <div className="project-photo">
        <Image fluid={imageData} alt={title} />
      </div>
      <div className="project-info">
        <p>{description}</p>
          <a href={url} target="_blank" ><FontAwesomeIcon icon="eye"/> Voir ce projet en ligne</a>
        </div>
          <Link to="/projects">&larr; Retour à la liste des projets</Link>
      </div>
    </main>
  </Layout>
)

export default Project
