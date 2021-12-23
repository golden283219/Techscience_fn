import React from 'react'
import { useSelector } from 'react-redux';
import { _getSubjects } from '../../../../redux/action/dataAction';
import { SUBJECT_TABLE } from '../../../../utils/tables';
import BaseTable from '../BaseTable';

export default ({ openDataModal, openConfirmModal }) => {
  const data = useSelector(state => state.data.subjects)

  const columns = [
    {
      name: 'No',
      cell: (row, index) => <div>{index + 1}</div>,
      width: '5px'
    },
    {
      name: 'Name',
      selector: 'name',
      sortable: true
    }
  ];

  return (
      <BaseTable 
      title='Subject'
      columns={ columns }
      totalCount={ data.totalCount }
      data={ data.subjects }
      table={ SUBJECT_TABLE }
      openDataModal={ openDataModal }
      openConfirmModal={ openConfirmModal }
      handlePagination={ _getSubjects }
    />
  )
}