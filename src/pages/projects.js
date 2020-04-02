import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import Footer from "../components/footer"
import ProjectPreview from "../components/project-preview"
import SEO from "../components/seo"

const ProjectsPage = () => {
  const data = useStaticQuery(graphql`
    {
      allProjectsJson {
        edges {
          node {
            title
            slug
            url
            projectType
            description
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  const projects = data.allProjectsJson.edges

  return (
    <Layout>
      <SEO title="Mes projets" />
      <main>
        <h1 className="lg-heading">
          Mes <span className="text-secondary">projets</span>
        </h1>
        <h2 className="sm-heading">
          Voici quelques uns de mes projets. Vous pouvez également visiter
          mon profil{" "}
          <a href="https://www.malt.fr/profile/dupuisflorian" target="_blank">
            {" "}
            Malt
          </a>{" "}
        </h2>
        <div className="projects">
          {projects.map(({ node: project }) => {
            const title = project.title
            const projectType = project.projectType
            const slug = project.slug
            const imageData = project.image.childImageSharp.fluid
            return (
              <ProjectPreview key={project.id} title={title} projectType={projectType} imageData={imageData} slug={slug} />
            )
          })}
        </div>
      </main>
      <Footer />
    </Layout>
  )
}

export default ProjectsPage
