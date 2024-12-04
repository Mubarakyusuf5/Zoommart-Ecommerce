import React from 'react'
import { Navbar } from '../../components/navbar/Navbar'
import { Footer } from '../../components/Footer/Footer'
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Cart = () => {
  const navigate = useNavigate()
  const change = ()=>{
    navigate("/checkout")
  }
  return (
    <div>
      <Navbar />
      <div className='min-h-screen py-6 px-10 bg-gray-50'>
        <Link to="/" className='py-2 px-4 border-2 border-blue-600 transition duration-300 text-blue-600 hover:text-white hover:bg-blue-600 rounded'>  Continue Shopping</Link>

        <div className='mt-6 flex flex-col md:flex-row gap-6'>
          {/* cart table section */}
          <div className='p-3 bg-white shadow-md rounded text-sm'>
        <h2 className="text-2xl font-semibold mb-4">Shopping Cart</h2>
            <table className=' w-full md:w-[820px]  '>
              <thead className='bg-gray-200 text-left'>
                <tr>
                  <th className='p-2'>Item image</th>
                  <th className='p-2'>Item name</th>
                  <th className='p-2'>Price</th>
                  <th className='p-2'>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className='border-b'>
                  <td className='p-3'>img</td>
                  <td className='p-3'>bread</td>
                  <td className='p-3'>4000</td>
                  <td className='p-3'>delete</td>
                </tr>
                <tr className='border-b'>
                  <td className='p-3'>img</td>
                  <td className='p-3'>bread</td>
                  <td className='p-3'>4000</td>
                  <td className='p-3'>delete</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* order summary section */}
          <div className='bg-white shadow-md w-full lg:w-[380px] rounded'>
            <div className='p-3 border-b text-lg font-bold'>
              Order Summary
            </div>
            <div className='p-3 border-b'>
              jfbhbfebjb
            </div>
            <div className="p-3 border-b">
              <button className="p-2 w-full bg-green-600 rounded text-white transition duration-300 hover:bg-green-700 font-Bold" onClick={change}>Continue to Checkout</button>
            </div>
            <div className="p-3">
              card available
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
