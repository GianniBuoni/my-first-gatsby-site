import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { GatsbyImage } from 'gatsby-plugin-image'

const BlogPage = ({data}) => {
  return (
    <Layout pageTitle="My Blog Posts">
      {
        data.allMdx.nodes.map(node => (
          <grid key={node.id}>
            <Link to={`/blog/${node.frontmatter.slug}`}>
              <GatsbyImage 
                image={node.frontmatter.heroimage.childImageSharp.gatsbyImageData}
                alt=""
              />
            </Link>
            <p>Posted: {node.frontmatter.date}</p>
          </grid>
        ))
      }
    </Layout>
  )
}

export const query = graphql`
query {
  allMdx(sort: {frontmatter: {date: DESC}}) {
    nodes {
      frontmatter {
        title
        date(formatString: "D MMMM, yyyy")
        slug
        heroimage {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      id
    }
  }
}`

export const Head = () => <Seo title="My Blog Posts" />
export default BlogPage