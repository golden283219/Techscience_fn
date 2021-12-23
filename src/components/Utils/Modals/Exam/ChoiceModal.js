import React from 'react';
import {
  MDBModal,
  MDBModalBody,
} from 'mdbreact';
import ModalHeader from '../ModalHeader'
import ChoiceForm from '../../Forms/Exam/ChoiceForm'

export default ({ isOpen, close, row, questionId }) => {
  return (
      <MDBModal isOpen={ isOpen } className="mt-5 pt-5">
          <MDBModalBody>
              <ModalHeader icon="check-circle" title="Please specify data" close={ close } />
              <ChoiceForm row={ row } questionId={ questionId } />
          </MDBModalBody>
      </MDBModal>
  );
}