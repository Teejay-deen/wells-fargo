import React from 'react'
import Logo from "../assets/Images/Logo.png"
import { GoSearch } from "react-icons/go";



const Header = () => {
  return (
    <header className='bg-red-600 py-6 px-6 mb-12 border-b'>
        <div className='container mx-auto flex justify-between items-center"'>
            <div className='cursor-pointer'>
               <img src={Logo} alt="" />
            </div>

            <div className='flex gap-5 '>
                <ul className='flex gap-5 text-white hover:cursor-pointer '>
                    <li>ATMs/location</li>
                    <li>Help</li>
                    <li>About</li>
                    <li>Espanol</li>
                    <GoSearch />
                </ul>

                <div className=' bg-white px-2 py-2 rounded-full transition'>
                    <div className='gap-4 font-semibold '>Sign On</div>
                </div>
            </div>
        </div>

    </header>
    
  )
}

export default Header