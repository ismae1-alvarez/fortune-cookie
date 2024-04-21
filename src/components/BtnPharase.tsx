import React, { Fragment } from 'react'
import getRamdomNumber from '../utils/getRandomNumber'
import quotes from "../data/pharases.json";
import photo from "../data/photo.json"


interface Props  {
  setPharasesSelected :  any;
  setPhotoSelected : any;
}

const BtnPharase : React.FC<Props> = ({setPharasesSelected, setPhotoSelected}) => {


  
  
  const handleSetence = ()=>{
    const indexRadom = getRamdomNumber(quotes.length)
    setPharasesSelected(quotes[indexRadom])

    setPhotoSelected(photo[getRamdomNumber(photo.length)])

  }


  return (
    <Fragment>
      <button className='p-3 bg-violet-800 hover:bg-violet-500  rounded font-semibold text-white' onClick={ handleSetence}>
        Change Fraes
      </button>
    </Fragment>
  )
}

export default BtnPharase