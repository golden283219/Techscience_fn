import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import UserDropDown from '../../Utils/Dropdowns/UserDropDown';
import logo from '../../../assets/images/logo.png';
import { MDBCollapse, MDBContainer, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBNavItem, MDBNavLink } from 'mdbreact';

const DashboardHeader = () => {
	const { location: { pathname } } = useHistory();
	const role = useSelector(state => state.auth.role);
	const [ isOpen, setIsOpen ] = useState(false);

	const toggleCollapse = () => {
		setIsOpen(!isOpen);
	};

	const goTechscratch = () => {
		window.open(`/assets/techscratch`, '_blank');
		return;
	};

	const renderMenu = () => {
		let dashboardMenu = '';

		switch (Number(role)) {
			case 1:
				dashboardMenu = (
    <>
        <MDBNavItem className="mr-3" active={ pathname === '/admin' }>
            <MDBNavLink className="waves-effect waves-light" to="/admin">
                Account
            </MDBNavLink>
        </MDBNavItem>
        <MDBNavItem className="mr-3" active={ pathname === '/users' }>
            <MDBNavLink className="waves-effect waves-light" to="/users">
                User
            </MDBNavLink>
        </MDBNavItem>
        <MDBNavItem className="mr-3" active={ pathname === '/exam' }>
            <MDBNavLink className="waves-effect waves-light" to="/exam">
                Exam
            </MDBNavLink>
        </MDBNavItem>
        <MDBNavItem className="mr-3" active={ pathname === '/result' }>
            <MDBNavLink className="waves-effect waves-light" to="/result">
                Exam Result
            </MDBNavLink>
        </MDBNavItem>
        <MDBNavItem className="mr-3" active={ pathname === '/preschool' }>
            <MDBNavLink className="waves-effect waves-light" to="/preschool">
                Preschool
            </MDBNavLink>
        </MDBNavItem>
    </>
				);
				break;

			case 2:
				dashboardMenu = (
    <>
        <MDBNavItem className="mr-3" active={ pathname === '/users' }>
            <MDBNavLink className="waves-effect waves-light" to="/users">
                User
            </MDBNavLink>
        </MDBNavItem>
        <MDBNavItem className="mr-3" active={ pathname === '/exam' }>
            <MDBNavLink className="waves-effect waves-light" to="/exam">
                Exam
            </MDBNavLink>
        </MDBNavItem>
        <MDBNavItem className="mr-3" active={ pathname === '/result' }>
            <MDBNavLink className="waves-effect waves-light" to="/result">
                Exam Result
            </MDBNavLink>
        </MDBNavItem>
        <MDBNavItem className="mr-3" active={ pathname === '/preschool' }>
            <MDBNavLink className="waves-effect waves-light" to="/preschool">
                Preschool
            </MDBNavLink>
        </MDBNavItem>
    </>
				);
				break;

			case 3:
				dashboardMenu = (
    <>
        <MDBNavItem className="mr-3" active={ pathname === '/student' }>
            <MDBNavLink className="waves-effect waves-light" to="/student">
                My Exam
            </MDBNavLink>
        </MDBNavItem>
    </>
				);
				break;

			default:
				break;
		}

		return dashboardMenu;
	};

	return (
    <MDBNavbar color="bg-info" dark expand="md" className="" scrolling>
        <MDBContainer>
            <MDBNavbarBrand>
                <img className="logo-image" src={ logo } alt="techscience online logo" />
            </MDBNavbarBrand>
            <MDBNavbarToggler onClick={ toggleCollapse } />
            <MDBCollapse id="navbarCollapse3" isOpen={ isOpen } navbar>
                <MDBNavbarNav right>
                    <MDBNavItem className="mr-3" active={ pathname === '/' }>
                        <MDBNavLink to="/">Home</MDBNavLink>
                    </MDBNavItem>
                    {renderMenu()}
                    <MDBNavItem className="mr-3" active={ pathname === '/file_sharing' }>
                        <MDBNavLink className="waves-effect waves-light" to="/file_sharing">
                            File Sharing
                        </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem className="mr-3" active={ pathname === '/tech_scratch' }>
                        <MDBNavLink className="waves-effect waves-light" to="#" onClick={ goTechscratch }>
                            Tech scratch
                        </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem className="mr-3" active={ pathname === '/learning' }>
                        <MDBNavLink className="waves-effect waves-light" to="/learning">
                            Learning
                        </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                        <UserDropDown />
                    </MDBNavItem>
                </MDBNavbarNav>
            </MDBCollapse>
        </MDBContainer>
    </MDBNavbar>
	);
};

export default DashboardHeader;