import React from 'react'
import moment from 'moment'
import { useSelector } from 'react-redux';
import { _getRequesteds } from '../../../../redux/action/dataAction';
import { RESULT_TABLE } from '../../../../utils/tables';
import BaseTable from '../BaseTable';
import {
  MDBBtn,
  MDBIcon
} from 'mdbreact';

export default ({ openConfirmModal }) => {
  const data = useSelector(state => state.data.requesteds)

  const columns = [
    {
      name: 'No',
      cell: (row, index) => <div>{index + 1}</div>,
      width: '5px'
    },
    {
      name: 'Exam',
      selector: 'exam.name',
      sortable: true
    },
    {
      name: 'Student',
      selector: 'user.fullname',
      sortable: true
    },
    {
      name: 'Requested At',
      selector: 'requestedAt',
      cell: row => moment(row.requestedAt).format('YYYY-MM-DD h:mm:ss'),
      sortable: true
    },
    {
      name: 'Accept',
      cell: row => <>
          <MDBBtn
          size="sm"
          color="info"
          rounded
          onClick={ () => openConfirmModal(row) }
        >
              <MDBIcon icon="check" />
          </MDBBtn>
      </>
    }
  ];

  return (
      <BaseTable
      title='Exam Registration Request'
      columns={ columns }
      totalCount={ data.totalCount }
      data={ data.results }
      table={ RESULT_TABLE }
      handlePagination={ _getRequesteds }
      noAction
      noSubHeader
    />
  )
}