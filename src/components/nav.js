import React from "react"
import { Link } from "gatsby"
// import { GoLinkExternal } from "react-icons/go"

const Nav = class extends React.Component {
  state = { showMenu: false }

  toggleMenu = () => {
    this.setState({
      showMenu: !this.state.showMenu,
    })
  }

  render() {
    const menuActive = this.state.showMenu ? "is-active" : ""
    const burgerActive = this.state.showMenu ? "is-active" : ""
    return (
      <nav className="md:flex md:content-end md:justify-end md:flex-col md:ml-auto">
        <div
          className={`navigation-wrapper md:h-full navigation-wrapper--${menuActive}`}
        >
          <ul className="md:bg-red md:flex md:w-full md:h-full md:flex-row md:justify-start md:items-stretch">
            <li>
              <Link
                className="flex flex-col justify-center navigation-wrapper__link md:h-full"
                onClick={this.toggleMenu}
                activeClassName="is-active"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="has-children">
              <Link
                className="flex flex-col justify-center navigation-wrapper__link md:h-full"
                onClick={this.toggleMenu}
                activeClassName="is-active"
                to="/accepting"
              >
                Accepting
              </Link>
              <ul className="subnav">
                <li>
                  <Link
                    className=""
                    onClick={this.toggleMenu}
                    activeClassName="is-active"
                    to="/accepting/i-think-my-son-daughter-is-gay"
                  >
                    I Think My Son / Daughter is Gay
                  </Link>
                </li>
                <li>
                  <Link
                    className=""
                    onClick={this.toggleMenu}
                    activeClassName="is-active"
                    to="/accepting/my-son-daugher-has-just-come-out"
                  >
                    My Son / Daughter Has Just Come Out
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                className="flex flex-col justify-center navigation-wrapper__link md:h-full"
                onClick={this.toggleMenu}
                activeClassName="is-active"
                to="/stories"
              >
                Stories
              </Link>
            </li>
            <li>
              <Link
                className="flex flex-col justify-center navigation-wrapper__link md:h-full"
                onClick={this.toggleMenu}
                activeClassName="is-active"
                to="/meetings"
              >
                Meetings
              </Link>
            </li>
            <li>
              <Link
                className="flex flex-col justify-center navigation-wrapper__link md:h-full"
                onClick={this.toggleMenu}
                activeClassName="is-active"
                to="/links"
              >
                Links
              </Link>
            </li>
            <li>
              <Link
                className="flex flex-col justify-center navigation-wrapper__link md:h-full"
                onClick={this.toggleMenu}
                activeClassName="is-active"
                to="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div
          aria-label="Navigation menu button"
          tabIndex={0}
          role="button"
          className={`${burgerActive} navigation-button`}
          onClick={this.toggleMenu}
          onKeyDown={this.toggleMenu}
        >
          <div className={`navigation-button__inside ${burgerActive}`}>
            <span className="left-0 navigation-button__lines navigation-button__line-1"></span>
            <span className="left-0 mt-2 navigation-button__lines navigation-button__line-2"></span>
            <span className="left-0 mt-4 navigation-button__lines navigation-button__line-3"></span>
            <span className="right-0 navigation-button__lines navigation-button__line-4"></span>
            <span className="right-0 mt-2 navigation-button__lines navigation-button__line-5"></span>
            <span className="right-0 mt-4 navigation-button__lines navigation-button__line-6"></span>
          </div>
        </div>
      </nav>
    )
  }
}

export default Nav
