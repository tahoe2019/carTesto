
"use client"
import usestate, { useState,Fragment } from 'react';
import Image from 'next/image'
import { Combobox,Transition } from '@headlessui/react'
import { SearchManfacturerProbs } from '@/types'
import React from 'react'
import { manufacturers } from '@/constents';

const SearchManfacturer = ( {manufacturer,setmanufacturer}:SearchManfacturerProbs ) => {

  const  [query, setQuery] = useState('');

  const filterManufecturers=
  query === ""
  ? manufacturers
  :manufacturers.filter((item)=>(item.toLowerCase()
  .replace(/\s+/g,"")
  .includes(query.toLowerCase().replace(/\s+/g,""))
  ))



  return (





    <div className="search-manufacturer">

      <Combobox>
        <div className="relative w-full">

          <Combobox.Button className="absolute top-[14px]" >

           <Image 
           src="/car-logo.svg"
           width={20}
           height={20}
           className="m1-4"
           alt = "car logo"
           />           

          </Combobox.Button>

          <Combobox.Input
           className="search-manufacturer__input"
           placeholder="Volkers"           
           displayValue={(manufacturer:string)=> manufacturer} 
           onChange={(e) =>  setQuery(e.target.value)}    
           />
           <Transition as={Fragment}
           leave="transition ease-in duration-100"
           leaveFrom="opacity-100"
           leaveTo="opacity-0"
           afterLeave={()=>setQuery('')}>

            <Combobox.Options>
              {filterManufecturers.length === 0 && query !== "" ? (

                <Combobox.Option
                value={query}
                className="search-manufecturer__option">

                  create "{query}"
                </Combobox.Option>

              ): (
                filterManufecturers.map((item)=>(
                  <Combobox.Option
                    key={item}
                    className={({ active }) =>
                      `relative search-manufacturer__option ${
                        active ? "bg-primary-blue text-white" : "text-gray-900"
                      }`
                    }
                    value={item}
                  >
                    {({ selected, active }) => (
                      <>
                        <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
                          {item}
                        </span>

                        {/* Show an active blue background color if the option is selected */}
                        {selected ? (
                          <span className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active? "text-white": "text-pribg-primary-purple"}`}
                          ></span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))


              )}

              
            </Combobox.Options>


           </Transition>



        </div>


      </Combobox>
      
    </div>
  )
}

export default SearchManfacturer
