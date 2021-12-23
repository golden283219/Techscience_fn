import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { decode } from 'jsonwebtoken';
import ChooseLogoModal from '../Modals/Setting/ChooseLogoModal';
import { _singOut } from '../../../redux/action/authAction';
import { MDBDropdown, MDBDropdownItem, MDBDropdownMenu, MDBDropdownToggle, MDBIcon } from 'mdbreact';

const UserDropDown = () => {
	const history = useHistory();
	const [ isChoolseLogoMoalOpen, setIsChoolseLogoMoalOpen ] = useState(false);
	const userToken = useSelector(state => state.auth.token);
	const user = !!userToken ? decode(userToken) : undefined;

	return <>
    <MDBDropdown>
        <MDBDropdownToggle nav caret color='info'>
            {!user
					? <MDBIcon icon="user" />
					: <img
            alt="avatar"
						src={ `${ process.env.NODE_ENV === 'development' ? process.env.REACT_APP_DEV_IMAGE_URI : process.env.REACT_APP_PROD_IMAGE_URI }/${ process.env.REACT_APP_LOGO_IMAGE_FOLDER }/${ user.account.image }` }
						className="img-fluid rounded-circle img-fluid school-logo-image"
					/>
				}
        </MDBDropdownToggle>
        <MDBDropdownMenu color='info'>
            <MDBDropdownItem onClick={ _singOut }>
                Sign out
            </MDBDropdownItem>
            {!!user && user.id === user.account.userId && (
            <MDBDropdownItem onClick={ () => setIsChoolseLogoMoalOpen(true) }>
                Choose Logo
            </MDBDropdownItem>
				)}
            <MDBDropdownItem onClick={ () => history.push('/change_password') }>
                Change Password
            </MDBDropdownItem>
        </MDBDropdownMenu>
    </MDBDropdown>
    <ChooseLogoModal
			isOpen={ isChoolseLogoMoalOpen }
			close={ () => setIsChoolseLogoMoalOpen(false) }
		/>
	</>;
};

export default UserDropDown;