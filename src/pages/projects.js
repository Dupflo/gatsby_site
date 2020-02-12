import React from "react"
import Layout from "../components/layout"
import Footer from "../components/footer"
import projet1 from "../images/projects/project1.jpg"

const ProjectsPage = () => (
    <Layout>
      <main>
        <h1 className="lg-heading">
            Mes <span className="text-secondary">projets</span>
        </h1>
        <h2 className="sm-heading">
            Voici quelques un de mes projets... page en construction... visitez mon profil <a href="https://www.malt.fr/profile/dupuisflorian" target="_blank" > Malt</a> en attendant
        </h2>
        <div className="projects">
            <div className="item">
                <a href="#!">
                    <img src={projet1} alt="Project"/>
                </a>
                <a href="#" className="btn-light">
                    <i className="fas fa-eye"></i> Orzale Sport
                </a>
                <a href="#" className="btn-dark">
                    <i className="fab fa-github"></i> Github
                </a>
            </div>
            <div className="item">
                <a href="#!">
                    <img src={projet1} alt="Project"/>
                </a>
                <a href="#" className="btn-light">
                    <i className="fas fa-eye"></i>Project
                </a>
                <a href="#" className="btn-dark">
                    <i className="fab fa-github"></i>Github
                </a>
            </div>
            <div className="item">
                <a href="#!">
                    <img src={projet1} alt="Project"/>
                </a>
                <a href="#" className="btn-light">
                    <i className="fas fa-eye"></i>Project
                </a>
                <a href="#" className="btn-dark">
                    <i className="fab fa-github"></i>Github
                </a>
            </div>
        </div>
    </main>
    <Footer/>
    </Layout>
  )

export default ProjectsPage
