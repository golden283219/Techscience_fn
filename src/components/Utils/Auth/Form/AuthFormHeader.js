import React from 'react'
import { MDBIcon } from 'mdbreact'

const AuthFormHeader = ({ title }) => (
    <div className='form-header blue-gradient'>
        <h3>
            <MDBIcon
        icon='user'
        className='mt-2 mb-2 text-white'
      />{' '}
            {title}
        </h3>
    </div>
)

export default AuthFormHeader