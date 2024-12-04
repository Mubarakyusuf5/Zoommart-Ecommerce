import React from 'react';
import { Link } from 'react-router-dom';

export const CheckoutPage = () => {
  return (
    <>
    <div className='bg-white py-5 px-8 sticky top-0 shadow-sm flex justify-between items-center'>
    <div className="text-3xl font-extrabold text-blue-600">
            <Link to="/" className="hover:text-blue-500">
              Zoommart
            </Link>
          </div>
      <div className='text-3xl font-extrabold text-gray-800'>Checkout</div>
      <div className='opacity-0'>hdihihihvhivhihhuh</div>
    </div>
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-md overflow-hidden">
        {/* Header */}
        

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
          {/* Delivery Options */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-semibold mb-4">1. CHOOSE DELIVERY OPTION</h2>

            {/* Delivery to me */}
            <div className="border rounded-md p-4 mb-4">
              <div className="flex items-center mb-2">
                <input type="radio" name="deliveryOption" defaultChecked className="h-5 w-5 text-blue-600" />
                <label className="ml-3 text-lg font-medium">Deliver to me</label>
              </div>
              <div className="bg-gray-50 p-4 rounded-md mb-2">
                <p className="text-gray-700 mb-3">Hi MUBARAK, click on Add Address to specify a delivery address.</p>
                <button className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700">
                  Add Delivery Address
                </button>
              </div>
              <p className="text-sm text-gray-500">
                Your item should be delivered to you in about 5 working days within katsina, and 7 to 14 days outside Katsina.
              </p>
            </div>

            {/* Pickup from Store */}
            <div className="border rounded-md p-4 mb-4">
              <div className="flex items-center mb-2">
                <input type="radio" name="deliveryOption" className="h-5 w-5 text-blue-600" />
                <label className="ml-3 text-lg font-medium">Pickup from a Store</label>
              </div>
              <div className="bg-gray-50 p-4 rounded-md mb-2">
                <p className="text-gray-700 mb-3">Select a pickup location in your area from our 26 locations nationwide.</p>
                <button className="bg-gray-300 text-gray-700 py-2 px-6 rounded-md cursor-not-allowed">
                  Select Pickup Location
                </button>
              </div>
            </div>

            {/* Delivery Options */}
            {/* <h3 className="text-lg font-semibold mb-3">Delivery Options:</h3>
            <div className="flex items-center mb-2">
              <input type="radio" name="deliveryType" defaultChecked className="h-5 w-5 text-blue-600" />
              <label className="ml-3">
                <span className="font-medium">KongaNow - (1 - 6 hours Estimated delivery time)</span>
                <p className="text-sm text-gray-500">Same day delivery available on select products in Lagos and Abuja.</p>
              </label>
            </div>
            <div className="flex items-center">
              <input type="radio" name="deliveryType" className="h-5 w-5 text-blue-600" />
              <label className="ml-3">
                <span className="font-medium">Standard Delivery</span>
                <p className="text-sm text-gray-500">(3 - 5 Business days Estimated)</p>
              </label>
            </div> */}
          </div>

          {/* Order Details */}
          <div className="bg-gray-50 p-6 rounded-md shadow-inner">
            <h3 className="text-xl font-semibold mb-4">ORDER DETAILS</h3>
            <div className="space-y-3 mb-4">
              <div className="flex justify-between">
                <span>Chicken Super Saver Pack - 100 Cubes</span>
                <span className="font-medium">₦4,950</span>
              </div>
              <div className="text-sm text-gray-500">Quantity: 3</div>
              <div className="text-blue-600">+ delivery fee: ₦5,377</div>
            </div>
            <div className="border-t pt-4 space-y-2">
              <div className="flex justify-between">
                <span className="font-semibold">Sub Total:</span>
                <span>₦4,950</span>
              </div>
              <div className="flex justify-between text-lg font-semibold">
                <span>Total:</span>
                <span>₦10,327</span>
              </div>
            </div>
            <button className="w-full mt-6 bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition">
              Confirm and Pay
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
