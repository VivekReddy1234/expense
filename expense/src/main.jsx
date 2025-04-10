import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, createBrowserRouter, Route } from 'react-router-dom'
import Index from './index.jsx'
import Analytics from './Analytics.jsx'
import { RouterProvider } from 'react-router-dom'
import Login from './Login.jsx'
import {   Routes } from 'react-router-dom'
import Signup from './Signup.jsx'
import AddExpenseForm from './components/Addexpense.jsx'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>} />
      <Route path= '/login' element={<Login/>} />
      <Route path='/signup' element={<Signup/>} />
      <Route path='/addExpense' element={<AddExpenseForm/>} />
    </Routes>
  </BrowserRouter>
)
