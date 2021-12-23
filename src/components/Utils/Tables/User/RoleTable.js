import React from 'react'
import { useSelector } from 'react-redux';
import { _getRoles } from '../../../../redux/action/dataAction';
import { ROLE_TABLE } from '../../../../utils/tables';
import BaseTable from '../BaseTable';

export default ({ openDataModal, openConfirmModal }) => {
  const data = useSelector(state => state.data.roles)

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
      title='Role'
      columns={ columns }
      totalCount={ data.totalCount }
      data={ data.roles }
      table={ ROLE_TABLE }
      openDataModal={ openDataModal }
      openConfirmModal={ openConfirmModal }
      handlePagination={ _getRoles }
    />
  )
}