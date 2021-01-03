import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Bo from "../components/rer"
import Layout from "../components/layoutq"
import SEO from "../components/seo"

class BlogIndex extends React.Component {
 render(){
   const {data} = this.props
  const siteTitle = data.site.siteMetadata.title 
  const posts = data. allContentfulCatalogImg.edges
 
 

  return (
    <Layout location={this.props.location} title={siteTitle}>
      <SEO title="All posts" />

      <Bo />
      <div class="container">
      <ul class="shop "style={{ listStyle: `none` }}>
        {posts.map(({node}) => {
          const title = node.title || node.slug

          return (
            <li key={node.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                <section>
                <Img fluid={node. catalogImg.fluid}/>
                </section>
                  
                  
                </header>
               
               
              </article>
            </li>
          )
        })}
      </ul>
      </div>
    </Layout>
  )
}
}
export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    
    allContentfulCatalogImg {
      edges {
        node {
         
          title
          subtitle
          slug
          author
          catalogImg{
            fluid{
              ...GatsbyContentfulFluid
            }
          }
         
        }
      }
    } 
  }
`