import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Product_Details from '../pages/Product_Details'

function Routers() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product-details/:title/:id" element={<Product_Details />} />
        </Routes>
    )
}

export default Routers