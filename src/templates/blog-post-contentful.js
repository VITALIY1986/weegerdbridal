import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"


class BlogPostContenfulTemplate extends React.Component {
  render(){
  const post = this.props.data.contentfulPost
  const siteTitle = this.props.data.site.siteMetadata.title 
  const { previous, next } = this.props.pageContext

  return (
    <Layout location={this.props.location} title ={siteTitle}>
     
      <Img fluid={post.image.fluid}/>
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline">{post.title}</h1>
         
        </header>
        
        <footer>
         
        </footer>
      </article>
      <nav className="blog-post-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.slug} rel="prev">
                ← {previous.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.slug} rel="next">
                {next.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}
}
export default BlogPostContenfulTemplate

export const pageQuery = graphql`
  query ContentfulBlogPostBySlug ( $slug: String!) {
 site{
   siteMetadata{
     title
    
   }
 }
 contentfulPost (slug: {eq:$slug}){
    title
    author
    subtitle
    image{
      fluid{
        ...GatsbyContentfulFluid
      }
    }
     }
    }
`
