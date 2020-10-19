import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Address = ({ className }) => {
  const data = useStaticQuery(graphql`
    query FFLAGQuery {
      imageSharp(fixed: {originalName: {eq: "fflag.png"}}) {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
  `)
  return (
    <>
      <Img className={className + " h-10 w-48"} fixed={data.imageSharp.fixed} />
    </>
  )
}

export default Address
