import React, { useState } from 'react';
import { MDBContainer, MDBTabPane } from 'mdbreact';
import CategoryTable from '../../../Tables/Preschool/CategoryTable';
import CategoryModal from '../../../Modals/Preschool/CategoryModal';
import ConfirmModal from '../../../Modals/ConfirmModal';

import { _deleteSpeech } from '../../../../../redux/action/dataAction';

const CategoryPane = () => {
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
    <MDBTabPane tabId="1">
        <MDBContainer className="mt-3 mb-3">
            <CategoryTable
					openDataModal={ handleOpenDataModal }
					openConfirmModal={ handleOpenConfirmModal }
				/>
        </MDBContainer>
        <CategoryModal isOpen={ isDataModalOpen } close={ () => setIsDataModalOpen(false) } row={ toEdit } />
        <ConfirmModal isOpen={ isConfirmModalOpen } toggle={ () => setIsConfirmModalOpen(!isConfirmModalOpen) } onConfirm={ () => _deleteSpeech(toDelete) } />
    </MDBTabPane>
	);
};

export default CategoryPane;