import React from 'react'
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBMask,
  MDBView,
} from 'mdbreact';

const AuthFormContainer = ({ children, wide }) => {
  const colWidths = !!wide ? {
    md: '12', lg: '8', xl: '8', sm: '12'
  } : {
    md: '10', lg: '6', xl: '5', sm: '12'
  }

  return (
      <MDBView>
          <MDBMask
        className='d-flex form-mask'
        overlay='stylish-strong'
      >
              <MDBContainer>
                  <MDBRow>
                      <MDBCol md={ colWidths.md } lg={ colWidths.lg } xl={ colWidths.xl } sm={ colWidths.sm } className='mt-5 mx-auto'>
                          <MDBCard>
                              <MDBCardBody>
                                  {children}
                              </MDBCardBody>
                          </MDBCard>
                      </MDBCol>
                  </MDBRow>
              </MDBContainer>
          </MDBMask>
      </MDBView>
  )
}

export default AuthFormContainer