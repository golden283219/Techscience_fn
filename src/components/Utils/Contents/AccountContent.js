import React, { useState } from "react";
import AccountTable from '../Tables/Account/AccountTable'
import AccountModal from '../Modals/Account/AccountModal'
import ConfirmModal from '../Modals/ConfirmModal'
import { _deleteAccount } from "../../../redux/action/dataAction";
import {
  MDBContainer,
  MDBCard
} from "mdbreact";


const AccountContent = () => {
  const [isDataModalOpen, setIsDataModalOpen] = useState(false)
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false)
  const [toEdit, setToEdit] = useState(null)
  const [toDelte, setToDelete] = useState(null)
  
  const toggleDataModal = () => setIsDataModalOpen(!isDataModalOpen)
  const toggleConfirmModal = () => setIsConfirmModalOpen(!isConfirmModalOpen)

  const handleOpenDataModal = row => {
    setToEdit(row)
    return setIsDataModalOpen(true)
  }
  const handleOpenConfirmModal = id => {
    setToDelete(id)
    return setIsConfirmModalOpen(true)
  }

  return (
    <MDBCard>
      <MDBContainer className="mt-3 mb-3">
        <AccountTable 
          openDataModal={handleOpenDataModal}
          openConfirmModal={handleOpenConfirmModal}
        />
      </MDBContainer>
      <AccountModal
        isOpen={isDataModalOpen}
        toggle={toggleDataModal}
        close={ () => setIsDataModalOpen(false) }
        row={toEdit}
      />
      <ConfirmModal
        isOpen={isConfirmModalOpen} 
        toggle={toggleConfirmModal} 
        onConfirm={() => _deleteAccount(toDelte)}
      />
    </MDBCard>
  )
}

export default AccountContent