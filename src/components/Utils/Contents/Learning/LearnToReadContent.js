import React, { useState } from "react";
import { MDBBox, MDBCard, MDBContainer, MDBRow } from "mdbreact";
import TextToSpeechTable from "../../Tables/Preschool/TextToSpeechTable";
import { useSelector } from "react-redux";
import TextToSpeechModal from "../../Modals/Preschool/TextToSpeechModal";
import ConfirmModal from "../../Modals/ConfirmModal";
import { _deleteContent } from "../../../../redux/action/dataAction";

export default () => {
	const userRole = useSelector(state => state.auth.role);

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
		<MDBCard>
			<MDBContainer className="mt-3 mb-5">
				<MDBRow className="mt-5 ml-2 mb-2">
					<MDBBox tag='h1'>Learn To Read</MDBBox>
				</MDBRow>
				<MDBRow>
					<MDBContainer className="mt-3 mb-3">
						<TextToSpeechTable pageType={userRole === 3 ? "learn" : "manage"}
							openDataModal={handleOpenDataModal}
							openConfirmModal={handleOpenConfirmModal} />
					</MDBContainer>
					<TextToSpeechModal isOpen={isDataModalOpen} close={() => setIsDataModalOpen(false)} row={toEdit} />
					<ConfirmModal isOpen={isConfirmModalOpen} toggle={() => setIsConfirmModalOpen(!isConfirmModalOpen)} onConfirm={() => _deleteContent(toDelete)} />
				</MDBRow>
			</MDBContainer>
		</MDBCard>
	);
}