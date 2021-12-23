import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ProtectedRoute = ({ path, role, component: Component }) => {
  const authRole = useSelector(state => state.auth.role)

  if(role < 0 && !!authRole)
    return <Redirect to='/' />

  if(role < 0)
    return <Route path={ path } component={ Component } />

  if(!authRole)
    return <Redirect to="/sign_in" />

  if(!role)
    return <Route path={ path } component={ Component } />

  if((authRole === 2 || authRole === 1) && role === 3)
    return <Redirect to="/" />

  if(authRole > role)
    return <Redirect to="/" />

  return <Route path={ path } component={ Component } />
}

export default ProtectedRoute