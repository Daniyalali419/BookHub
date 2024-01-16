import React from 'react'
import Navbar from '../Navbar/Navbar';
import Searchform from '../Searchform/Searchform';


import "./Header.css"

function Header() {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar/>
    
            <div className='header-content flex flex-c text-center text-white'>
          
                <h2 className='header-title text capitalize'> Find your book of Choice..!</h2><br/>
                <p className='header-text fs-26 fw-5'>"I have always imagined that paradise will be a kind of a Library "</p>
                <Searchform/>

            </div>
            
        </header>
    </div>
  )
}

export default Header