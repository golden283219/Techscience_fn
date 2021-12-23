import React, { useState } from 'react'
import RoleTable from '../../../Tables/User/RoleTable'
import RoleModal from '../../../Modals/User/RoleModal'
import ConfirmModal from '../../../Modals/ConfirmModal'
import { _deleteRole } from '../../../../../redux/action/dataAction';
import {
  MDBContainer,
  MDBTabPane
} from 'mdbreact'

export default () => {
  const [ isDataModalOpen, setIsDataModalOpen ] = useState(false)
  const [ isConfirmModalOpen, setIsConfirmModalOpen ] = useState(false)
  const [ toEdit, setToEdit ] = useState(null)
  const [ toDelte, setToDelete ] = useState(null)

  const handleOpenDataModal = row => {
    setToEdit(row)
    return setIsDataModalOpen(true)
  }
  const handleOpenConfirmModal = id => {
    setToDelete(id)
    return setIsConfirmModalOpen(true)
  }

  return (
      <MDBTabPane tabId="3">
          <MDBContainer className="mt-3 mb-3">
              <RoleTable
          openDataModal={ handleOpenDataModal }
          openConfirmModal={ handleOpenConfirmModal }
        />
          </MDBContainer>
          <RoleModal
        isOpen={ isDataModalOpen }
        close={ () => setIsDataModalOpen(false) }
        row={ toEdit }
      />
          <ConfirmModal
        isOpen={ isConfirmModalOpen }
        toggle={ () => setIsConfirmModalOpen(!isConfirmModalOpen) }
        onConfirm={ () => _deleteRole(toDelte) }
      />
      </MDBTabPane>
  )
}