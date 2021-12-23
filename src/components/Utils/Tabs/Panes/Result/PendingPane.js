import React, { useState } from "react";
import PendingTable from "../../../Tables/Result/PendingTable";
import GradeModal from "../../../Modals/Result/GradeModal";
import { MDBContainer, MDBTabPane } from "mdbreact";

export default () => {
	const [result, setResult] = useState({});
	const [isGradeModalOpen, setIsGradeModalOpen] = useState(false);

	const handleOpenGradeModal = row => {
		setResult(row);
		return setIsGradeModalOpen(true);
	};

	return (
		<MDBTabPane tabId="1">
			<MDBContainer className="mt-3 mb-3">
				<PendingTable
					openGradeModal={handleOpenGradeModal}
				/>
			</MDBContainer>
			<GradeModal
				isOpen={isGradeModalOpen}
				resultId={result.id}
				handleClose={() => setIsGradeModalOpen(false)}
			/>
		</MDBTabPane>
	);
}