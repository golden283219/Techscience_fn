import React from 'react'
import { useSelector } from 'react-redux';
import { _getLevels } from '../../../../redux/action/dataAction';
import { LEVEL_TABLE } from '../../../../utils/tables';
import BaseTable from '../BaseTable';

export default ({ openDataModal, openConfirmModal }) => {
  const data = useSelector(state => state.data.levels)

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
      title='Exam Level'
      columns={ columns }
      totalCount={ data.totalCount }
      data={ data.levels }
      table={ LEVEL_TABLE }
      openDataModal={ openDataModal }
      openConfirmModal={ openConfirmModal }
      handlePagination={ _getLevels }
    />
  )
}