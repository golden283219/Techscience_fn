import React from "react";
import { useSelector } from "react-redux";
import { MDBBtn, MDBIcon } from "mdbreact";
import { ARITHMATIC_TABLE } from "../../../../utils/tables";
import { _getArithmatics } from "../../../../redux/action/dataAction";
import BaseTable from "../BaseTable";

const ArithmeticsTable = ({ openDataModal, openConfirmModal }) => {
	const data = useSelector(state => state.data.arithmatics);
	const columns = [
		{
			name: "No",
			cell: (row, index) => <div>{index + 1}</div>,
			width: "5px",
		},
		{
			name: "Category",
			selector: "category",
			sortable: true,
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
			title='Arithmatic'
			columns={columns}
			totalCount={data ? data.totalCount : 0}
			data={data ? data.arithmatics : []}
			table={ARITHMATIC_TABLE}
			openDataModal={openDataModal}
			openConfirmModal={openConfirmModal}
			handlePagination={_getArithmatics}
			enableSpeech={true}
		/>
	);
};

export default ArithmeticsTable;