import React from "react"
import { Link } from "gatsby"
import Footer from "../components/footer"
import Layout from "../components/layout"

export default function Template({ data }) {
  const post = data.markdownRemark

  return (
    <Layout>
      <main>
        <div>
          <Link to="/blog">Go Back</Link>
          <hr />
          <h1>{post.frontmatter.title}</h1>
          <h4>
            {" "}
            Posted by {post.frontmatter.author} on {post.frontmatter.date}
          </h4>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </main>
      <Footer />
    </Layout>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        author
        date
      }
    }
  }
`
