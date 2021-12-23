import React, { useState } from "react";
import { MDBContainer, MDBTabPane } from "mdbreact";
import MissingLettersTable from "../../../Tables/Preschool/MissingLettersTable";
import MissingLettersModal from "../../../Modals/Preschool/MissingLettersModal";
import ConfirmModal from "../../../Modals/ConfirmModal";
import { _deleteMissing } from "../../../../../redux/action/dataAction";

const MissingLettersPane = () => {
	const [isDataModalOpen, setIsDataModalOpen] = useState(false);
	const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
	const [toEdit, setToEdit] = useState(null);
	const [toDelete, setToDelete] = useState(null);

	const handleOpenDataModal = (row) => {
		setToEdit(row);
		return setIsDataModalOpen(true);
	};

	const handleOpenConfirmModal = id => {
		setToDelete(id);
		return setIsConfirmModalOpen(true);
	};

	return (
		<MDBTabPane tabId="3">
			<MDBContainer className="mt-3 mb-3">
				<MissingLettersTable
					openDataModal={handleOpenDataModal}
					openConfirmModal={handleOpenConfirmModal}
				/>
			</MDBContainer>
			<MissingLettersModal isOpen={isDataModalOpen} close={() => setIsDataModalOpen(false)} row={toEdit} />
			<ConfirmModal isOpen={isConfirmModalOpen} toggle={() => setIsConfirmModalOpen(!isConfirmModalOpen)} onConfirm={() => _deleteMissing(toDelete)} />
		</MDBTabPane>
	);
};

export default MissingLettersPane;