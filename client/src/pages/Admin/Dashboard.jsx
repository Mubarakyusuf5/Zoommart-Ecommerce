import React, { useState } from 'react'
import { Sidebar } from '../../components/sidebar/Sidebar'
import { AdminNavbar } from '../../components/navbar/AdminNavbar'

export const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
const toggleMenu = () => setIsOpen((prevState) => !prevState);
  return (
    <div className='flex'>
      <Sidebar isOpen={isOpen} />
      <div>
        <AdminNavbar onClick={toggleMenu} />
        <div className=' p-3 lg:py-3 lg:px-6' >
          main
        </div>
      </div>
    </div>
  )
}
