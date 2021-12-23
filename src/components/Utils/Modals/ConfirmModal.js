import React from 'react';
import {
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBRow,
  MDBCol
} from 'mdbreact';
import ModalHeader from './ModalHeader'

const ConfirmModal = ({ isOpen, toggle, onConfirm, title }) => {
  const modalTitle = !!title ? title : 'Really Delete This?'

  const handleConfirm = () => {
    onConfirm()
    return toggle()
  }

  return (
      <MDBModal isOpen={ isOpen } toggle={ toggle } className="mt-5 pt-5">
          <MDBModalBody>
              <ModalHeader icon="exclamation" title={ modalTitle } isDanger />
              <MDBRow>
                  <MDBCol>
                      <MDBBtn color="danger" className="w-100 m-auto" onClick={ handleConfirm }>Confirm</MDBBtn>
                  </MDBCol>
                  <MDBCol>
                      <MDBBtn color="info" outline className="w-100 m-auto" onClick={ toggle }>Cancel</MDBBtn>
                  </MDBCol>
              </MDBRow>
          </MDBModalBody>
      </MDBModal>
  )
}

export default ConfirmModal;