import React from 'react'

export default ({ grade }) => {
  switch (grade) {
    case 0:
      return (
          <span className='text-danger'>C</span>
      )
    case 1:
      return (
          <span className='text-danger'>C+</span>
      )
    case 2:
      return (
          <span className='text-warning font-bold'>B</span>
      )
    case 3:
      return (
          <span className='text-warning'>B+</span>
      )
    case 4:
      return (
          <span className='text-info'>A</span>
      )
    case 5:
      return (
          <span className='text-success'>A+</span>
      )

    default:
      return (
          <span></span>
      )
  }
}