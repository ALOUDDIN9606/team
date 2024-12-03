import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

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
    name: "Blog",
    path: "/blog",
  },
  ,
  {
    id:7,
    name: "Contact us",
    path: "/contact",
  },
]

const Header = () => {
  return (
    <header id='header' className='bg-blue-950'>
        <nav className='container py-5 flex flex-wrap justify-between'>
              <div>
                <img className='h-full' src="src/assets/Logo (2).svg" alt="" /> 
              </div>
              <div className='flex flex-wrap gap-5'>
                {
                  LINKS?.map((link)=> (
                    <NavLink key={link.id} className='text-white flex items-center gap-1' to={link.path}>
                      <span>{link.name}</span>
                    </NavLink>
                  ))
                }    
              </div>       
        </nav>
    </header>
  )
}

export default Header

