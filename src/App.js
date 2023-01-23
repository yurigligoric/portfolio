import React from 'react'
import {Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar'
import Blog from './components/Blog'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Home from './components/Home'

function App() {
  return (
      <>
        <Navbar />
         <div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/contact' element={<Contact />} />



          </Routes>
         </div>
      </>


  )
}

export default App;
