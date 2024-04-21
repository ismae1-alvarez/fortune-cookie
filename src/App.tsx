import React, { Fragment, useState } from "react"
import quotes from "./data/pharases.json"
import Pharase from "./components/Pharase"
import BtnPharase from "./components/BtnPharase"
import getRamdomNumber from "./utils/getRandomNumber"
import photo from "./data/photo.json"

const App:React.FC=()=> {

  const indexRadom = getRamdomNumber(quotes.length)


  const [pharasesSelected, setPharasesSelected] =  useState<number | any >(quotes[indexRadom]);
  const [photoSelected, setPhotoSelected] = useState<number>(photo[getRamdomNumber(photo.length)])

  
  
  const objStyle  = {
    backgroundImage: `url(/img/fondo${photoSelected}.png)`
  }


  return (
    <Fragment>
      <div className="max-w-full min-h-screen bg-center bg-cover " style={objStyle}>
       <div className=" w-[90%] md:w-full mx-auto">

        <h2 className="text-center text-3xl font-bold  py-10 ">Galleta de la Fortuna</h2>
        
        <div className="flex flex-col justify-center items-center gap-5">
          <Pharase pharasesSelected={pharasesSelected}/>

          <BtnPharase setPharasesSelected={setPharasesSelected} setPhotoSelected={setPhotoSelected}/>
        </div>

        </div>
      </div>
    </Fragment>
  )
}

export default App
