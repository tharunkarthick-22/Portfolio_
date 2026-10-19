import React from 'react'
import Navbar from './Navbar'
import { TypingAnimation } from './ui/typing-animation'

const Home = () => {
  return (
    <div className='flex justify-between'>
        <div>
        <h2 className='text-2xl md:text-3xl'>Tharun <span className='text-zinc-600 dark:text-zinc-400'>J</span></h2>
        <h3 className='text-md md:text-xl h-20'><TypingAnimation words={["Frontend Developer","React Developer", "FullStack Developer"]} loop={true} typeSpeed={150} deleteSpeed={75}></TypingAnimation></h3>
        </div>
        <Navbar></Navbar>
    </div>
  )
}

export default Home