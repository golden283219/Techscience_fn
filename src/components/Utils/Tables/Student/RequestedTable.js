import React from 'react'
import moment from 'moment'
import { useSelector } from 'react-redux';
import { _getRequesteds } from '../../../../redux/action/dataAction';
import { RESULT_TABLE } from '../../../../utils/tables';
import BaseTable from '../BaseTable';

export default ({ openDataModal }) => {
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
      name: 'Requested At',
      selector: 'requestedAt',
      cell: row => moment(row.requestedAt).format('YYYY-MM-DD h:mm:ss'),
      sortable: true
    }
  ];

  return (
      <BaseTable 
      title='Exam Registration Request'
      columns={ columns }
      totalCount={ data.totalCount }
      data={ data.results }
      table={ RESULT_TABLE }
      openDataModal={ openDataModal }
      handlePagination={ _getRequesteds }
      subHeaderBtnText='New Request'
      noAction
    />
  )
}