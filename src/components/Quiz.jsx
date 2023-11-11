import React, {useState, useEffect} from 'react'
import { Link, useNavigate} from 'react-router-dom';
import data from '../../data/data.json'

const Quiz = () => {

    const [answers, setAnswers] = useState(data.quiz);
    const [currentQuestion, setcurrentQuestion] = useState(null)
    const [correctAnswer, setCorrectAnswer] = useState(null)
    const [wrongAnswer, setWrongAnswer] = useState(null)
    const [points, setPoints] = useState(0)

    const navigate = useNavigate();

    useEffect(() => {
        setRandomQuestion();
    },[])

    const setResult = () => {
        localStorage.setItem('points', points)
    }

    const handleResponse = (number) => {
        const element = currentQuestion.response.find(e => e.index === number)
        console.log(element)
        const isOkey = element.status === true
        if(isOkey){
            const newPoints = points + 10
            setPoints(newPoints)
            setCorrectAnswer(number)
        }else{
            const newPoints = points - 5
            setPoints(newPoints)
            setWrongAnswer(number)
        }
        console.log(element)
        console.log(isOkey)
    }
  
    const setRandomQuestion = () => {
        setCorrectAnswer(null)
        setWrongAnswer(null)
        if (answers.length > 0) {
          const randomIndex = Math.floor(Math.random() * answers.length);
          const randomQuestion = answers[randomIndex];
          setcurrentQuestion(randomQuestion);
          console.log(randomQuestion)
          const updatedQuestions = answers.filter((_, index) => index !== randomIndex);
          setAnswers(updatedQuestions);
        } else {
          console.log('No quedan más tips por mostrar');
        }
    };

    const endQuiz = () => {
        setResult()
        setTimeout(() => {
            navigate('/result');
        }, 2000);
    }
  
    return (
    <>
    {
        currentQuestion && (
            <div className="w-6/12 h-fit bg-slate-700 flex items-center flex-col rounded-lg max-md:w-11/12 max-sm:w-[97%] max-sm:h-[98%] max-sm:justify-around ">
                <div className='flex flex-col items-center'>
                    <h1 className="text-5xl inter600 text-white mt-5 mb-1 max-sm:text-3xl">Quiz</h1>
                    <h2 className="text-2xl inter400 text-gray-300 mb-3 max-sm:text-xl">{currentQuestion.title}</h2>
                </div>
            <div className="w-10/12 flex flex-col items-center max-sm:w-[95%]">
                <p className="text-white text-md inter400 mt-2 max-2xl:text-sm">Lee el siguiente codigo y elige una de las 4 opciones</p>
                {
                    currentQuestion.code === undefined ? <></> : 
                    <>
                        <div className="mt-4 w-full">
                            <div className="w-full text-xs text-white flex justify-between items-center h-8 rounded-t-lg bg-slate-900">
                                <p className="ml-3">python</p>
                            </div>
                            <div className="bg-black rounded-b-lg text-white p-5 max-2xl:text-sm max-lg:text-xs">
                                <code className="whitespace-pre-wrap">
                                    {currentQuestion.code}
                                </code>
                            </div>
                        </div>
                    </>
                }
                <div className="w-full flex text-white text-md inter400 mt-3 max-sm:text-sm">
                    <p>{currentQuestion.question}</p>
                </div>
                <div className='w-full'>
                    
                    {
                        (correctAnswer === null && wrongAnswer === null) ? 
                        currentQuestion.response.map((item, index) => {
                            return(
                                <div key={index} onClick={() => {handleResponse(index)}} className={` w-full h-10 text-white bg-transparent border-2 border-white flex justify-center inter400 items-center rounded-lg mt-5 hover:bg-slate-800 hover:cursor-pointer max-2xl:text-sm max-lg:text-xs`}>
                                    <h3 className='ml-2 mr-2'>{item.text}</h3>
                                </div>
                            )
                        })
                        :
                        (correctAnswer != null) ? 
                        <>
                            <p className='mb-1 text-white inter600 flex justify-center'>Acertaste!</p>
                            <div className={`w-full max-2xl:text-sm max-lg:text-xs h-10 text-white bg-green-900 border-2 border-green-500 flex justify-center inter400 items-center rounded-lg hover:cursor-pointer`}>
                                <h3 className='ml-2 mr-2'>{currentQuestion.response[correctAnswer].text}</h3>
                            </div>
                        </>
                        :
                        <>
                            <p className='mb-1 text-white inter600 flex justify-center'>No acertaste!</p>
                            <div className={`w-full max-2xl:text-sm max-lg:text-xs h-10 text-white bg-red-900 border-2 border-red-500 flex justify-center inter400 items-center rounded-lg hover:cursor-pointer`}>
                                <h3 className='ml-2 mr-2'>{currentQuestion.response[wrongAnswer].text}</h3>
                            </div>
    
                            <p className='text-white inter600 flex justify-center mt-3 mb-1'>La opcion correcta es:</p>
                            <div className={`w-full max-2xl:text-sm max-lg:text-xs h-10 text-white bg-green-900 border-2 border-green-500 flex justify-center inter400 items-center rounded-lg hover:cursor-pointer`}>
                                <h3 className='ml-2 mr-2'>{currentQuestion.response.find(e => e.status === true).text}</h3>
                            </div>
                        </> 
                    }
                </div>
                <div className='flex justify-between w-full items-center max-sm:flex-col-reverse sm:mb-7'>
                    <Link to="/" className="w-[45%]">
                        <div className="w-full max-2xl:text-sm max-lg:text-xs h-10 text-white bg-transparent border-2 border-white flex justify-center inter400 items-center rounded-lg mt-5 hover:bg-slate-800 hover:cursor-pointer">
                          <h3>Volver al menu</h3>
                        </div>
                    </Link>
                    {
                        (correctAnswer != null || wrongAnswer != null) ?
                        
                        answers.length == 0 ? 
                        <>
                            <div onClick={endQuiz} className={`w-[45%] max-2xl:text-sm max-lg:text-xs h-10 text-white bg-transparent border-2 border-white flex justify-center inter400 items-center rounded-lg mt-5 hover:bg-slate-800 hover:cursor-pointer`}>
                                <h3>Terminar</h3>
                            </div>
                        </>
                        :
                        <>
                            <div onClick={setRandomQuestion} className={`w-[45%] max-2xl:text-sm max-lg:text-xs h-10 text-white bg-transparent border-2 border-white flex justify-center inter400 items-center rounded-lg mt-5 hover:bg-slate-800 hover:cursor-pointer`}>
                                <h3>Siguiente</h3>
                            </div>
                        </>
                        
                        :
                        <>
                            <div className={`w-[45%] h-10 text-gray-500 max-2xl:text-sm max-lg:text-xs bg-transparent border-2 border-gray-500 flex justify-center inter400 items-center rounded-lg mt-5`}>
                                <h3>Siguiente</h3>
                            </div>
                        </>
                    }
                </div>
            </div>
        </div>
        )
    }
    </>
  )
}

export default Quiz