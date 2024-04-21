import React from 'react'

interface  Props {
  pharasesSelected :  any
}


const Pharase:React.FC<Props> = ({pharasesSelected}) =>{
  return (
    <div className='bg-violet-500 hover:bg-violet-300 p-10 rounded hover:cursor-pointer text-white transition-all duration-300 ease-linear hover:text-black space-y-3' >
      <p className='flex gap-5'>
        <span className='font-semibold'>
        Frase: 
        </span>
        <span>{pharasesSelected.phrase}</span>
      </p> 
      <p className='flex gap-5'>
        <span className='font-semibold'>
          Autor: 
        </span>
        <span>{pharasesSelected.author}</span>
      </p>
    </div>

  )
}

export default Pharase