import React from "react"
import Layout from "../components/layout"
import Footer from "../components/footer"
import Socials from "../components/socials"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Image from "gatsby-image"


export const query = graphql`
query {
    file(relativePath: { eq: "portrait.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 250, height: 250) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;


const AboutPage = ({ data }) => (
    <Layout>
    <SEO title="À propos" />
       <main>
        <h1 className="lg-heading">
            À propos de <span className="text-secondary">moi</span>
        </h1>
        <h2 className="sm-heading">
            Florian Dupuis, Freelance Développeur Web Full Stack, Digital Nomade & Co-fondateur d'Orzale Sport.
        </h2>
        <div className="about-info">
            <Image fixed={data.file.childImageSharp.fixed} alt="Florian Dupuis" className="bio-image" />
        <div className="bio">
            <h3 className="text-secondary">BIO</h3>
            <p>Je suis titulaire d'un Master of Business Administration aux Etats-Unis, d'un Bachelor Digital Media Design ainsi que d'un DUT Métiers du Multimédia et de l'Internet en France avant mon départ pour l'étranger en programme sport-étude.</p>
        </div>

        <div className="job job-1">
            <h3>HTML / CSS / JAVASCRIPT / PHP</h3>
            <h5>Développement Web sur mesure</h5>
            <p>Passionné par la création d'application Web. Le site sur lequel vous naviguez est d'ailleurs codé en ReactJS avec le générateur de site static Gatsby JS. Pour plus d'information je vous invite à naviguer sur la pags "Mes projets". Je développe également sous NodeJS et le framwork PHP Laravel</p>
        </div>

        <div className="job job-2">
            <h3>CMS Prestashop & CMS Wordpress</h3>
            <h5>E-Commerce / Site Vitrine / Site Dynamique</h5>
            <p>Je développe et maintiens des sites E-Commerce sous le Content Management System Prestashop. Je possède un licence DIVI pour le développement de sites Wordpress simples. Intégration web, développement sur-mesure, développement de modules et corrections de bugs.</p>
        </div>

        <div className="job job-3">
            <h3>Marketing Digital et Print</h3>
            <h5>Référecement SEO / Publicité en ligne / Cartes de visites / Flyers</h5>
            <p>Je possède des compétences en design graphique et la mise en page de documents imprimables sous des logiciels de PAO tels que Adobe Photoshop, Illustrator et InDesign. Ces compétences me sont également utiles dans l'élaboration des produits commercialisés par ma société Orzale Sport.  </p>
        </div>
        </div>
        <Socials />
    </main>
    <Footer />
    </Layout>
  )

export default AboutPage
