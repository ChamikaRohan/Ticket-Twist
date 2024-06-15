import React from 'react'
import SignInPage from "./pages/SignInPage.jsx"
import SignUpPage from "./pages/SignUpPage.jsx"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUpPage/>}/>
        <Route path="/signin" element={<SignInPage/>}/>
      </Routes>
    </Router>
  )
}
