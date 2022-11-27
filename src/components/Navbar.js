import React from 'react';
import { NavLink } from "react-router-dom"

//import icon navbar
import { HiHome } from 'react-icons/hi'
import { BsPersonFill } from 'react-icons/bs'
import { MdSearch } from 'react-icons/md';

import './Navbar.css'

const NavBar = () => {
    return (
        <footer>
            <NavLink to="/home" className="iconWrapper">
                <HiHome className="icon" />
                Home
            </NavLink>
            <NavLink to="/searchpage" className="iconWrapper">
                <MdSearch className="icon" />
                Search
            </NavLink>
            <NavLink to="/profile" className="iconWrapper ">
                <BsPersonFill className="icon " />
                Profile
            </NavLink>
        </footer>
    );
};

export default NavBar;