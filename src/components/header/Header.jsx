import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from "../../assets/Logo (2).svg"


export const LINKS = [
  {
    id:1,
    name: "Home",
    path: "/",
  },
  {
    id:3,
    name: "Service",
    path: "/service",
  },
  {
    id:4,
    name: "Company",
    path: "/company",
  },
  ,
  {
    id:5,
    name: "Career",
    path: "/career",
  },
  ,
  {
    id:6,
    name: "Contact",
    path: "/contact",
  },
  {
    id:7,
    name: "Login",
    path: "/login",
  }
  
]

const Header = () => {
  return (
    <header id='header' className='bg-blue-950 border-b-[1px] border-b-slate-600 flex flex-wrap'>
        <nav className='container py-6 flex flex-wrap justify-between'>
              <div className='h-8'>
                 <a href="#"><img className='h-full' src={logo} alt="" /></a> 
              </div>
              <div className='flex flex-wrap gap-10'>
                {
                  LINKS?.map((link)=> (
                    <NavLink key={link.id} className='text-white flex items-center gap-1' to={link.path}>
                      <span className='text-[19px] hover:text-orange-500 hover:scale-110 transform transition duration-300'>{link.name}</span>
                    </NavLink>
                  ))
                }    
              </div>   
        </nav>
          
    </header>
  )
}

export default Header

