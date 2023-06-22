import React from 'react'
import { Header } from './header'
import { Footer } from './footer'


export const Layout = ({children}) => {
   
  return (
  <>
    <div className='header'>
        <Header/>
    </div>
    <div >
        {children}
    </div>
    <div className='footer'>
        <Footer/>
    </div>

    </>
   
  )
}
