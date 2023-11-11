import React, { useEffect, useState } from 'react'
import data from '../../data/data.json'
import { Link } from 'react-router-dom';

const Tips = () => {
    
  const [tips, setTips] = useState(data.tips);
  const [tip, setTip] = useState(null);
  const [ended, setEnded] = useState(false)

  useEffect(() => {
    showRandomTip();
  }, []);

  const showRandomTip = () => {
    if (tips.length > 0) {
      const randomIndex = Math.floor(Math.random() * tips.length);
      const randomTip = tips[randomIndex];
      setTip(randomTip);
      console.log(randomTip)
      const updatedTips = tips.filter((_, index) => index !== randomIndex);
      setTips(updatedTips);
    } else {
      console.log('No quedan más tips por mostrar');
    }
  };

  const endTips = () => {
    setEnded(true)
  }

  return (
    <>
    {tip && (
        <div className="w-6/12 h-fit bg-slate-700 flex items-center flex-col rounded-lg max-md:w-11/12 max-sm:w-[97%] max-sm:h-[98%] max-sm:justify-around">
            <div className='flex flex-col items-center'>
              <h1 className="text-5xl inter600 text-white mt-5 mb-1">Tip</h1>
              {
                ended == true ?
                <>
                <h2 className="text-2xl inter400 text-gray-300 mb-3 max-sm:text-lg">Pensamiento computacional</h2>
                </>
                :
                <>
                <h2 className="text-2xl inter400 text-gray-300 mb-3">{tip.title}</h2>
                </>
              }
            </div>
            <div className="w-10/12 flex flex-col items-center max-sm:w-11/12">
              {
                ended == true ?
                <>
                  <div className='w-10/12 flex justify-center flex-col items-center'>
                      <p className=' text-white text-md mt-2 inter600 text-center'>Perfecto, ya viste todos los tips disponibles</p>
                      <p className=' text-white text-md mt-2 inter400 text-center'>Recordá que esto es simplemente recuerdo, por lo que necesitaras leer antes</p>
                  </div>
                </>
                :
                <>
                  <p className="text-white text-md inter400 mt-2 max-2xl:text-sm">{tip.tip}</p>
                  <div className="mt-4 w-full">
                      <div className="w-full text-xs text-white flex justify-between items-center h-8 rounded-t-lg bg-slate-900">
                          <p className="ml-3">python</p>
                      </div>
                      <div className="bg-black rounded-b-lg text-white p-5 max-2xl:text-sm max-lg:text-xs">
                          <code className="whitespace-pre-wrap">
                              {tip.code}
                          </code>
                      </div>
                  </div>
                  <div className="w-full flex text-white text-md inter400 mt-3 max-2xl:text-sm max-lg:text-xs">
                    <p>Este codigo imprime: {tip.print}</p>
                  </div>
                </>
              }
              {tips.length == 0 ? 
              ended === true ? 
              <>
              </>
              :
              <>
                <div onClick={endTips} className="w-full max-2xl:text-sm max-lg:text-xs h-10 text-white bg-transparent border-2 border-white flex justify-center inter400 items-center rounded-lg mt-5 hover:bg-slate-800 hover:cursor-pointer">
                  <h3>Terminar</h3>
                </div>
              </>
              : 
              <>
                <div onClick={showRandomTip} className="w-full max-2xl:text-sm max-lg:text-xs h-10 text-white bg-transparent border-2 border-white flex justify-center inter400 items-center rounded-lg mt-5 hover:bg-slate-800 hover:cursor-pointer">
                  <h3>Siguiente</h3>
                </div>
              </> }
              <Link to="/" className="w-full">
                <div className="w-full max-2xl:text-sm max-lg:text-xs h-10 text-white bg-transparent border-2 border-white flex justify-center inter400 items-center rounded-lg mt-5 hover:bg-slate-800 hover:cursor-pointer">
                  <h3>Volver al menu</h3>
                </div>
              </Link>
            </div>
        </div>
    )}
    </>
  )
}

export default Tips