import React, { useState } from 'react'
import AssignedTable from '../../../Tables/Student/AssignedTable'
import ExamTestModal from '../../../Modals/Exam/ExamTestModal'
import {
  MDBContainer,
  MDBTabPane
} from 'mdbreact'

export default () => {
  const [ isTestModalOpen, setIsTestModalOpen ] = useState(false)
  const [ result, setResult ] = useState({ exam: {} })
  
  const handleOpenTestModal = row => {
    setResult(row)
    return setIsTestModalOpen(true)
  }

  return (
      <MDBTabPane tabId="2">
          <MDBContainer className="mt-3 mb-3">
              <AssignedTable 
          openTestModal={ handleOpenTestModal }
        />
          </MDBContainer>
          <ExamTestModal
        isOpen={ isTestModalOpen }
        handleClose={ () => setIsTestModalOpen(false) }
        resultId={ result.id }
        exam={ result.exam }
      />
      </MDBTabPane>
  )
}