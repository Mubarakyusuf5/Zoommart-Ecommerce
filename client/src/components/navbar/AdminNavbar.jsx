import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export const AdminNavbar = ({onClick}) => {
  return (
    <nav className='p-3 lg:py-3 lg:px-6 bg-slate-300 '>
        <FontAwesomeIcon icon={faBars} size='lg' onClick={onClick} className='cursor-pointer' />
    </nav>
  )
}
