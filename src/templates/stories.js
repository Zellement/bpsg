import React from "react"
import { graphql, Link } from 'gatsby'
import SEO from "../components/seo"
import { motion } from "framer-motion"
import { HTMLContent } from "../components/content"
import { VscQuote } from "react-icons/vsc"
import { FiChevronLeft } from "react-icons/fi"

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

const SingleStoriesPage = ({ data }) => {
  const post = data.markdownRemark

  return (
    <>
      <SEO title="Stories" />
      <motion.section
        variants={container}
        initial="hidden"
        animate="visible"
        className=""
      >
        <motion.div className="container p-4" variants={item} transition="easeInOut">

          <div className="relative z-10 max-w-screen-md pt-16 mx-auto bg-white lg:p-16 lg:shadow-lg content lg:w-10/12 lg:mt-16 lg:mb-16 lg:h-auto">
          
            <h1>{post.frontmatter.name}</h1>

            <VscQuote className="absolute top-0 left-0 hidden mb-8 -ml-4 text-4xl text-gray-300 md:-mt-4 lg:block" />
            <HTMLContent content={post.html} className="body-copy" />
            
            <Link
              className="block inline-block p-2 mt-8 text-xs text-gray-600 border border-gray-400 hover:bg-pink-100 focus:bg-pink-100"
              to="/stories/"
            >
              <FiChevronLeft className="inline -mt-1" /> Back to Stories
            </Link>

          </div>

        </motion.div>

      </motion.section>
    </>
  )
}

export default SingleStoriesPage

export const SingleStoriesPageQuery = graphql`
  query SingleStoriesPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        name
      }
    }
  }
`
