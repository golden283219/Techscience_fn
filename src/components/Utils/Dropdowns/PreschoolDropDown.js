import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  MDBIcon,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from 'mdbreact';
import { _singOut } from '../../../redux/action/authAction';

const PreshoolDropDown = () => {
  const history = useHistory()

  return (
      <MDBDropdown>
          <MDBDropdownToggle nav caret color='info'>
              <MDBIcon icon="user" />
          </MDBDropdownToggle>
          <MDBDropdownMenu color='info'>
              <MDBDropdownItem onClick={ _singOut }>
                  Sign out
              </MDBDropdownItem>
              <MDBDropdownItem onClick={ () => history.push('/change_password') }>
                  Change Password
              </MDBDropdownItem>
          </MDBDropdownMenu>
      </MDBDropdown>
  )
}

export default PreshoolDropDown;