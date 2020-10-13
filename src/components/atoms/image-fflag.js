import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Address = ({ className }) => {
  const data = useStaticQuery(graphql`
    query FFLAGQuery {
      imageSharp(id: { eq: "bd82ac7a-8012-5674-a33e-2cf67a293fcb" }) {
        fixed(height: 54, width: 274) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  `)
  return (
    <>
      <Img className={className + " h-10 w-48"} fluid={data.imageSharp.fixed} />
    </>
  )
}

export default Address
