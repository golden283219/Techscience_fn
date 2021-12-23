import React from 'react'
import ChoiceContent from '../../../Contents/ChoieContent'
import {
  MDBContainer,
  MDBRow,
} from 'mdbreact'

export default ({ data: { id } }) => {
  return (
      <MDBContainer className="pt-2 pl-5 pr-5">
          <MDBRow className='border-left border-dark'>
              <ChoiceContent questionId={ id } />
          </MDBRow>
      </MDBContainer>
  )
}