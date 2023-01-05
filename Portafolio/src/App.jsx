import { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import NavBarLayout from './layout/NavBarLayout'

// import Login from './pages/Login'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element ={<NavBarLayout/>}>
        </Route>
      </Routes>
    </BrowserRouter>
    )
}

export default App
