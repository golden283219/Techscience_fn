import React from 'react';
import {
  MDBModal,
  MDBModalBody,
} from 'mdbreact';
import ModalHeader from '../ModalHeader'
import SubjectForm from '../../Forms/Exam/SubjectForm'

const SubjectModal = ({ isOpen, close, row }) => {
  return (
      <MDBModal isOpen={ isOpen } className="mt-5 pt-5">
          <MDBModalBody>
              <ModalHeader icon="graduation-gap" title="Please specify data"  close={ close } />
              <SubjectForm row={ row } />
          </MDBModalBody>
      </MDBModal>
  );
}

export default SubjectModal;