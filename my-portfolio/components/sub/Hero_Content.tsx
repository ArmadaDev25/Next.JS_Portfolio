"use client";
import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromTop } from '@/utility/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'


const Hero_Content = () => {
    
    return (
        <motion.div 
        initial="hidden"
        animate="visible"
        className ='flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]'>
        <div className='h-full w-full flex flex-col gap-5 justify-center m-auto text-start'>
            <motion.div
            variants={slideInFromTop}
            className='welcome-box py-15px border border-[#7042f88b] opacity-[0.9]'>
                <SparklesIcon className='text-[#b49bff] mr-[10px] h-5 w-5' />
                <h1>Portfolio</h1>

            </motion.div>



            <motion.div
            variants={slideInFromLeft(0.5)}
            className='flex flex-col gap-6 mt-6 text-6x1 text-bold text-white max-w-[600px] w-auto h-auto'>
                John K
                <span className="text-transparent  bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Software Engineer </span>
                and Game QA Professional
            </motion.div>

            
            <motion.p
            variants={slideInFromLeft(0.8)}
            className="text-lg text-gray-400 my-5 max-w-[600px]">
                I'm a Software Engineer with experienced with building mutiple full stack web 
                applications in various languages and frameworks including Javascript, React, Next.js, Django and several others. 

            </motion.p>
            <motion.a
            variants={slideInFromLeft(1)}
            className='py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]'>
                Learn More!

            </motion.a>




        </div>

    

        </motion.div>

    )
    

}
export default Hero_Content