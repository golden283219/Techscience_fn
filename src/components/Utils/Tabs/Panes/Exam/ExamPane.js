import React, { useState } from 'react'
import ExamTable from '../../../Tables/Exam/ExamTable'
import ExamModal from '../../../Modals/Exam/ExamModal'
import ExamTestModal from '../../../Modals/Exam/ExamTestModal'
import ConfirmModal from '../../../Modals/ConfirmModal'
import { _deleteExam } from '../../../../../redux/action/dataAction';
import {
  MDBContainer,
  MDBTabPane
} from 'mdbreact'

const ExamPane = () => {
  const [ isTestModalOpen, setIsTestModalOpen ] = useState(false)
  const [ isDataModalOpen, setIsDataModalOpen ] = useState(false)
  const [ isConfirmModalOpen, setIsConfirmModalOpen ] = useState(false)
  const [ exam, setExam ] = useState({})
  const [ toEdit, setToEdit ] = useState(null)
  const [ toDelte, setToDelete ] = useState(null)
  
  const handleOpenTestModal = row => {
    setExam(row)
    return setIsTestModalOpen(true)
  }

  const handleOpenDataModal = row => {
    setToEdit(row)
    return setIsDataModalOpen(true)
  }
  const handleOpenConfirmModal = row => {
    setToDelete(row)
    return setIsConfirmModalOpen(true)
  }

  return (
      <MDBTabPane tabId="1" className="mih-full">
          <MDBContainer className="mt-3 mb-3">
              <ExamTable
          openTestModal={ handleOpenTestModal }
          openDataModal={ handleOpenDataModal }
          openConfirmModal={ handleOpenConfirmModal }
        />
          </MDBContainer>
          <ExamTestModal
        isOpen={ isTestModalOpen }
        handleClose={ () => setIsTestModalOpen(false) }
        exam={ exam }
      />
          <ExamModal
        isOpen={ isDataModalOpen }
        close={ () => setIsDataModalOpen(false) }
        row={ toEdit }
      />
          <ConfirmModal
        isOpen={ isConfirmModalOpen }
        toggle={ () => setIsConfirmModalOpen(!isConfirmModalOpen) }
        onConfirm={ () => _deleteExam(toDelte) }
      />
      </MDBTabPane>
  )
}

export default ExamPane