import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import SignInPage from "./pages/SignInPage.jsx"
import SignUpPage from "./pages/SignUpPage.jsx"
import HomePage from "./pages/HomePage.jsx"
import Layout from './components/Layout.jsx'

export default function App() {
  return (
    <Router>
      <Layout>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/signup" element={<SignUpPage/>}/>
        <Route path="/signin" element={<SignInPage/>}/>
      </Routes>
      </Layout>
    </Router>
  )
}
