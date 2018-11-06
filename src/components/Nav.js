import React, { Component } from 'react'
import { Link } from 'gatsby'
import { Menu, X } from 'react-feather'

import Logo from './Logo'
import './Nav.css'

export default class Nav extends Component {
  state = {
    active: false
    // dropdownActive: false
  }

  // Nav hamburger
  handleMenuToggle = () => this.setState({ active: !this.state.active })
  handleLinkClick = () => this.state.active && this.handleMenuToggle()

  // Nav dropdown
  // handleDropdownToggle = () =>
  //   this.setState({ dropdownActive: !this.state.dropdownActive })
  // handleDropdownClick = () =>
  //   this.state.dropdownActive && this.handleDropdownToggle()

  handleMobileList = item => {
    this.setState({
      [`navList${item}`]: !this.state[`navList${item}`]
    })
  }

  render() {
    const { active } = this.state

    const NavLink = ({ className, children, ...props }) => (
      <Link
        {...props}
        className={`NavLink ${className || ''}`}
        onClick={this.handleLinkClick}
      >
        {children}
      </Link>
    )

    return (
      <nav className={`nav ${active ? 'nav-active' : ''}`}>
        <div className="wide">
          <Link to="/" onClick={this.handleLinkClick}>
            <Logo />
          </Link>
          <div className="nav-links">
            <NavLink to="/about/">About</NavLink>
            <div
              className={`NavLink has-children relative ${
                this.state['navListproducts'] ? 'dropdown-active' : ''
              }`}
            >
              <div onClick={() => this.handleMobileList('products')}>
                Products
                <ul className="sub-menu">
                  <li>
                    <Link to="/product-categories/classic-series/">
                      Classic Series
                    </Link>
                  </li>
                  <li>
                    <Link to="/product-categories/evolution-series/">
                      Evolution Series
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className={`NavLink has-children relative ${
                this.state['navListdistributors'] ? 'dropdown-active' : ''
              }`}
            >
              <div onClick={() => this.handleMobileList('distributors')}>
                Distributors
                <ul className="sub-menu">
                  <li>
                    <Link to="/distributors/classic/">Classic Series</Link>
                  </li>
                  <li>
                    <Link to="/distributors/evolution/">Evolution Series</Link>
                  </li>
                </ul>
              </div>
            </div>
            <NavLink to="/contact/">Contact</NavLink>
          </div>
          <button className="menu-button" onClick={this.handleMenuToggle}>
            {active ? <X /> : <Menu />}
          </button>
        </div>
      </nav>
    )
  }
}
