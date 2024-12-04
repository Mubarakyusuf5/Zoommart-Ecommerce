import { faGamepad } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export const CategoryCard = () => {
  return (
    <div className='p-3 flex items-center justify-center border text-gray-800 overflow-hidden duration-300 transition hover:scale-110 rounded-full  h-[150px] w-[150px] '>
        {/* <img src="" alt="category" className=' w-full' /> */}
        <div className='flex items-center flex-col gap-4 -mb-6'>
            <FontAwesomeIcon icon={faGamepad} className='text-2xl' />
        <h3 className='font-bold text-lg'>Gaming</h3>
        </div>
    </div>
  )
}
