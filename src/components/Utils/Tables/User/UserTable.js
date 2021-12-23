import React from 'react'
import { useSelector } from 'react-redux'
import { _getUsers } from '../../../../redux/action/dataAction';
import { USER_TABLE } from '../../../../utils/tables';
import BaseTable from '../BaseTable'
import UserDetail from './UserDetail'

export default ({ openDataModal, openConfirmModal }) => {
  const data = useSelector(state => state.data.users)

  const columns = [
    {
      name: 'No',
      cell: (row, index) => <div>{index + 1}</div>,
      width: '5px'
    },
    {
      name: 'Full Name',
      selector: 'fullname',
      sortable: true
    },
    {
      name: 'Account',
      selector: 'account.name',
      sortable: true
    },
    {
      name: 'Email',
      selector: 'email',
      sortable: true
    },
    {
      name: 'Username',
      selector: 'username',
      sortable: true
    },
    {
      name: 'Role',
      selector: 'role.name',
      sortable: true
    }
  ];

  return (
      <BaseTable 
      title='User'
      columns={ columns }
      totalCount={ data.totalCount }
      data={ data.users }
      table={ USER_TABLE }
      openDataModal={ openDataModal }
      openConfirmModal={ openConfirmModal }
      handlePagination={ _getUsers }
      DetailComp={ UserDetail }
    />
  )
}