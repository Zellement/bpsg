import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
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

const IndexPage = ({ data }) => {
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
          className="container flex flex-col p-4 md:flex-row"
          variants={item}
          transition="easeInOut"
        >
          <div className="flex flex-col justify-center md:w-5/12">
            <p className="m-0 text-gray-500 lowercase font-slab">
              Birmingham Parents Support Group
            </p>
            <HTMLContent
              className="text-2xl font-bold leading-tight text-black lowercase font-slab hero-primary lg:text-3xl"
              content={post.frontmatter.title}
            />
          </div>

          <div className="flex flex-col w-full h-40 mb-8 box-after--pink-500 box-after--pink-500--4 lg:h-auto sm:h-56 md:h-64 md:w-7/12 md:mb-0">
            <Img
              className="w-full h-full object-fit"
              fluid={post.frontmatter.image.childImageSharp.fluid}
            />
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col p-4 my-6 space-y-4 lg:flex-row lg:space-y-0 lg:space-x-2"
          variants={item}
          transition="easeInOut"
        >
          <div className="relative lg:flex-1">
            <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-bl from-white -z-10"></div>
            <div class="bg-red-500 w-1/2 h-full absolute top-0 left-0 -z-20 ">
              <Img
                className="object-cover w-full h-full"
                fluid={data.imageOne.fluid}
              />
            </div>
            <div className="absolute bottom-0 left-0 w-32 h-32 -mb-2 -ml-2 bg-pink-500 -z-30 lg:-mb-4 lg:-ml-4"></div>

            <div className="flex flex-col w-3/5 p-6 ml-auto">
              <h2 className="text-lg text-pink-500 lowercase md:text-xl lg:text-2xl">
                My son / daughter has just “come out”
              </h2>

              <div className="w-8/12 ml-auto">
                <p className="">
                  The most important thing to remember is that your son /
                  daughter has not changed.
                </p>

                <Link
                  className="self-end inline-block p-3 mt-4 ml-auto text-white bg-black hover:bg-pink-500"
                  to="my-son-daugher-has-just-come-out"
                >
                  Read more &raquo;
                </Link>
              </div>
            </div>
          </div>
          <div className="relative lg:flex-1">
            <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-bl from-white -z-10"></div>
            <div className="absolute top-0 left-0 w-1/2 h-full bg-red-500 -z-20">
              <Img
                className="object-cover w-full h-full"
                fluid={data.imageTwo.fluid}
              />
            </div>
            <div className="absolute bottom-0 left-0 w-32 h-32 -mb-2 -ml-2 bg-pink-500 -z-30 lg:-mb-4 lg:-ml-4"></div>

            <div className="flex flex-col w-3/5 p-6 ml-auto">
              <h2 className="text-lg text-pink-500 lowercase md:text-xl lg:text-2xl">
                I think my son / daughter is gay
              </h2>

              <div className="w-8/12 ml-auto">
                <p className="">
                  Try not to make him/her feel awkward. Don't be upset that they
                  haven't told you themselves.
                </p>

                <Link
                  className="self-end inline-block p-3 mt-4 ml-auto text-white bg-black hover:bg-pink-500"
                  to="i-think-my-son-daughter-is-gay"
                >
                  Read more &raquo;
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col items-stretch p-4 lg:flex-row"
          variants={item}
          transition="easeInOut"
        >
          <div className="flex flex-col order-last w-full h-40 mb-8 lg:h-auto sm:h-56 md:h-64 lg:w-7/12 lg:mb-0 lg:order-first">
            <Img
              className="w-full h-full object-fit"
              fluid={post.frontmatter.bodyimage.childImageSharp.fluid}
            />
          </div>

          <div className="z-10 bg-white lg:w-7/12 lg:shadow-lg lg:p-16 lg:-ml-8 lg:mt-16 lg:mb-16 lg:h-auto">
            <h1 className="lowercase tex-gray-500">
              Welcome to{" "}
              <span className="block text-pink-500">
                Birmingham Parents Support Group
              </span>
            </h1>

            <HTMLContent className=" content" content={post.html} />
          </div>
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
            fluid(quality: 90, maxHeight: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        bodyimage {
          childImageSharp {
            fluid(quality: 90, maxHeight: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    imageOne: imageSharp(fluid: {originalName: {eq: "priscilla-du-preez-9vhpckymsh0-unsplash.jpg"}}) {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
    imageTwo: imageSharp(fluid: {originalName: {eq: "umit-bulut-qbtc7zwjb64-unsplash.jpg"}}) {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
`
