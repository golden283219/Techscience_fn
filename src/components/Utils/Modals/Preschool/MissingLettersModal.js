import React from 'react';
import { MDBModal, MDBModalBody } from 'mdbreact';
import ModalHeader from '../ModalHeader';
import MissingLettersForm from '../../Forms/Preschool/MissingLettersForm';

const MissingLettersModal = ({ isOpen, close, row }) => {
	return (
    <MDBModal isOpen={ isOpen } className="mt-5 pt-5">
        <MDBModalBody>
            <ModalHeader icon="bars" title="Please specify data" close={ close } />
            <MissingLettersForm row={ row } />
        </MDBModalBody>
    </MDBModal>
	);
};

export default MissingLettersModal;