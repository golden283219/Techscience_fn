import React from 'react'
import {
  MDBIcon,
  MDBBtn
} from 'mdbreact'

const TableSubHeader = ({ onAddBtnClick, addBtnText }) => {
  return (
      <MDBBtn
      color="info"
      onClick={ onAddBtnClick }
    >
          <MDBIcon icon="plus" />{!!addBtnText ? ` ${ addBtnText }` : ' Add'}
      </MDBBtn>
  )
}

export default TableSubHeader