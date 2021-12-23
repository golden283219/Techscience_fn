import React, { Component } from 'react';
import {
  MDBModal,
  MDBModalBody,
} from 'mdbreact';
import ModalHeader from '../ModalHeader'
import AccountForm from '../../Forms/Account/AccountForm'



const AccountModal = ({ isOpen, toggle, row, close }) => {
  return (
    <MDBModal isOpen={isOpen} toggle={toggle} className="mt-5 pt-5">
      <MDBModalBody>
        <ModalHeader icon="user-alt" title="Please specify data" close={ close }/>
        <AccountForm row={row} />
      </MDBModalBody>
    </MDBModal>
  );
}

export default AccountModal;