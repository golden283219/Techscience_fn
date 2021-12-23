import React from 'react'
import moment from 'moment'
import { useSelector } from 'react-redux';
import { _getGradeds } from '../../../../redux/action/dataAction';
import { RESULT_TABLE } from '../../../../utils/tables';
import BaseTable from '../BaseTable';
import Grade from '../../Miscells/Grade'
import GradedDetail from '../../Miscells/GradedDetail'

export default () => {
  const data = useSelector(state => state.data.gradeds)

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
      name: 'Assigned At',
      selector: 'assignedAt',
      cell: row => moment(row.assignedAt).format('YYYY-MM-DD h:mm:ss'),
      sortable: true
    },
    {
      name: 'Took At',
      selector: 'tookAt',
      cell: row => moment(row.tookAt).format('YYYY-MM-DD h:mm:ss'),
      sortable: true
    },
    {
      name: 'Grade',
      selector: 'grade',
      cell: row => {
        return <Grade grade={ row.grade } />
      },
      sortable: true
    },
  ];

  return (
      <BaseTable 
      title='Graded Result'
      columns={ columns }
      totalCount={ data.totalCount }
      data={ data.results }
      table={ RESULT_TABLE } 
      DetailComp={ GradedDetail }
      handlePagination={ _getGradeds }
      noAction
      noSubHeader
    />
  )
}