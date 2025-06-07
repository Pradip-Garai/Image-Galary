import { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import ImageGalary from './Component/ImageGalary'
import ImageDetalis from './Component/ImageDetalis'
import './App.css'

function App() {

  return (
    <div className='App'>

      <BrowserRouter>
         <Routes>
           <Route path='/' element={<ImageGalary/>}/>
           <Route path='/:id' element={<ImageDetalis/>}/>
         </Routes>
      </BrowserRouter>
       
    </div>
  )
}

export default App
