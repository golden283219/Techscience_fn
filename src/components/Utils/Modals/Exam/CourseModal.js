import React from 'react';
import {
  MDBModal,
  MDBModalBody,
} from 'mdbreact';
import ModalHeader from '../ModalHeader'
import CourseForm from '../../Forms/Exam/CourseForm'

const CourseModal = ({ isOpen, close, row }) => {
  return (
      <MDBModal isOpen={ isOpen } className="mt-5 pt-5">
          <MDBModalBody>
              <ModalHeader icon="graduation-gap" title="Please specify data" close={ close } />
              <CourseForm row={ row } />
          </MDBModalBody>
      </MDBModal>
  );
}

export default CourseModal;