import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from '../../Layout'

const Router = () => {
  return (
    <BrowserRouter> 
        <Routes>
            <Route element={<Layout/>} path='/g'/>
            <Route element={<div>Not found</div>} path='*'/>
        </Routes>
      
    </BrowserRouter>
  )
}

export default Router
