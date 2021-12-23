import React from 'react'
import { MDBBtn, MDBIcon } from 'mdbreact'

export default ({ title, icon, close, isDanger }) => (
    <div className={ `form-header ${ isDanger ? 'bg-danger' : 'bg-info' }` }>
        <h3 className="text-white">
            <MDBIcon
        icon={ icon }
        className='mt-2 mb-2 text-white'
      />{' '}
            {title}
        </h3>
        <MDBBtn
      flat
      className='close-btn'
      onClick={ close }
    >
            <MDBIcon
        icon="times"
        className='close-icon'
      />
        </MDBBtn>
    </div>
)