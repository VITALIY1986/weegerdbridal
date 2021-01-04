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
    <section id="bannerСatalog" className="major"  >
    <Img
     fluid={soc.heroImg.fluid}
     />
    <div className="inner">
        <header className="major">
            <h2>Свадебная коллекция "London"</h2>
             </header>
        <div className="content">
            <p>Непривзойденный стиль</p>
            
        </div>
    </div>
</section>
  )
}


export default Rer