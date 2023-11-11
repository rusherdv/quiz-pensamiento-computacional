import { useState } from 'react'
import './index.css'
import Menu from './components/Menu'
import Quiz from './components/Quiz'
import Tips from './components/Tips'
import Result from './components/Result'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div className='bg-slate-900 w-full h-[100vh] flex justify-center items-center'>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Menu/>}/>
        <Route path='/quiz' element={<Quiz/>}/>
        <Route path='/tips' element={<Tips/>}/>
        <Route path='/result' element={<Result/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
