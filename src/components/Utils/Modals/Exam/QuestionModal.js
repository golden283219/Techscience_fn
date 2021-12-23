import React from 'react';
import {
  MDBModal,
  MDBModalBody,
} from 'mdbreact';
import ModalHeader from '../ModalHeader'
import QuestionForm from '../../Forms/Exam/QuestionForm'

export default ({ isOpen, close, row, examId }) => {
  return (
      <MDBModal isOpen={ isOpen } className="mt-5 pt-5">
          <MDBModalBody>
              <ModalHeader icon="graduation-gap" title="Please specify data"  close={ close } />
              <QuestionForm row={ row } examId={ examId } />
          </MDBModalBody>
      </MDBModal>
  );
}