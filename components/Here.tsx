"use client";
import React from 'react'
import Image from 'next/image'
import { CustomButton } from '.'

const Here = () => {

    const handlescroll  = () => {


    }


  return (
    <div className='hero'>

        <div className='flex-1 p-36 padding-x'>

            <h1 className='hero__title'>
                3D METAL MAKER  TEST HERE CODE PLACE :
            </h1>

            <p className='title__subtitle'> you find anything seamless and effortlessly </p>


            <CustomButton
            title="Explore cars"
            containerStyles="bg-primary-blue text-white rounded-full mt-10"
            handleclick={handlescroll}/>
        </div>

        <div className="hero__image-container">

            <div className="hero__image ">


               

                <Image  src="/c.png" alt="here" fill className="object-contain transition duration-300 ease-in-out hover:scale-110"/>

                </div>

                <div className="hero__image-overlay"></div>

                


            


        </div>


        
      
    </div>
  )
}

export default Here
