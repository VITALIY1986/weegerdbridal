import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Img from "gatsby-image"
const Rer = () => {
  const data = useStaticQuery(graphql`{
    contentfulRichContent {
   
      content {
        childContentfulRichText {
          html
        }
      }
    }
   
}
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
 
  const soc = data.contentfulHero
  const doc = data.contentfulRichContent.content.childContentfulRichText

  return (
    <div className="contentAbout">
                     <section>
                    
        <div dangerouslySetInnerHTML={{__html:doc.html}}/>
                </section>
    </div>
  )
}


export default Rer