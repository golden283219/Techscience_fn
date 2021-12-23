import React from 'react';
import { MDBBtn, MDBIcon } from 'mdbreact';
import { useSelector } from 'react-redux';
import { _getContents } from '../../../../redux/action/dataAction';
import BaseTable from '../BaseTable';
import { CONTENT_TABLE } from '../../../../utils/tables';

const TextToSpeechTable = ({ openDataModal, openConfirmModal, pageType }) => {

	const speeches = useSelector(state => state.data.speeches);
	const data = useSelector(state => state.data.contents);

	const newData = data && {
		...data,
		contents: data.contents && data.contents.map(item => {
			const category = speeches.speeches.find(speech => speech.id === item.speechId).name;
			return { ...item, category };
		}),
	};

	const columns = [
		{
			name: 'No',
			cell: (row, index) => <div>{index + 1}</div>,
			width: '5px',
		},
		{
			name: 'Category',
			selector: 'category',
			sortable: true,
		},
		{
			name: 'Text',
			selector: 'text',
			sortable: true,
		},
		{
			name: 'Action',
			cell: row => <>
    {pageType !== 'learn' ? <MDBBtn
					size="sm"
					color="info"
					onClick={ () => openDataModal(row) }
					floating
				>
        <MDBIcon icon="pen" />
    </MDBBtn> : ''}
    {pageType !== 'learn' ? <MDBBtn
					size="sm"
					color="danger"
					floating
					onClick={ () => openConfirmModal(row) }
				>
        <MDBIcon icon="trash-alt" />
    </MDBBtn> : ''}
    <MDBBtn
					size="sm"
					color="success"
					floating
					onClick={ () => speak(row.text) }
				>
        <MDBIcon icon="play-circle" />
    </MDBBtn>
			</>,
		},
	];

	const speak = text => {
		const utterance = new SpeechSynthesisUtterance(text);
		utterance.rate = 0.6;
		speechSynthesis.speak(utterance);
	};

	return (
    <BaseTable
			title={ pageType !== 'learn' ? 'Text to Speech' : '' }
			columns={ columns }
			data={ data ? newData.contents : [] }
			table={ CONTENT_TABLE }
			openDataModal={ openDataModal }
			openConfirmModal={ openConfirmModal }
			handlePagination={ _getContents }
			enableSpeech={ true }
			pageType={ pageType }
		/>
	);
};

export default TextToSpeechTable;