import React from 'react';
import { MDBModal, MDBModalBody } from 'mdbreact';
import ModalHeader from '../ModalHeader';
import ArithmeticsForm from '../../Forms/Preschool/ArithmeticsForm';

const ArithmeticsModal = ({ isOpen, close, row }) => {
	return (
    <MDBModal isOpen={ isOpen } className="mt-5 pt-5">
        <MDBModalBody>
            <ModalHeader icon="bars" title="Please specify data" close={ close } />
            <ArithmeticsForm row={ row } />
        </MDBModalBody>
    </MDBModal>
	);
};

export default ArithmeticsModal;