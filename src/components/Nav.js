import React, { Component } from 'react'
import { Link } from 'gatsby'
import { Menu, X, Plus } from 'react-feather'

import Logo from './Logo'
import './Nav.css'

export default class Nav extends Component {
  state = {
    active: false,
    dropdownActive: false
  }

  // Nav hamburger
  handleMenuToggle = () => this.setState({ active: !this.state.active })
  handleLinkClick = () => this.state.active && this.handleMenuToggle()

  // Nav dropdown
  handleDropdownToggle = () =>
    this.setState({ dropdownActive: !this.state.dropdownActive })
  handleDropdownClick = () =>
    this.state.dropdownActive && this.handleDropdownToggle()

  render() {
    const { active, dropdownActive } = this.state

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
            <div className="NavLink has-children relative">
              <div
                className={`${dropdownActive ? 'dropdown-active' : ''}`}
                onClick={this.handleDropdownToggle}
              >
                Products
                <ul className="sub-menu">
                  <li>
                    <Link to="/classic/">Classic Series</Link>
                  </li>
                  <li>
                    <Link to="/evolution/">Evolution Series</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="NavLink has-children relative">
              <div
                className={`${dropdownActive ? 'dropdown-active' : ''}`}
                onClick={this.handleDropdownToggle}
              >
                Distributors
                <ul className="sub-menu">
                  <li>
                    <Link to="/classic/">Classic Series</Link>
                  </li>
                  <li>
                    <Link to="/evolution/">Evolution Series</Link>
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
