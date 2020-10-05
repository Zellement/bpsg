import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { MdLocalPhone } from "react-icons/md"

const Telephone = ( {className} ) => {
  const data = useStaticQuery(graphql`
    query SiteTelephoneQuery {
      site {
        siteMetadata {
          telephone
        }
      }
    }
  `)
  return (
    <a className={className} href={"tel:" + data.site.siteMetadata.telephone}>
      <MdLocalPhone className="inline-block -mt-px" /> {data.site.siteMetadata.telephone}
    </a>
  )
}

export default Telephone
