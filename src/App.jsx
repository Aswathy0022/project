import React from 'react'
import { Route, Routes } from "react-router-dom"

import Login from './components/Login.jsx'
export default function Router() {
  return (
    <div>
      <Routes>
      <Route path="/Login" element={<Login />} />
      </Routes>
    </div>
  )
}
