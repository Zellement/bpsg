import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import Email from "../components/atoms/email"
import Telephone from "../components/atoms/telephone"
// import { motion } from "framer-motion"
import Nav from "../components/nav"
import Logo from "../components/logo"

const Header = () => (
  <header className="text-gray-600 md:pt-16">
    <div className="absolute top-0 left-0 right-0 hidden w-full bg-gray-100 md:block">
      <div className="container flex flex-row justify-end p-4 space-x-4 lg:space-x-8 xl:space-x-12">
        <p className="font-bold">
          We're <span className="text-pink-500">here to help</span>.
        </p>
        <p className="">
          <Email className="hover:text-pink-500" />
        </p>
        <p className="font-bold">
          <Telephone className="hover:text-pink-500" />
        </p>
      </div>
    </div>

    <div className="container flex-row p-4 md:flex">
      <div className="flex flex-wrap items-center mb-4">
        <Link
          className="block inline-block text-lg font-bold md:text-xl"
          to="/"
        >
          <Logo />
        </Link>
      </div>

      <Nav />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
