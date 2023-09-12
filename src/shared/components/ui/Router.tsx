import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from '../Home'
import { Contact } from '../Contact'

const Router = () => {
  return (
    <BrowserRouter> 
        <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Contact />} path="/contact" />
            <Route element={<div>Not found</div>} path="*" />
        </Routes>
    </BrowserRouter>
  )
}

export default Router
