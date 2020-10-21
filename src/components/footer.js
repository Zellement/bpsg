import React from "react"
import Email from "../components/atoms/email"
import Telephone from "../components/atoms/telephone"
import Address from "../components/atoms/address"
import FFLAG from "../components/atoms/image-fflag"

const Footer = () => (
  <div className="px-4 py-8 text-center text-gray-600 border-t border-gray-300">
    <div className="container">
      <p className="flex flex-col justify-center md:flex-row">
        <Email className="text-xs md:mr-4 hover:text-pink-500 sm:text-base" />
        <Telephone className="hover:text-pink-500" />
      </p>
      <p className="mt-4">
        <Address className="inline" />
      </p>
      <div className="mt-8">
        <FFLAG className="mx-auto" />
      </div>
      <div className="mt-8 text-sm opacity-85">
        Website by <a className="text-gray-700 hover:text-pink-500" href="https://www.zellement.com" target="_blank" rel="noreferrer noopener">Zellement</a>
      </div>
    </div>
  </div>
)

export default Footer
