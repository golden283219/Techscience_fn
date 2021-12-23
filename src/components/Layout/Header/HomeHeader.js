import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import UserDropDown from '../../Utils/Dropdowns/UserDropDown'
import logo from '../../../assets/images/logo.png'
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBContainer,
} from 'mdbreact';

const HomeHeader = () => {
  const role = useSelector(state => state.auth.role)
  const [ isOpen, setIsOpen ] = useState(false)
  const { location: { pathname } } = useHistory()

  const toggleCollapse = () => {
    setIsOpen(!isOpen)
  }

  const renderMenu = () => {
    let dashboardName = 'Student dashboard'
    let dashboardUrl = 'student'

    if (!role)
      return (
          <>
              <MDBNavItem className="mr-3" active={ pathname === '/sign_in' }>
                  <MDBNavLink to="/sign_in">Sign in</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem className="mr-3" active={ pathname === '/sign_up' }>
                  <MDBNavLink to="/sign_up">Sign up</MDBNavLink>
              </MDBNavItem>
          </>
      )

    switch (Number(role)) {
      case 1:
        dashboardName = 'System Admin'
        dashboardUrl = '/admin'
        break;

      case 2:
        dashboardName = 'Exam Admin'
        dashboardUrl = '/exam'
        break;

      case 3:
        dashboardName = 'Student Dashboard'
        dashboardUrl = '/student'
        break;

      default:
        break;
    }

    return (
        <>
            <MDBNavItem className="mr-3">
                <MDBNavLink className="waves-effect waves-light" to={ dashboardUrl }>
                    {dashboardName}
                </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
                <UserDropDown />
            </MDBNavItem>
        </>
    )
  }

  return (
      <MDBNavbar color="bg-info" dark expand="md" className="header-nav" scrolling transparent>
          <MDBContainer>
              <MDBNavbarBrand>
                  <img className="logo-image" src={ logo } alt="techscience online logo" />
                  {/* <strong className="white-text">TechScienceOnline</strong> */}
              </MDBNavbarBrand>
              <MDBNavbarToggler onClick={ toggleCollapse } />
              <MDBCollapse id="navbarCollapse3" isOpen={ isOpen } navbar>
                  <MDBNavbarNav right>
                      <MDBNavItem className="mr-3" active={ pathname === '/' }>
                          <MDBNavLink to="/">Home</MDBNavLink>
                      </MDBNavItem>
                      {renderMenu()}
                  </MDBNavbarNav>
              </MDBCollapse>
          </MDBContainer>
      </MDBNavbar>
  )
}

export default HomeHeader;