import React from 'react'
import moment from 'moment'
import { useSelector } from 'react-redux';
import { _getAssigneds } from '../../../../redux/action/dataAction';
import { RESULT_TABLE } from '../../../../utils/tables';
import BaseTable from '../BaseTable';
import { 
  MDBBtn,
  MDBIcon
} from 'mdbreact';

export default ({ openTestModal }) => {
  const data = useSelector(state => state.data.assigneds)

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
      name: 'Assigned At',
      selector: 'assignedAt',
      cell: row => moment(row.assignedAt).format('YYYY-MM-DD h:mm:ss'),
      sortable: true
    },
    {
      name: 'Take Exam',
      cell: row => <>
          <MDBBtn
          size="sm"
          color="info"
          rounded
          onClick={ () => openTestModal(row) }
          className="ml-0 mr-0"
        >
              <MDBIcon icon="vial" />
          </MDBBtn>
      </>
    },
  ];

  return (
      <BaseTable 
      title='Assigned Exam'
      columns={ columns }
      totalCount={ data.totalCount }
      data={ data.results }
      table={ RESULT_TABLE }
      handlePagination={ _getAssigneds }
      noAction
      noSubHeader
    />
  )
}