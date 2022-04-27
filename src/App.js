import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import NavBar from './Components/Navbar';
import AllRoutes from './Routes/AllRoutes';

function App() {
  return (
   <BrowserRouter>
      <NavBar/>
      <AllRoutes/>
   </BrowserRouter>
  )
}

export default App