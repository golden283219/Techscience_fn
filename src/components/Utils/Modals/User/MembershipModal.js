import React from 'react';
import { MDBModal, MDBModalBody } from 'mdbreact';
import ModalHeader from '../ModalHeader';
import MembershipForm from '../../Forms/User/MembershipForm';

const MembershipModal = ({ isOpen, close, row }) => {
	return (
    <MDBModal isOpen={ isOpen } className="mt-5 pt-5">
        <MDBModalBody>
            <ModalHeader icon="user-tie" title="Please specify data" close={ close } />
            <MembershipForm row={ row } />
        </MDBModalBody>
    </MDBModal>
	);
};

export default MembershipModal;