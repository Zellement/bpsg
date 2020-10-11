import React from "react"
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
        className="container"
      >
        <motion.div className="p-4" variants={item} transition="easeInOut">
          
          <p className="m-0 text-gray-500 lowercase font-slab">Birmingham Parents Support Sroup</p>
          <HTMLContent className="text-2xl font-bold leading-tight text-black lowercase font-slab hero-primary" content={post.frontmatter.title} />
          
          <Img className="mt-8" fluid={post.frontmatter.image.childImageSharp.fluid} />

        </motion.div>

        <motion.div
          className="p-8 content"
          variants={item}
          transition="easeInOut"
        >
          <HTMLContent content={post.html} />
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
            fluid(maxWidth: 1000, maxHeight: 330) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
