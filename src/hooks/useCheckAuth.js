import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux'

const useCheckAuth = () => {
  const authenticated = useSelector(state => state.app.authenticated)

  if(!authenticated)
    return <Redirect to="/sign_in" />

  return
}

export default useCheckAuth