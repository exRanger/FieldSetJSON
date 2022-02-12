import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate
} from "react-router-dom"
import About from './pages/About'
import Error from './pages/Error'
import Posts from './pages/Posts'
import './styles/App.css'

export default function App() {
  return (
    <Router>
      <div className={'navbar'}>
      <Link to="/about">Invoices</Link> 
        <Link to="/posts">Expenses</Link>
      </div>
      <Routes>
          <Route exact path="/about" element={<About/>}/> 
          <Route exact path="/posts" element={<Posts/>}/>  
          <Route exact path="/error" element={<Error/>}/>
         
      </Routes>
      <Navigate to='/error' element={<Error/>}/>
    </Router>
  )
}
