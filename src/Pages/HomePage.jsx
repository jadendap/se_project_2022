import { auto } from '@popperjs/core'
import React, {useEffect, useState} from 'react'
import './HomePage.css'
import Categories from "../Components/User/Categories"
import Featured from "../Components/User/Featured"

 const HomePage = ({ search, setSearch }) => {
  

  
  return (
    <div>
      <Featured/>
      <Categories/>
    </div>
  )
}

export default HomePage