import React from 'react';
import ModalHeader from '../ModalHeader'
import ChooseLogoForm from '../../Forms/Setting/ChooseLogoForm'
import {
  MDBModal,
  MDBModalBody,
} from 'mdbreact';

export default ({ isOpen, close }) => {
  return (
      <MDBModal isOpen={ isOpen } className="mt-5 pt-5">
          <MDBModalBody>
              <ModalHeader icon="school" title="Please Choose an Image" close={ close } />
              <ChooseLogoForm />
          </MDBModalBody>
      </MDBModal>
  );
}