import React, {useState, useEffect} from 'react'
import {BsFillCheckCircleFill, BsXCircleFill} from 'react-icons/bs'
import data from '../../data/data.json'
import { Link } from 'react-router-dom'

const Result = () => {

    const [answers, setAnswers] = useState(data.quiz);
    const [state, setState] = useState(null)

    useEffect(() => {
        getResult()
    },[])

    const getResult = () => {
        const points = localStorage.getItem('points');
        const adjustedPoints = (points / (answers.length * 10)) * 10;
        
        if (adjustedPoints == 10) {
            setState("Perfecto");
        } else if(adjustedPoints >= 4) {
            setState("Aprobado");
        }else if(adjustedPoints == 0) {
            setState("NoPoints");
            return
        }else {
            setState("Desaprobado");
        }
    }

  return (
    <div className="w-6/12 h-fit bg-slate-700 flex items-center flex-col rounded-lg max-md:w-11/12 max-sm:w-[97%] max-sm:h-[98%] max-sm:justify-around">
        <div className='flex flex-col items-center'>
            <h1 className="text-5xl inter600 text-white mt-5 mb-1">Quiz</h1>
            <h2 className="text-2xl inter400 text-gray-300 mb-2 max-sm:text-lg">Resultado</h2>
        </div>
      {
        state === 'Aprobado' ? 
        <>
            <div className='flex items-center'>
                <BsFillCheckCircleFill className='text-6xl text-green-500'/>
                <h3 className='text-3xl inter600 text-white mb-1 ml-4'>Aprobado</h3>
            </div>
            <div className='w-10/12 flex flex-col justify-center items-center'>
                <p className=' text-white text-md mt-2 text-center'>Muy bien, estas en un buen nivel, segui asi</p>
                <p className=' text-white text-md mt-2 text-center'>Recordá que esto es simplemente una estimacion, y no confirma que vayas a aprobar el final</p>
            </div>
        </>
        :
        <></>
      }
      {
        state === 'Desaprobado' ? 
        <>
        <div className='flex items-center'>
            <BsXCircleFill className='text-6xl text-red-500'/>
            <h3 className='text-3xl inter600 text-white mb-1 ml-4'>Desaprobado</h3>
        </div>
        <div className='w-10/12 flex justify-center flex-col items-center'>
            <p className=' text-white text-md mt-2 text-center'>Segui practicando, revisa los tips y volve a intentarlo! Dale que se puede loco</p>
            <p className=' text-white text-md mt-1 text-center'>Recordá que esto es simplemente una estimacion, y no confirma que no vayas a aprobar el final</p>
        </div>
        </>
        :
        <></>
      }
      {
        state === 'Perfecto' ? 
        <>
            <div className='flex items-center '>
                <BsFillCheckCircleFill className='text-6xl text-green-500'/>
                <h3 className='text-3xl inter600 text-white mb-1 ml-4'>Perfecto</h3>
            </div>
            <div className='w-10/12 flex flex-col justify-center items-center'>
                <p className='text-white text-md mt-2 text-center'>Sos una maquina, no te para nadie loco</p>
                <p className='text-white text-md mt-2 text-center'>Recordá que esto es simplemente una estimacion, y no confirma que vayas a aprobar el final</p>
            </div>
        </>
        :
        <></>
      }
      {
        state === 'NoPoints' ? 
        <>
        <div className='w-10/12 flex justify-center flex-col items-center'>
            <p className=' text-white text-md mt-2 inter600 text-center'>Haz el test para ver si estas preparado!</p>
            <p className=' text-white text-md mt-2 inter400 text-center'>Recordá que esto es simplemente una estimacion, y no confirma que vayas a aprobar el final</p>
        </div>
        </>
        :
        <></>
      }
      <div className="w-full flex flex-col items-center sm:mb-7">
        {
            state === 'Desaprobado' ?
            <>
              <Link to="/quiz" className="w-10/12">
                <div className="w-full max-2xl:text-sm max-lg:text-xs h-10 text-white bg-transparent border-2 border-white flex justify-center inter400 items-center rounded-lg mt-5 hover:bg-slate-800 hover:cursor-pointer">
                  <h3>Reintentar</h3>
                </div>
              </Link>
            </>
            :
            <>
            </>
        }
        <Link to="/tips" className="w-10/12">
          <div className="w-full max-2xl:text-sm max-lg:text-xs h-10 text-white bg-transparent border-2 border-white flex justify-center inter400 items-center rounded-lg mt-5 hover:bg-slate-800 hover:cursor-pointer">
            <h3>Tips</h3>
          </div>
        </Link>
        <Link to="/" className="w-10/12">
            <div className="w-full max-2xl:text-sm max-lg:text-xs h-10 text-white bg-transparent border-2 border-white flex justify-center inter400 items-center rounded-lg mt-5 hover:bg-slate-800 hover:cursor-pointer">
              <h3>Volver al menu</h3>
            </div>
        </Link>
      </div>
    </div>
  )
}

export default Result