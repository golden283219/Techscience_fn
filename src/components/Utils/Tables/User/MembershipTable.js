import React from 'react'
import { useSelector } from 'react-redux';
import { _getMemberships } from '../../../../redux/action/dataAction';
import { MEMBERSHIP_TABLE } from '../../../../utils/tables';
import BaseTable from '../BaseTable';

export default ({ openDataModal, openConfirmModal }) => {
  const data = useSelector(state => state.data.memberships)

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
      title='Membership'
      columns={ columns }
      totalCount={ data.totalCount }
      data={ data.memberships }
      table={ MEMBERSHIP_TABLE }
      openDataModal={ openDataModal }
      openConfirmModal={ openConfirmModal }
      handlePagination={ _getMemberships }
    />
  )
}