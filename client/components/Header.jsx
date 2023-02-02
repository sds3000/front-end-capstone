import React, { useState } from 'react'
import { FaSearchDollar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import JordanLogo from "./Logos/jordanlogo.png";
import ConverseLogo from "./Logos/converse-logo-vector.png";
import NikeLogo from "./Logos/NikeLogo.png"
import "./Header.css"
import { HeaderRight } from './HeaderRight';
import HeaderCarousel from './headercarousel';
import AddToBag from './ProductOptions/AddToBag';
import { useRecoilState } from "recoil";

const TABS = ["New & Featured", "Men", "Women", "Kids", "Sales"]
const headerContent = ["Find store", "|", "Help", "|", "Join Us", "|", "Sign In"]

export const Header = (props) => {
    const [activeTab, setActiveTab] = useState(false)
    const [counter, setCounter] = useState(1)
console.log("hello", )
const handleClick = () => {
    setCounter(counter + 1)
    console.log(counter)
}
    return (
        <div>
            {/* creating the jordan logo and converse logo */}

            <div className="HeaderBackground">
                <div className="HeaderLogos">

                    <div className='jordan'>
                        <img alt="Jordan Logo" src={JordanLogo} />
                    </div>

                    <div className='converse'>
                        <img alt="Converse Logo" src={ConverseLogo} />
                    </div>
                </div>

                {/* mapping throught variable headercount to display contents */}

                <div className='HeaderRight'>
                    {headerContent.map((content, index) => (
                        <HeaderRight key={index} content={content} />
                    ))}
                </div>

            </div>
            <div className='navBar'>
                <div className="NikeLogo">
                    <img alt='NikeLogo' src={NikeLogo}></img>
                </div>
                <div className="tabsContainer">
                    {TABS.map((tab, index) => (
                        <div key={index} className='dropdown'>
                            {tab}
                            <div className='dropdown-menu'>
                                <div>
                                    <div className='dropdown-heading'> New & Featured
                                    <div className='dropdown-links'>
                                        <a href='#' className="link">New Arrivals</a> <br></br>
                                        <a href='#' className="link">Snkrs launch Calender</a> <br></br>
                                        <a href='#' className="link">New and upcoming drops</a>
                                    </div>
                                    </div>
                                </div>
                                <div>
                                    <div className='dropdown-heading'>Shoes
                                    <div className='dropdown-links'>
                                        <a href='#' className="link">All Shoes</a> <br></br>
                                        <a href='#' className="link">Lifestyle</a> <br></br>
                                        <a href='#' className="link">Running</a>
                                    </div>
                                    </div>
                                </div>
                                <div>
                                    <div className='dropdown-heading'>Clothing
                                    <div className='dropdown-links'>
                                        <a href='#' className="link">All Clothing</a> <br></br>
                                        <a href='#' className="link">Top T-shirts</a> <br></br>
                                        <a href='#' className="link">Shorts</a>
                                    </div>
                                    </div>
                                </div>
                                <div>
                                <div className='dropdown-heading'> Accesories & Equipment
                                <div className='dropdown-links'>
                                    <a href='#' className="link">Bags & Backpacks</a> <br></br>
                                    <a href='#' className="link">Apple watch Nike</a> <br></br>
                                    <a href='#' className="link">Hats, Visors & Headbands </a>
                                </div>
                                </div>
                                </div>
                            </div> 
                            <div>
                            </div>
                        </div>
                    ))}

                    <div className='searchbar'>
                        <i className='magnifier'>
                            <FaSearchDollar />
                        </i>
                        <input className="input" type="text" placeholder='  Search ' />
                    </div>
                    <div className='heart'>
                        
                        <FaHeart />
                    </div>
                    <div className='shoppingBag'  onClick={handleClick}>
                        <a href="#" counter={counter}>
                        < FaShoppingBag />
                        </a>
                    </div>
                </div>
            </div>
            <HeaderCarousel />

        </div>

    )
}

export default Header