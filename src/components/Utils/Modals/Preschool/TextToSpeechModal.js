import React from 'react';
import { MDBModal, MDBModalBody } from 'mdbreact';
import ModalHeader from '../ModalHeader';
import TextToSpeechForm from '../../Forms/Preschool/TextToSpeechForm';

const TextToSpeechModal = ({ isOpen, close, row }) => {
	return (
    <MDBModal isOpen={ isOpen } className="mt-5 pt-5">
        <MDBModalBody>
            <ModalHeader icon="bars" title="Please specify data" close={ close } />
            <TextToSpeechForm row={ row } />
        </MDBModalBody>
    </MDBModal>
	);
};

export default TextToSpeechModal;