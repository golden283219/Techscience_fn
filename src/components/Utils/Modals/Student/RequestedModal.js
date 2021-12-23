import React from 'react';
import ModalHeader from '../ModalHeader'
import RequestedForm from '../../Forms/Student/RequestedForm'
import {
  MDBModal,
  MDBModalBody,
} from 'mdbreact';

export default ({ isOpen, close }) => {
  return (
      <MDBModal isOpen={ isOpen } className="mt-5 pt-5">
          <MDBModalBody>
              <ModalHeader icon="book-reader" title="Please Select Exam to Request" close={ close } />
              <RequestedForm />
          </MDBModalBody>
      </MDBModal>
  );
}