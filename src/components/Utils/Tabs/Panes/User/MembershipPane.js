import React, { useState } from 'react'
import MembershipTable from '../../../Tables/User/MembershipTable'
import MembershipModal from '../../../Modals/User/MembershipModal'
import ConfirmModal from '../../../Modals/ConfirmModal'
import { _deleteMembership } from '../../../../../redux/action/dataAction';
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
      <MDBTabPane tabId="2">
          <MDBContainer className="mt-3 mb-3">
              <MembershipTable
          openDataModal={ handleOpenDataModal }
          openConfirmModal={ handleOpenConfirmModal }
        />
          </MDBContainer>
          <MembershipModal
        isOpen={ isDataModalOpen }
        close={ () => setIsDataModalOpen(false) }
        row={ toEdit }
      />
          <ConfirmModal
        isOpen={ isConfirmModalOpen }
        toggle={ () => setIsConfirmModalOpen(!isConfirmModalOpen) }
        onConfirm={ () => _deleteMembership(toDelte) }
      />
      </MDBTabPane>
  )
}