import React from "react"
import Layout from "../components/layout"

const ContactPage = () => (
    <Layout>
        <main>
        <h1 className="lg-heading">
            Contactez-<span className="text-secondary">moi</span>
        </h1>
        <h2 className="sm-heading">
            Un projet ? Une mission ? Voici comment me contacter...
        </h2>
        <div className="boxes">
            <div>
                <span className="text-secondary">Email: </span>
                contact@dupuisweb.com
            </div>
             <div>
                 <span className="text-secondary">Téléphone: </span>
                 06.51.69.80.21
             </div>
              <div>
                  <span className="text-secondary">Adresse: </span>
                  Je suis actuellement en France à Châteaubriant (44) à proximité de Nantes. 
              </div>
         </div>
        </main>
    </Layout>
  )

export default ContactPage
