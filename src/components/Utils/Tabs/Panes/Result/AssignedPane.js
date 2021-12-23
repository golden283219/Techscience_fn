import React, { useState } from 'react'
import AssignedTable from '../../../Tables/Result/AssignedTable'
import AssignedModal from '../../../Modals/Result/AssignedModal'
import {
  MDBContainer,
  MDBTabPane
} from 'mdbreact'

export default () => {
  const [ isDataModalOpen, setIsDataModalOpen ] = useState(false)

  return (
      <MDBTabPane tabId="2">
          <MDBContainer className="mt-3 mb-3">
              <AssignedTable 
          openDataModal={ () => setIsDataModalOpen(true) }
        />
          </MDBContainer>
          <AssignedModal
        isOpen={ isDataModalOpen }
        close={ () => setIsDataModalOpen(false) }
      />
      </MDBTabPane>
  )
}