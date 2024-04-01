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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Software Engineer and</span>
                Game QA Professional
            </motion.div>



        </div>
    

        </motion.div>

    )
    

}
export default Hero_Content