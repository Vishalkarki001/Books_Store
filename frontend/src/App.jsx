import React from 'react'
import Navbar from './components/Navbar.jsx'
import { Outlet } from 'react-router'




const App = () => {
  return (
    
  <>
  <div>
  
    <header>
     <Navbar/>
    </header>
  </div>

  <main>
<Outlet/>

  </main>
  
  </>
    
  )
}

export default App