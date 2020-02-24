import React, {Component} from "react"
import computer, { ReactComponent as ReactLogo } from "../svg/computer.svg"
import Layout from "../components/layout"
import Socials from "../components/socials"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Accueil" />
    <main id="home">
    <img src={computer} className="computerLogo"/>
            <h1 className="lg-heading">
                Florian <span className="text-secondary">Dupuis</span>
            </h1>
            <h2 className="sm-heading">
                Freelance Développeur Web Full Stack, Designer & Entrepreneur
            </h2>
            <Socials />
        </main>
  </Layout>
)

export default IndexPage
