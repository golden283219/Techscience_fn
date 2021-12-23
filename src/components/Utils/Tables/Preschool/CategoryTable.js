import React from 'react';
import { useSelector } from 'react-redux';
import { MDBBtn, MDBIcon } from 'mdbreact';
import { SPEECH_TABLE } from '../../../../utils/tables';
import BaseTable from '../../../Utils/Tables/BaseTable';
import { _getSpeeches } from '../../../../redux/action/dataAction';

const CategoryTable = ({ openDataModal, openConfirmModal }) => {
	const data = useSelector(state => state.data.speeches);

	const columns = [
		{
			name: 'No',
			cell: (row, index) => <div>{index + 1}</div>,
			width: '5px',
		},
		{
			name: 'Name',
			selector: 'name',
			sortable: true,
		},
		{
			name: 'Action',
			cell: row => <>
    <MDBBtn
					size="sm"
					color="info"
					onClick={ () => openDataModal(row) }
					floating
				>
        <MDBIcon icon="pen" />
    </MDBBtn>
    <MDBBtn
					size="sm"
					color="danger"
					floating
					onClick={ () => openConfirmModal(row) }
				>
        <MDBIcon icon="trash-alt" />
    </MDBBtn>
			</>,
		},
	];

	return (
    <BaseTable
			title='Text to Speech Category'
			columns={ columns }
			totalCount={ data ? data.totalCount : 0 }
			data={ data ? data.speeches : [] }
			table={ SPEECH_TABLE }
			openDataModal={ openDataModal }
			openConfirmModal={ openConfirmModal }
			handlePagination={ _getSpeeches }
			enableSpeech={true}
		/>
	);
};

export default CategoryTable;