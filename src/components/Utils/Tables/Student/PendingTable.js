import React from 'react'
import moment from 'moment'
import { useSelector } from 'react-redux';
import { _getPendings } from '../../../../redux/action/dataAction';
import { RESULT_TABLE } from '../../../../utils/tables';
import BaseTable from '../BaseTable';

export default () => {
  const data = useSelector(state => state.data.pendings)
  
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
      name: 'Total Questions',
      selector: 'totalQuestion',
      sortable: true
    },
    {
      name: 'Attemped',
      selector: 'attempedQuestion',
      sortable: true
    },
    {
      name: 'Took At',
      selector: 'tookAt',
      cell: row => moment(row.tookAt).format('YYYY-MM-DD h:mm:ss'),
      sortable: true
    }
  ];

  return (
      <BaseTable 
      title='Pending Result'
      columns={ columns }
      totalCount={ data.totalCount }
      data={ data.results }
      table={ RESULT_TABLE }
      handlePagination={ _getPendings }
      noAction
      noSubHeader
    />
  )
}