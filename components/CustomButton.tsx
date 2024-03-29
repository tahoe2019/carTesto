"use client";
import React from 'react'
import Image from 'next/image'
import { CustomButtonProbs } from '@/types';

const CustomButton = ({title,btnType,containerStyles,handleclick}:CustomButtonProbs) => {
  return (
    

    <button disabled={false}
    type={btnType || "button"}
    className={`custom-btn ${containerStyles}`}
    onClick={handleclick}>

        <span className={`flex-1`}>

            {title}



            
        </span>


    </button>



  )
}

export default CustomButton
