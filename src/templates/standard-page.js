import React from "react"
import { graphql } from 'gatsby'
import SEO from "../components/seo"
import { motion } from "framer-motion"
import { HTMLContent } from "../components/content"
import Img from "gatsby-image"

const duration = 0.35

const container = {
  visible: {
    transition: {
      when: "beforeChildren",
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

const StandardPage = ({ data }) => {
  const post = data.markdownRemark

  return (
    <>
      <SEO title="Home" />
      <motion.section
        variants={container}
        initial="hidden"
        animate="visible"
        className=""
      >
        <motion.div className="container p-4" variants={item} transition="easeInOut">
          
          <p className="m-0 text-gray-500 lowercase font-slab">Birmingham Parents Support Group</p>
          <HTMLContent className="text-2xl font-bold leading-tight text-black lowercase font-slab hero-primary lg:text-3xl xl:text-4xl" content={post.frontmatter.title} />

        </motion.div>

        <motion.div
          className="items-stretch p-4 lg:flex lg:flex-row"
          variants={item}
          transition="easeInOut"
        >
          
          <div className="relative flex flex-col w-full h-40 mb-8 lg:h-auto sm:h-56 md:h-64 lg:w-7/12 lg:mb-0">
           <div className="absolute top-0 left-0 z-10 hidden w-full h-full opacity-25 lg:block bg-gradient-to-bl from-pink-500"></div>
            <Img className="w-full h-full object-fit" fluid={post.frontmatter.image.childImageSharp.fluid} />
          </div>

          <HTMLContent className="z-10 bg-white lg:p-16 lg:shadow-lg content lg:w-7/12 lg:-ml-8 lg:mt-16 lg:mb-16 lg:h-auto body-copy" content={post.html} />
        </motion.div>
      </motion.section>
    </>
  )
}

export default StandardPage

export const StandardPageQuery = graphql`
  query StandardPage($id: String!) {
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
