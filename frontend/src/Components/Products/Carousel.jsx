import React from 'react'
import './Single.css'
import { Image } from 'react-bootstrap'
import { FaEye, FaHeart, FaSlidersH, FaCartPlus } from "react-icons/fa"
const Carousel = () => {
    return (
        <div className="discountItem">
            <div className="discountImg p-relative">
                <a href="https://techbd71.com">
                    <Image src="/assets/img/product/product-1.jpg" fluid />
                    <Image fluid className="discountImg-2" src="/assets/img/product/product-2.jpg" />
                </a>
                <div className="discountAction p-absolute">
                    <a className="discountIcone" href="https://techbd71.com"><FaEye /></a>
                    <a className="discountIcone" href="https://techbd71.com"><FaHeart /></a>
                    <a className="discountIcone" href="https://techbd71.com"><FaSlidersH /></a>
                </div>
            </div>

            <div className="discountText">
                <div className="discountInnerText">
                    <div className="discountTitle">
                        <h4><a href="https://techbd71.com">Wooden container Bowl</a></h4>
                    </div>
                    <div className="discountPrice p-relative">
                        <span>$96.00</span>
                        <span className="oldPrice">$110.00</span>
                    </div>
                    <div className="addToCart p-absolute">
                        <a href="https://techbd71.com" className="addToCartText">Add to cart <FaCartPlus /></a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Carousel