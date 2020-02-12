import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Socials from "../components/socials"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <main id="home">
            <h1 className="lg-heading">
                Florian <span className="text-secondary">Dupuis</span>
            </h1>
            <h2 className="sm-heading">
                Web Développeur Full Stack, Designer & Entrepreneur
            </h2>
            <Socials />
        </main>
  </Layout>
)

export default IndexPage
