import React, { useState } from 'react'
import CourseTable from '../../../Tables/Exam/CourseTable'
import CourseModal from '../../../Modals/Exam/CourseModal'
import ConfirmModal from '../../../Modals/ConfirmModal'
import { _deleteCourse } from '../../../../../redux/action/dataAction';
import {
  MDBContainer,
  MDBTabPane
} from 'mdbreact'

const CoursePane = () => {
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
              <CourseTable
          openDataModal={ handleOpenDataModal }
          openConfirmModal={ handleOpenConfirmModal }
        />
          </MDBContainer>
          <CourseModal
        isOpen={ isDataModalOpen }
        close={ () => setIsDataModalOpen(false) }
        row={ toEdit }
      />
          <ConfirmModal
        isOpen={ isConfirmModalOpen }
        toggle={ () => setIsConfirmModalOpen(!isConfirmModalOpen) }
        onConfirm={ () => _deleteCourse(toDelte) }
      />
      </MDBTabPane>
  )
}

export default CoursePane