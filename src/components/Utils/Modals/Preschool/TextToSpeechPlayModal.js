import React from 'react';
import { MDBBox, MDBModal, MDBModalBody } from 'mdbreact';
import ModalHeader from '../ModalHeader';
import { SayButton } from 'react-say';

const TextToSpeechPlayModal = ({ isOpen, close, row }) => {

	return (
    <MDBModal isOpen={ isOpen } className="mt-5 pt-5">
        <MDBModalBody>
            <ModalHeader icon="bars" title="Please click text" close={ close } />
            {row &&
            <MDBBox display={ 'flex' } justifyContent={ 'center' }>
                <SayButton
						speak={ row.text }
					>
                    <MDBBox tag="p">
                        {row.text}
                    </MDBBox>
                </SayButton>
            </MDBBox>
				}
        </MDBModalBody>
    </MDBModal>
	);
};

export default TextToSpeechPlayModal;