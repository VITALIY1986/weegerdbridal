import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Img from "gatsby-image"
const Rer = () => {
  const data = useStaticQuery(graphql`{
  
    contentfulHero {
      heroImg {
        fluid{
          ...GatsbyContentfulFluid
        }
      }
    }  
}
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
 
  const soc = data.contentfulHero


  return (
    <div className="bio">
                     <section>
                     <Img
         fluid={soc.heroImg.fluid}
         />
       
                </section>
    </div>
  )
}


export default Rer