import React, { useState } from 'react'
import QuestionTable from '../Tables/Exam/QuestionTable'
import QuestionModal from '../Modals/Exam/QuestionModal'
import ConfirmModal from '../Modals/ConfirmModal'
import { _deleteQuestion } from '../../../redux/action/dataAction';

export default ({ examId }) => {
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
      <>
          <QuestionTable
        openDataModal={ handleOpenDataModal }
        openConfirmModal={ handleOpenConfirmModal }
        examId={ examId }
      />
          <QuestionModal
        isOpen={ isDataModalOpen }
        close={ () => setIsDataModalOpen(false) }
        row={ toEdit }
        examId={ examId }
      />
          <ConfirmModal
        isOpen={ isConfirmModalOpen }
        toggle={ () => setIsConfirmModalOpen(!isConfirmModalOpen) }
        onConfirm={ () => _deleteQuestion(toDelte) }
      />
      </>
  )
}