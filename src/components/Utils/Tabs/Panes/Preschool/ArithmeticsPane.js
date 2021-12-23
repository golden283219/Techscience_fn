import React, { useState } from "react";
import { MDBContainer, MDBTabPane } from "mdbreact";
import ArithmeticsTable from "../../../Tables/Preschool/ArithmeticsTable";
import ArithmeticsModal from "../../../Modals/Preschool/ArithmeticsModal";
import ConfirmModal from "../../../Modals/ConfirmModal";
import { _deleteArithmatic } from "../../../../../redux/action/dataAction";

const ArithmeticsPane = () => {
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
		<MDBTabPane tabId="4">
			<MDBContainer className="mt-3 mb-3">
				<ArithmeticsTable
					openDataModal={handleOpenDataModal}
					openConfirmModal={handleOpenConfirmModal}
				/>
			</MDBContainer>
			<ArithmeticsModal isOpen={isDataModalOpen} close={() => setIsDataModalOpen(false)} row={toEdit} />
			<ConfirmModal isOpen={isConfirmModalOpen} toggle={() => setIsConfirmModalOpen(!isConfirmModalOpen)} onConfirm={() => _deleteArithmatic(toDelete)} />
		</MDBTabPane>
	);
};

export default ArithmeticsPane;