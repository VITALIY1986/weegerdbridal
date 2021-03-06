import React from 'react'
import { graphql } from "gatsby"

import Layout from '../components/layout'
import Banner from '../components/Banner'
import Banner1 from '../components/Banner1'
import Bo from '../components/shop'
import SEO from '../components/seo'
{/*import Img from "gatsby-image"*/}
{/* import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'*/}

class HomeIndex extends React.Component {
    render() {
        const {data} = this.props
     
      {/*  const posts = data.contentfulHero*/}
        const siteTitle = data.site.siteMetadata.title 
        return (
            <Layout location={this.props.location} title={siteTitle}>
                
                <SEO title="Свадебные платья Киев" />

                <Banner />
               {/* <Img fluid={posts.heroImg.fluid}/>*/}
                <section >  
                <Banner1 />
                
                <Bo/>
               <div></div>
                </section>
              {/*   <div id="main">
                    <section id="one" className="tiles">
                        <article style={{backgroundImage:`url(${pic01})`}}>
                            <header className="major">
                                <h3>Aliquam</h3>
                                <p>Ipsum dolor sit amet</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic02})`}}>
                            <header className="major">
                                <h3>Tempus</h3>
                                <p>feugiat amet tempus</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic03})`}}>
                            <header className="major">
                                <h3>Magna</h3>
                                <p>Lorem etiam nullam</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic04})`}}>
                            <header className="major">
                                <h3>Ipsum</h3>
                                <p>Nisl sed aliquam</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic05})`}}>
                            <header className="major">
                                <h3>Consequat</h3>
                                <p>Ipsum dolor sit amet</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic06})`}}>
                            <header className="major">
                                <h3>Etiam</h3>
                                <p>Feugiat amet tempus</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                    </section>
                    <section id="two">
                        <div className="inner">
                            <header className="major">
                                <h2>Massa libero</h2>
                            </header>
                            <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet pharetra et feugiat tempus.</p>
                            <ul className="actions">
                                <li><Link to="/landing" className="button next">Get Started</Link></li>
                            </ul>
                        </div>
                    </section>
                </div>
*/}
            </Layout>
        )
    }
}

export default HomeIndex
export const pageQuery = graphql`
  query {
    site {
        siteMetadata {
          title
        }
      }
    
    contentfulHero {
        heroImg {
          fluid{
            ...GatsbyContentfulFluid
          }
        }
      }
  }
`