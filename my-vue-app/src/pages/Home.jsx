import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemProvider'

export const Home = () => {

    const {theme} = useContext(ThemeContext)
      console.log(theme)
  return (
    <div>
    <h2>welcome to Home Page.</h2>


    </div>
  )
}
