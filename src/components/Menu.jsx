import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {

  useEffect(() => {
    localStorage.setItem('points', 0)
  },[])

  return (
    <div className="w-6/12 h-fit bg-slate-700 flex items-center flex-col rounded-lg max-md:w-11/12 max-sm:w-[97%] max-sm:h-[98%] max-sm:justify-around">
      <div className='flex flex-col items-center'>
        <h1 className="text-5xl inter600 text-white mt-5 mb-1">Quiz</h1>
        <h2 className="text-2xl inter400 text-gray-300 mb-3 max-sm:text-lg">Pensamiento computacional</h2>
      </div>
      <div className="w-full flex flex-col items-center">
        <Link to="/quiz" className='w-10/12'>
          <div className="w-full h-10 text-white bg-transparent border-2 border-white flex justify-center inter400 items-center rounded-lg mt-5 hover:bg-slate-800 hover:cursor-pointer">
            <h3 className="inter400">Contestar</h3>
          </div>
        </Link>
        <Link to="/tips" className='w-10/12'>
          <div className="w-full h-10 text-white bg-transparent border-2 border-white flex justify-center inter400 items-center rounded-lg mt-5 hover:bg-slate-800 hover:cursor-pointer">
            <h3 className="inter400">Tips</h3>
          </div>
        </Link>
      </div>
      <p className="inter400 text-xs text-white mb-5 mt-5">Powered by rusher</p>
    </div>
  )
}

export default Menu