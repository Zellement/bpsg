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
    <a className="hover:text-pink-500" target="_blank" rel="noreferrer noopener" href="https://www.google.com/maps/place/Parish+Office+-+Oliver+Bird+Hall/@52.4107808,-1.7788307,17z/data=!3m1!4b1!4m5!3m4!1s0x4870b9dfeb993089:0xc5b1eafe2889db1b!8m2!3d52.4107775!4d-1.7766367">
      <FaMapPin className={className} /> {data.site.siteMetadata.address}
    </a>
  )
}

export default Address