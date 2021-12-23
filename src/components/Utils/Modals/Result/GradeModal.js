import React from 'react';
import {
  MDBModal,
  MDBModalBody,
} from 'mdbreact';
import ModalHeader from '../ModalHeader'
import GradeStepper from '../../Miscells/GradeStepper'

export default ({ isOpen, handleClose, resultId }) => {
  return (
      <MDBModal 
      isOpen={ isOpen } 
      size="lg"
      className="mt-5 pt-5"
    >
          <MDBModalBody>
              <ModalHeader icon="vial" title='Grade Result' />
              <GradeStepper 
          resultId={ resultId } 
          closeModal={ handleClose }
        />
          </MDBModalBody>
      </MDBModal>
  );
}