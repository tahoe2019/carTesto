"use client"
import React from 'react'
import SearchManfacturer from './SearchManfacturer'
import {useState} from 'react';


const SearchBar = () => {
   const  [manufacturer, setmanufacturer] = useState('');



   const handleSearch = () =>{}
    

  return (
    
    <form className="searchbar" onSubmit={handleSearch}>

        <div className="searchbar__item">

            <SearchManfacturer
            
            manufacturer={manufacturer}
            setmanufacturer ={setmanufacturer}
            
            />

            



        </div>

    </form>
  )
}

export default SearchBar
