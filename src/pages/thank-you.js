import React from "react"
import SEO from "../components/seo"
import { motion } from "framer-motion"

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

const ThankYouPage = () => {

  return (
    <>
      <SEO title="Contact Us" />
      <motion.section
        variants={container}
        initial="hidden"
        animate="visible"
        className=""
      >
        <motion.div
          className="container p-4"
          variants={item}
          transition="easeInOut"
        >
          <p className="m-0 text-gray-500 lowercase font-slab">
            Birmingham Parents Support Group
          </p>
          <h1>Thanks for reaching out</h1>
          
          <p>You've taken an amazing first step. We will be in touch with you soon!</p>
        </motion.div>

      </motion.section>
    </>
  )
}

export default ThankYouPage