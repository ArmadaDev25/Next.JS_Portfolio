// This is the Hero component that grabs the user's attention


import React from 'react'
import Hero_Content from '../sub/Hero_Content'

const Hero = () => {
    return(
        <div className='relative flex flex-col h-full w-full'>
            <video autoPlay muted loop className='rotate-180 absolute top-[-340px]'>
                <source src='/blackhole.webm' type='video/webm'/>

            </video>
            <Hero_Content />
        </div>
    )

}
export default Hero