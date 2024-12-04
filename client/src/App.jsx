import React from 'react'
import { Routes, Route } from "react-router-dom"
import { Navbar } from './components/navbar/Navbar'
import { Login } from './auth/Login'
import { Cart } from './pages/Cart/Cart'
import { Home } from './pages/Home'
import { SingleProductPage } from './pages/Products/SingleProductPage'
import { Category } from './pages/Category/Category'
import { Register } from './auth/Register'
import { VendorIntroPage } from "./pages/Vendor/VendorIntroPage"
import { VendorDashboard } from './pages/Vendor/Dasboard/VendorDashboard'
import { AllProductPage } from './pages/Products/AllProductPage'
import { CheckoutPage } from './pages/Checkout/Checkoutpage'
import { Toaster } from "react-hot-toast";
import axios from "axios";
import { ScrollTop } from './components/ScrollTop'
import { Dashboard } from './pages/Admin/Dashboard'


axios.defaults.baseURL = "http://localhost:6000"
axios.defaults.withCredentials = true
export const App = () => {
  return (
    <div>
        {/* <Navbar /> */}
        <Toaster position="top-center" toastOptions={{ duration: 3000 }} />
        <ScrollTop />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path='/checkout' element={<CheckoutPage />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/categories' element={<Category />} />
        <Route path='/category/product' element={<SingleProductPage />} />
        <Route path='/products' element={<AllProductPage />} />
        <Route path='/sell-on-zoommart' element={<VendorIntroPage />} />
        <Route path='/seller/dashboard' element={<VendorDashboard />} />
        <Route path='/admin/dashboard' element={<Dashboard />} />

        <Route path='*' element={<h1>404 - Page not found</h1>} />
        </Routes>

    </div>
  )
}
