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
      <SEO title="Киев" />

      <Bo />
      <div class="containerCatalog">
      <ul class="shop "style={{ listStyle: `none` }}>
        {posts.map(({node}) => {
          const title = node.title || node.slug

          return (
            <li key={node.slug}>
            
                <figure className="dressCatalog">
                <Img fluid={node.catalogImg.fluid}/>
                </figure>
              
                 <p>{node.title}</p> 
             
               
               
         
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