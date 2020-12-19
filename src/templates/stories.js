// import React from "react"
// import { graphql } from 'gatsby'
// import SEO from "../components/seo"
// import { motion } from "framer-motion"
// // import { HTMLContent } from "../components/content"
// // import Img from "gatsby-image"

// const duration = 0.35

// const container = {
//   visible: {
//     transition: {
//       when: "beforeChildren",
//       staggerChildren: 0.2,
//       delayChildren: duration,
//     },
//   },
// }
// const item = {
//   hidden: { y: 20, opacity: 0 },
//   visible: {
//     y: 0,
//     opacity: 1,
//   },
// }

// const StoriesPage = ({ data }) => {
//   const post = data.markdownRemark

//   return (
//     <>
//       <SEO title="Stories" />
//       <motion.section
//         variants={container}
//         initial="hidden"
//         animate="visible"
//         className=""
//       >
//         <motion.div className="container p-4" variants={item} transition="easeInOut">
          
//           Story

//         </motion.div>

//       </motion.section>
//     </>
//   )
// }

// export default StoriesPage

// export const StoriesPageQuery = graphql`
//   query StoriesPage($id: String!) {
//     allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "stories"}}}) {
//       frontmatter {
//         name
//       }
//     }
//   }
// `
