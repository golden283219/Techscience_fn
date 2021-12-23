import React, { useState } from 'react'
import ChoiceTable from '../Tables/Exam/ChoiceTable'
import ChoiceModal from '../Modals/Exam/ChoiceModal'
import ConfirmModal from '../Modals/ConfirmModal'
import { _deleteChoice } from '../../../redux/action/dataAction';

export default ({ questionId }) => {
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
          <ChoiceTable
        openDataModal={ handleOpenDataModal }
        openConfirmModal={ handleOpenConfirmModal }
        questionId={ questionId }
      />
          <ChoiceModal
        isOpen={ isDataModalOpen }
        close={ () => setIsDataModalOpen(false) }
        row={ toEdit }
        questionId={ questionId }
      />
          <ConfirmModal
        isOpen={ isConfirmModalOpen }
        toggle={ () => setIsConfirmModalOpen(!isConfirmModalOpen) }
        onConfirm={ () => _deleteChoice(toDelte) }
      />
      </>
  )
}