import React from "react";
import { MDBModal, MDBModalBody } from "mdbreact";
import ModalHeader from "../ModalHeader";
import ExamTestStepper from "../../Miscells/ExamTestStepper";

export default ({ isOpen, exam, resultId, handleClose }) => {
	return (
		<MDBModal
			isOpen={isOpen}
			size="lg"
			className="mt-5 pt-5"
		>
			<MDBModalBody>
				<ModalHeader icon="vial" title={exam.name} />
				<ExamTestStepper
					resultId={resultId}
					examId={exam.id}
					closeModal={handleClose}
					examType={exam.type}
				/>
			</MDBModalBody>
		</MDBModal>
	);
}