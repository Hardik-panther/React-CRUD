import React from 'react'
import { Navigate } from 'react-router-dom'

function Protect(props) {

  const { children } = props

  const token = localStorage.getItem("token")
  if (token) {
    return <Navigate to="/dashbord" />
  } else {
    return children;
  }
}

export default Protect
