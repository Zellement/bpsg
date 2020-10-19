import React from "react"
import { graphql } from 'gatsby'
import SEO from "../components/seo"
import { motion } from 'framer-motion'
import { HTMLContent } from "../components/content"
import Img from "gatsby-image"

const duration = 0.35

const container = {
  visible: {
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.2,
      delayChildren: duration,
    },
  },
}
const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}

const IndexPage = ( {data} ) => {
  const post = data.markdownRemark
  return (
    <>
      <SEO title="Home" />
      <motion.section
        variants={container}
        initial="hidden" 
        animate="visible"
        className="container"
      >
        <motion.div 
          className="container flex flex-col md:flex-row"
          variants={item}
          transition="easeInOut"
        >

          <div className="flex flex-col justify-center p-4 md:w-5/12">
            <p className="m-0 text-gray-500 lowercase font-slab">Birmingham Parents Support Group</p>
            <HTMLContent className="text-2xl font-bold leading-tight text-black lowercase font-slab hero-primary lg:text-3xl" content={post.frontmatter.title} />
          </div>
          
          <div className="flex flex-col w-full h-40 mb-8 lg:h-auto sm:h-56 md:h-64 md:w-7/12 md:mb-0">
            <Img className="w-full h-full object-fit" fluid={post.frontmatter.image.childImageSharp.fluid} />
          </div>

        </motion.div>

        <motion.div 
          className="content"
          variants={item}
          transition="easeInOut"
        >
          <hr className="block my-8" />
        </motion.div>

        <motion.div 
          className="content"
          variants={item}
          transition="easeInOut"
        >
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

          <h2>Lorem ipsum dolor sit amet</h2>
          
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </motion.div>
      </motion.section>
    </>
  )
}

export default IndexPage

export const IndexQuery = graphql`
  query IndexPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(quality: 90, maxHeight: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
