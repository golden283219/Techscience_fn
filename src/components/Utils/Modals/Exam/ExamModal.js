import React from 'react';
import {
  MDBModal,
  MDBModalBody,
} from 'mdbreact';
import ModalHeader from '../ModalHeader'
import ExamForm from '../../Forms/Exam/ExamForm'

const ExamModal = ({ isOpen, close, row }) => {
  return (
      <MDBModal isOpen={ isOpen } className="mt-5 pt-5">
          <MDBModalBody>
              <ModalHeader icon="graduation-gap" title="Please specify data"  close={ close } />
              <ExamForm row={ row } />
          </MDBModalBody>
      </MDBModal>
  );
}

export default ExamModal;