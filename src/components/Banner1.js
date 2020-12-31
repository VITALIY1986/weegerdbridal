import React from 'react'
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
const Banner = (props) => {
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
      const soc = data.contentfulHero
      return(
    <section id="banner_logo" className="major" >
        <Img
         fluid={soc.heroImg.fluid}
         />
        <div className="inner">
            <header className="major">
                <h1>Свадебные пплатья Киев</h1>
                 </header>
            <div className="content">
                <p>A responsive site template designed by HTML5 UP<br />
                and released under the Creative Commons.</p>
                <ul className="actions">
                    <li><a href="#one" className="button next scrolly">Get Started</a></li>
                </ul>
            </div>
        </div>
    </section>
      )
}

export default Banner





