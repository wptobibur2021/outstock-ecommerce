import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from '../Components/Common/Footer/Footer'
import Navbar from '../Components/Common/Navbar/Header'
import Home from '../Pages/Home/Home'
import Shop from '../Pages/Shop/Shop'
const RouterNav = () => {
    return (
        <BrowserRouter>
            <Navbar></Navbar>
            <Routes>
                <Route>
                    <Route path="/" element={<Home></Home>}></Route>
                    <Route path="/shop" element={<Shop></Shop>}></Route>
                </Route>
            </Routes>
            <Footer></Footer>
        </BrowserRouter>
    )
}

export default RouterNav