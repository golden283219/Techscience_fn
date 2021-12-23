import React from 'react';
import ModalHeader from '../ModalHeader'
import RoleForm from '../../Forms/User/RoleForm'
import {
  MDBModal,
  MDBModalBody,
} from 'mdbreact';

export default ({ isOpen, close, row }) => {
  return (
      <MDBModal isOpen={ isOpen } className="mt-5 pt-5">
          <MDBModalBody>
              <ModalHeader icon="user-shield" title="Please specify data" close={ close } />
              <RoleForm row={ row } />
          </MDBModalBody>
      </MDBModal>
  );
}