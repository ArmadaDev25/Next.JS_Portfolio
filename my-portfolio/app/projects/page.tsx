"use client";
import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromTop } from '@/utility/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'

export default function Projects() {
    return (
        <div className='relative flex flex-col h-full w-full'>
            <video autoPlay muted loop className='rotate-180 absolute top-[-340px]'>
                <source src='/blackhole.webm' type='video/webm'/>

            </video>

            <motion.div
            initial="hidden"
            animate="visible"
            className ='flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]'>
                <div className='h-full w-full flex flex-col gap-5 justify-center m-auto text-start'>
                <motion.div
                variants={slideInFromLeft(0.5)}
                className='flex flex-col gap-6 mt-6 text-6x1 text-bold text-white max-w-[600px] w-auto h-auto'>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Projects</span>
                </motion.div>
                </div>
            </motion.div>

            

           
        </div>

    )
}