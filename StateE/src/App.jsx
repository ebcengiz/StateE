import { useState } from 'react'

import './App.css'
import Course from './components/kurs/Kurs'

function getRandomKurs(){
  const kurslarArray = ["Angular", "Bootstrap", "Csharp", "Web"];
  return kurslarArray[Math.floor(Math.random() * kurslarArray.length)];
}

function App() {

  const [kurslar, setKurslar] = useState([])
  
  const handleClick = () => {
    setKurslar([...kurslar, getRandomKurs()])
  }

  const kursList = kurslar.map((kurs, index) => {
          return <Course key={index} kursName={kurs} />
        });

  return (
    <>
    <div className='app'> <button onClick={handleClick}>Kurs Ekle</button>
        <div className='kurs-list'>
          {kursList}
        </div></div>
     

      {/* <Course /> */}
    </>
  )
}

export default App
