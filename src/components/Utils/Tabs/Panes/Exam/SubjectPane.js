import React, { useState } from 'react'
import SubjectTable from '../../../Tables/Exam/SubjectTable'
import SubjectModal from '../../../Modals/Exam/SubjectModal'
import ConfirmModal from '../../../Modals/ConfirmModal'
import { _deleteSubject } from '../../../../../redux/action/dataAction';
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
      <MDBTabPane tabId="4">
          <MDBContainer className="mt-3 mb-3">
              <SubjectTable
          openDataModal={ handleOpenDataModal }
          openConfirmModal={ handleOpenConfirmModal }
        />
          </MDBContainer>
          <SubjectModal
        isOpen={ isDataModalOpen }
        close={ () => setIsDataModalOpen(false) }
        row={ toEdit }
      />
          <ConfirmModal
        isOpen={ isConfirmModalOpen }
        toggle={ () => setIsConfirmModalOpen(!isConfirmModalOpen) }
        onConfirm={ () => _deleteSubject(toDelte) }
      />
      </MDBTabPane>
  )
}