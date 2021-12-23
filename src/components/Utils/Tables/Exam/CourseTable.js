import React from 'react'
import { useSelector } from 'react-redux';
import { _getCourses } from '../../../../redux/action/dataAction';
import { COURSE_TABLE } from '../../../../utils/tables';
import BaseTable from '../BaseTable';

export default ({ openDataModal, openConfirmModal }) => {
  const data = useSelector(state => state.data.courses)

  const columns = [
    {
      name: 'No',
      cell: (row, index) => <div>{index + 1}</div>,
      width: '5px'
    },
    {
      name: 'Subject',
      selector: 'subject.name',
      sortable: true
    },
    {
      name: 'Name',
      selector: 'name',
      sortable: true
    },
  ];

  return (
      <BaseTable 
      title='Course'
      columns={ columns }
      totalCount={ data.totalCount }
      data={ data.courses }
      table={ COURSE_TABLE }
      openDataModal={ openDataModal }
      openConfirmModal={ openConfirmModal }
      handlePagination={ _getCourses }
    />
  )
}