import React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const PostPage = ({data, children}) => {
    const image = getImage(data.mdx.frontmatter.heroimage)
    return (
        <Layout pageTitle={data.mdx.frontmatter.title}>
            <p>{data.mdx.frontmatter.date}</p>
            <GatsbyImage image={image} alt=""/>
            <p>Image Credit:{" "}
                <a href={data.mdx.frontmatter.heroiamge_credit_link}>
                    {data.mdx.frontmatter.heroiamge_credit_text}
                </a>
            </p>
            {children}
        </Layout>
    )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        slug
        title
        date(formatString: "D MMMM, YYYY")
        heroiamge_credit_text
        heroiamge_credit_link
        heroimage {
            childImageSharp {
              gatsbyImageData
            }
        }
      }
      id
    }
  }
`

export const Head = ({data}) => <Seo title={data.mdx.frontmatter.title}/>
export default PostPage