import React, { useState } from 'react';
import { MDBContainer, MDBTabPane } from 'mdbreact';
import TextToSpeechTable from '../../../Tables/Preschool/TextToSpeechTable';
import TextToSpeechModal from '../../../Modals/Preschool/TextToSpeechModal';
import ConfirmModal from '../../../Modals/ConfirmModal';
import { _deleteContent } from '../../../../../redux/action/dataAction';

const TextToSpeechPane = () => {
	const [ isDataModalOpen, setIsDataModalOpen ] = useState(false);
	const [ isConfirmModalOpen, setIsConfirmModalOpen ] = useState(false);

	const [ toEdit, setToEdit ] = useState(null);
	const [ toDelete, setToDelete ] = useState(null);

	const handleOpenDataModal = (row) => {
		setToEdit(row);
		return setIsDataModalOpen(true);
	};

	const handleOpenConfirmModal = id => {
		setToDelete(id);
		return setIsConfirmModalOpen(true);
	};

	return (
    <MDBTabPane tabId="2">
        <MDBContainer className="mt-3 mb-3">
            <TextToSpeechTable
					openDataModal={ handleOpenDataModal }
					openConfirmModal={ handleOpenConfirmModal }
				/>
        </MDBContainer>
        <TextToSpeechModal isOpen={ isDataModalOpen } close={ () => setIsDataModalOpen(false) } row={ toEdit } />
        <ConfirmModal isOpen={ isConfirmModalOpen } toggle={ () => setIsConfirmModalOpen(!isConfirmModalOpen) } onConfirm={ () => _deleteContent(toDelete) } />
    </MDBTabPane>
	);
};

export default TextToSpeechPane;