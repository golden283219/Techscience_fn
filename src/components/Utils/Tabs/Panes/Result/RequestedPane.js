import React, { useState } from 'react'
import RequestedTable from '../../../Tables/Result/RequestedTable'
import ConfirmModal from '../../../Modals/ConfirmModal'
import { _acceptResult } from '../../../../../redux/action/dataAction';
import {
  MDBContainer,
  MDBTabPane
} from 'mdbreact'

export default () => {
  const [ isConfirmModalOpen, setIsConfirmModalOpen ] = useState(false)
  const [ toAccept, setToAccept ] = useState(null)

  const toggleConfirmModal = () => setIsConfirmModalOpen(!isConfirmModalOpen)

  const handleOpenConfirmModal = row => {
    setToAccept(row)
    return setIsConfirmModalOpen(true)
  }

  return (
      <MDBTabPane tabId="3">
          <MDBContainer className="mt-3 mb-3">
              <RequestedTable 
          openConfirmModal={ handleOpenConfirmModal }
        />
          </MDBContainer>
          <ConfirmModal
        title="Really Accept This Request?"
        isOpen={ isConfirmModalOpen }
        toggle={ toggleConfirmModal }
        onConfirm={ () => _acceptResult(toAccept) }
      />
      </MDBTabPane>
  )
}