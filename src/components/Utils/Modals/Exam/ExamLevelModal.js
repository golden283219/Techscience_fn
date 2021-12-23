import React from 'react';
import {
  MDBModal,
  MDBModalBody,
} from 'mdbreact';
import ModalHeader from '../ModalHeader'
import ExamLevelForm from '../../Forms/Exam/ExamLevelForm'

export default ({ isOpen, close, row }) => {
  return (
      <MDBModal isOpen={ isOpen } className="mt-5 pt-5">
          <MDBModalBody>
              <ModalHeader icon="stream" title="Please specify data"  close={ close } />
              <ExamLevelForm row={ row } />
          </MDBModalBody>
      </MDBModal>
  );
}