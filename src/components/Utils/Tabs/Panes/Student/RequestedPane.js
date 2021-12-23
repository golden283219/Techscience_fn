import React, { useState } from 'react'
import RequestedTable from '../../../Tables/Student/RequestedTable'
import RequestedModal from '../../../Modals/Student/RequestedModal'
import {
  MDBContainer,
  MDBTabPane
} from 'mdbreact'

export default () => {
  const [ isDataModalOpen, setIsDataModalOpen ] = useState(false)

  return (
      <MDBTabPane tabId="3">
          <MDBContainer className="mt-3 mb-3">
              <RequestedTable
          openDataModal={ () => setIsDataModalOpen(true) }
        />
          </MDBContainer>
          <RequestedModal
        isOpen={ isDataModalOpen }
        close={ () => setIsDataModalOpen(false) }
      />
      </MDBTabPane>
  )
}