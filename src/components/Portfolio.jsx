import React from 'react'
import NinjaRunner from '../images/NinjaRunner.png'
import RevUp from '../images/RevUp.png'

const Portfolio = () => {
  return (
    <div >
        <h2 className='font-bold bg-yellow-300 text-4xl '>Games</h2>
        <div className='flex py-6'>
            <img src={NinjaRunner} alt='/' className='max-w-[400px] max-h-[400px] object-cover ml-16 px-4 ' />
            <div className='grid ml-5 px-4 py-10'>
                <p>Endless Ninja Runner</p>
                <p>Date: 2019</p>
                <h3>Description</h3>
                <p>A thekjehkeh kahdkfhdaskf k kherkehkeh </p>
            </div>
        </div>
        <div className='flex py-6'>
            <img src={RevUp} alt='/' className='max-w-[400px] max-h-[400px] object-cover ml-16 px-4' />
            <div className='grid ml-5 px-4 py-10'>
                <p>Rev Up: Car Racing Game</p>
                <p>Date: 2022</p>
                <h3>Description</h3>
                <p>A thekjehkeh kahdkfhdaskf k kherkehkeh </p>
            </div>
        </div>
        
    </div>
  )
}

export default Portfolio
