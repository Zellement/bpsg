import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FaEnvelope } from "react-icons/fa"

const Email = ( {className} ) => {
  const data = useStaticQuery(graphql`
    query SiteEmailQuery {
      site {
        siteMetadata {
          email
        }
      }
    }
  `)
  return (
    <a className={className} href={"mailto:" + data.site.siteMetadata.email}>
      <FaEnvelope className="inline-block -mt-px" /> {data.site.siteMetadata.email}
    </a>
  )
}

export default Email
