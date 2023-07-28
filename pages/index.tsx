import React from 'react'
import Dashboard from '../components/hocs/Dashboard'

function index({ children }) {
  return (
    <Dashboard>
      {children}
    </Dashboard>
  )
}

export default index