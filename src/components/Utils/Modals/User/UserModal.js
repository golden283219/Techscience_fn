import React from 'react';
import ModalHeader from '../ModalHeader'
import UserForm from '../../Forms/User/UserForm'
import {
  MDBModal,
  MDBModalBody,
} from 'mdbreact';

const UserModal = ({ isOpen, close, row }) => {
  return (
      <MDBModal isOpen={ isOpen } className="mt-5 pt-5">
          <MDBModalBody>
              <ModalHeader icon="user-alt" title="Please specify data" close={ close } />
              <UserForm row={ row } />
          </MDBModalBody>
      </MDBModal>
  );
}

export default UserModal;