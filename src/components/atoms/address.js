import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FaMapPin } from "react-icons/fa"

const Address = ( {className} ) => {
  const data = useStaticQuery(graphql`
    query SiteAddressQuery {
      site {
        siteMetadata {
          address
        }
      }
    }
  `)
  return (
    <>
      <FaMapPin className={className} /> {data.site.siteMetadata.address}
    </>
  )
}

export default Address
