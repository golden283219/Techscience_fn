import React from 'react';
import { MDBModal, MDBModalBody } from 'mdbreact';
import ModalHeader from '../ModalHeader';
import CategoryForm from '../../Forms/Preschool/CategoryForm';

const CategoryModal = ({ isOpen, close, row }) => {
	return (
    <MDBModal isOpen={ isOpen } className="mt-5 pt-5">
        <MDBModalBody>
            <ModalHeader icon="bars" title="Please specify data" close={ close } />
            <CategoryForm row={ row } />
        </MDBModalBody>
    </MDBModal>
	);
};

export default CategoryModal;