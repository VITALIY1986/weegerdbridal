


import React from "react"
import { useStaticQuery,Link, graphql } from "gatsby"
import Layout from './layoutq'
import Img from "gatsby-image"
const Rer = () => {
  const data = useStaticQuery(graphql`{
    
       
        
        allContentfulPost {
          edges {
            node {
             
              title
              subtitle
              slug
              author
              image{
                fluid{
                  ...GatsbyContentfulFluid
                }
              }
             
            }
          }
        } 
      
}
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
 
  
  
  
  const posts = data.allContentfulPost.edges

  return (


    <Layout >
     
     
   {/* <ol style={{ listStyle: `none` }}>
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
              <figure>
              <Img fluid={node.image.fluid}/>
              </figure>
                <h2>
                  <Link to={node.slug} itemProp="url">
                    <span itemProp="headline">{title}</span>
                  </Link>
                </h2>
                
              </header>
              <section>
                <p>{node.subtitle}</p>
              </section>
             
            </article>
          </li>
        )
      })}
    </ol>*/}
    <section className="wedContent">
        <div >
            <header >
                <h1>Свадебная платья в Киеве</h1>
            </header>
            <div >
                <p>Предлагаем вашему вниманию новая коллекция свадебных платьев "London"</p>
               
            </div>
        </div>
    </section>
  </Layout>
    
  )
}


export default Rer