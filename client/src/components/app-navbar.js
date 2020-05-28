import { useSelector } from 'react-redux'
import React, { useState } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container,
} from 'reactstrap'
import RegisterModal from './auth/register-modal'
import LoginModal from './auth/login-modal'
import Logout from './auth/logout'

function AppNavbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { user, isAuthenticated } = useSelector((state) => state.auth)

  const authLinks = (
    <>
      <NavItem>
        <span className="navbar-text mr-3">
          <strong>{user ? `Welcome ${user.name}` : ''}</strong>
        </span>
      </NavItem>
      <NavItem>
        <Logout />
      </NavItem>
    </>
  )

  const guestLinks = (
    <>
      <NavItem>
        <RegisterModal />
      </NavItem>
      <NavItem>
        <LoginModal />
      </NavItem>
    </>
  )

  return (
    <>
      <Navbar color="dark" dark expand="sm" className="mb-5">
        <Container>
          <NavbarBrand href="/">Score</NavbarBrand>
          <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <Nav className="ml-auto" navbar>
                {isAuthenticated ? authLinks : guestLinks}
              </Nav>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default AppNavbar
