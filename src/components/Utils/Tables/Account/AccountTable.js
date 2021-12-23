import React from 'react'
import { useSelector } from 'react-redux';
import { _getAccounts } from '../../../../redux/action/dataAction';
import { ACCOUNT_TABLE } from '../../../../utils/tables';
import BaseTable from '../BaseTable';

export default ({ openDataModal, openConfirmModal }) => {
  const data = useSelector(state => state.data.accounts)
  const columns = [
    {
      name: 'No',
      cell: (row, index) => <div>{index + 1}</div>,
      width: '15px'
    },
    {
      name: 'Name',
      selector: 'name',
      sortable: true
    },
    {
      name: 'Admin',
      selector: 'user.fullname',
      cell: row => {
        if(!row.user)
          return ''
        
        return row.user.fullname
      },
      sortable: false,
    }
  ];

  return (
      <BaseTable 
      title='Account'
      columns={ columns }
      totalCount={ data.totalCount }
      data={ data.accounts }
      table={ ACCOUNT_TABLE }
      openDataModal={ openDataModal }
      openConfirmModal={ openConfirmModal }
      handlePagination={ _getAccounts }
    />
  )
}