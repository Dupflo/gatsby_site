import React from "react"
import Layout from "../components/layout"
import Footer from "../components/footer"
import Socials from "../components/socials"
import portrait from "../images/portrait.jpg"

const AboutPage = () => (
    <Layout>
       <main>
        <h1 className="lg-heading">
            À propos de <span className="text-secondary">moi</span>
        </h1>
        <h2 className="sm-heading">
            Florian Dupuis, Freelance Développeur Web Full Stack, Digital Nomade & Co-fondateur d'Orzale Sport.
        </h2>
        <div className="about-info">
            <img src={portrait} alt="Florian Dupuis" className="bio-image"/>
        <div className="bio">
            <h3 className="text-secondary">BIO</h3>
            <p>Je suis titulaire d'un DUT Métiers du Multimédia et de l'Internet, d'un Bachelor Digital Media Design et d'un Master of Business Administration aux Etats-Unis.</p>
        </div>

        <div className="job job-1">
            <h3>HTML / CSS / JAVASCRIPT / PHP</h3>
            <h5>Développement Web sur mesure</h5>
            <p>Je suis passionné par la création d'application Web. Le site sur lequel vous navigué est d'ailleurs codé avec les frameworks React JS et Gatsby JS. Pour plus d'information je vous invite à naviguer sur la pags "Mes projets"</p>
        </div>

        <div className="job job-2">
            <h3>CMS Prestashop & CMS Wordpress</h3>
            <h5>E-Commerce / Site Vitrine / Site Dynamique</h5>
            <p>Je gère aujourd'hui plusieurs sites E-Commerce sous le Content Management System Prestashop. La majorité de mes missions sont de l'intégration web, la correction de bugs dans le code et le développement de module.</p>
        </div>

        <div className="job job-3">
            <h3>Marketing Digital et Print</h3>
            <h5>Référecement SEO / Publicité en ligne / Cartes de visites / Flyers</h5>
            <p>J'ai développé des compétences en design graphique et la mise en page de document imprimable avec des logiciels d'édition graphique tels que Adobe Photoshop, Illustrator et InDesign. Ces compétences me sont utile dans l'élaboration des produits commercialisés dans ma société Orzale Sport.  </p>
        </div>
        </div>
        <Socials />
    </main>
    <Footer />
    </Layout>
  )

export default AboutPage
