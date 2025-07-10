import "./Header.css";
import logo from "../../assets/images/logo.svg";
import searchIcon from "../../assets/images/searchIcon.svg";
import React, { useState } from 'react';
import Carousel from "../Carousel/Carousel";
 
const Header = () => {
    const [searchInput, setSearchInput] = useState('');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
 
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
 
    const handleSubmit = (event) => {
        event.preventDefault();
        if (searchInput.trim() === '') {
            alert('Search input cannot be empty!');
        } else {
            const bingSearchUrl = `https://www.bing.com/search?q=${encodeURIComponent(searchInput)}`;
            window.location.href = bingSearchUrl;
        }
    };
 
    const handleInputChange = (event) => {
        setSearchInput(event.target.value);
    };
 
    return (
        <section className="HeaderSection">
            <div className="Header">
                <div className="HamburgerMenu" onClick={toggleMenu}>
                    <div className={`Icon ${isMenuOpen ? 'open' : ''}`}>
                        <div className="Line"></div>
                        <div className="Line"></div>
                        <div className="Line"></div>
                    </div>
                </div>
 
                <img id="logoid" src={logo} alt="logo" />
 
                <div className="MobileSearchIcon">
                    <img src={searchIcon} alt="Search" height={26} />
                </div>
 
                <div className={`Navlinks ${isMenuOpen ? 'open' : ''}`}>
                    <ul>
                        <li><a href="./">Home</a></li>
                        <li><a href="./">About Us</a></li>
                        <li><a href="./">Services</a></li>
                        <li><a href="./">Contact Us</a></li>
                    </ul>
                </div>
 
                <div className={`SearchBox ${isMenuOpen ? 'open' : ''}`}>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            id="searchText"
                            value={searchInput}
                            onChange={handleInputChange}
                            placeholder="Search"
                        />
                        <button type="submit"><img src={searchIcon} alt="Search" height={26} /></button>
                    </form>
                </div>
 
                <div className={`UserProfile ${isMenuOpen ? 'open' : ''}`}>
                    <img src={require("../../assets/images/pfp.png")} alt="Profile" />
                    <div className="ProfileDropdown">
                        <select name="profile" id="profile">
                            <option value="name">John Doe</option>
                        </select>
                    </div>
                </div>
            </div>
 
            <Carousel />
        </section>
    );
};
 
export default Header;