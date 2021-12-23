import React from "react";
import { MDBBtn, MDBIcon } from "mdbreact";
import { useSelector } from "react-redux";
import { _getMissingLetters } from "../../../../redux/action/dataAction";
import BaseTable from "../BaseTable";
import { MISSING_TABLE } from "../../../../utils/tables";

const MissingLettersTable = ({ openDataModal, openConfirmModal }) => {
	const data = useSelector(state => state.data.missingLetters);

	const columns = [
		{
			name: "No",
			cell: (row, index) => <div>{index + 1}</div>,
			width: "5px",
		},
		{
			name: "Question",
			selector: "quesText",
			sortable: true,
		},
		{
			name: "Answer",
			selector: "ans",
			sortable: true,
		},
		{
			name: "Action",
			cell: row => <>
				<MDBBtn
					size="sm"
					color="info"
					onClick={() => openDataModal(row)}
					floating
				>
					<MDBIcon icon="pen" />
				</MDBBtn>
				<MDBBtn
					size="sm"
					color="danger"
					floating
					onClick={() => openConfirmModal(row)}
				>
					<MDBIcon icon="trash-alt" />
				</MDBBtn>
			</>,
		},
	];

	return (
		<BaseTable
			title='Missing Letters'
			columns={columns}
			totalCount={data ? data.totalCount : 0}
			data={data ? data.missingLetters : []}
			table={MISSING_TABLE}
			openDataModal={openDataModal}
			openConfirmModal={openConfirmModal}
			handlePagination={_getMissingLetters}
			enableSpeech={true}
		/>
	);
};

export default MissingLettersTable;