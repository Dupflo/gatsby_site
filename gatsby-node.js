const path = require("path")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const postTemplate = path.resolve("src/templates/blog-post.js")
  const projectTemplate = path.resolve("src/templates/project.js")

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            html
            id
            frontmatter {
              path
              title
              date
              author
            }
          }
        }
      }

      allProjectsJson {
        edges {
          node {
            slug
          }
        }
      }
    }
  `).then(res => {
    if (res.errors) {
      return Promise.reject(res.errors)
    }
    res.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: postTemplate,
      })
    })

    res.data.allProjectsJson.edges.forEach(({ node: { slug } }) => {
      createPage({
        path: `/${slug}/`,
        component: projectTemplate,
        context: { slug },
      })
    })
  })
}

// exports.createPages = async ({ actions }) => {
//   const { createPage } = actions
//   createPage({
//     path: `/${slug}/`,
//     component: projectTemplate,
//     context: { slug },
//     defer: true,
//   })
// }
