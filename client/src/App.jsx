import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import SignInPage from "./pages/SignInPage.jsx"
import SignUpPage from "./pages/SignUpPage.jsx"
import HomePage from "./pages/HomePage.jsx"
import ExplorePage from './pages/ExplorePage.jsx'
import SellPage from './pages/SellPage.jsx'
import ViewTicketPage from './pages/ViewTicketPage.jsx'
import ProfilePage from './pages/ProfilePage.jsx'
import CategoryPage from './pages/CategoryPage.jsx'

export default function App() {
  return (
    <Router> 
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/signup" element={<SignUpPage/>}/>
        <Route path="/signin" element={<SignInPage/>}/>
        <Route path="/explore" element={<ExplorePage/>} />
        <Route path="/sell-ticket" element={<SellPage/>} />
        <Route path="/view-ticket/:_id" element={<ViewTicketPage/>} />
        <Route path="/profile" element={<ProfilePage/>} />
        <Route path="/category/:category" element={<CategoryPage/>} />
      </Routes>
    </Router>
  )
}
