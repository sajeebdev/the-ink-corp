import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import logo2 from '../../asseats/logo2.png'
import './Navber.css'
const Naveber = ({children}) => {

  const [navber,setNavber]=useState(false);

  const changebackground = ()=>{
    if(window.scrollY >= 70){
      setNavber(true);
    }
    else{
      setNavber(false);
    }
  }
window.addEventListener('scroll',changebackground);

    return (
      <div class= "drawer drawer-end" >
      <input id="my-drawer-3" type="checkbox" class="drawer-toggle" /> 
      <div class="drawer-content flex flex-col">
     
        <div class= " active w-full navbar bg-primary ">
        <Link to='/' class="flex-1 px-2 mx-2"><img className='logo' src={logo2} alt="" /></Link>
          <div class="flex-none lg:hidden">
            <label for="my-drawer-3" class="btn btn-square btn-ghost text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </label>
          </div> 
         
          <div class="flex-none hidden lg:block ">
            <ul class="menu menu-horizontal gap-x-5">
     
            <li><a className='hover:text-gray-500 rounded-lg text-white font-bold' href='#home'>Home</a></li>
            <li><a className='hover:text-gray-500 rounded-lg text-white font-bold' href='#about'> About</a></li>
            <li><a className='hover:text-gray-500 rounded-lg text-white font-bold' href='#contact'> Contact us</a></li>
            <li><a className='hover:text-gray-500 rounded-lg text-white font-bold' href='#vision'> Our Vision</a></li>
            </ul>
          </div>
        </div>
   
    {children}
      </div> 
      <div class="drawer-side">
        <label for="my-drawer-3" class="drawer-overlay "></label> 
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
         
            <li><NavLink className='rounded-lg  font-bold mb-2' to='/'>Home</NavLink></li>
            <li><NavLink className='rounded-lg  font-bold  mb-2' to='/about'> About</NavLink></li>
            <li><NavLink className='rounded-lg  font-bold  mb-2' to='/contact'> Contact us</NavLink></li>
            <li><NavLink className='rounded-lg  font-bold  mb-2' to='/vision'> Our Vision</NavLink></li>
          
        </ul>
        
      </div>
    </div>
    );
};

export default Naveber;