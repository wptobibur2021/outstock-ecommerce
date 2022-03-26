import React from 'react'
import Banner from '../../Components/Banner/Banner'
import Client from '../../Components/Client/Client'
import Discount from '../../Components/Products/Discount'
import Products from '../../Components/Products/Products'
import HomePromote from '../../Components/Promote/HomePromote'
import Slider from '../../Components/Slider/Slider'

const Home = () => {
    return (
        <div className="homePage">
            <Slider></Slider>
            <HomePromote></HomePromote>
            <Products></Products>
            <Banner></Banner>
            <Discount></Discount>
            <Client></Client>
        </div>
    )
}

export default Home