import React from 'react';
import "./style.scss";
import { NavLink } from 'react-router-dom';

const index = () => {
    return (
        <>
            <header className='bg-success w-100 p-4'>
                <nav className="nav d-flex justify-content-between">
                    <ul className="d-flex w-25 justify-content-between list-unstyled text-uppercase">
                        <li> <NavLink className={({ isActive }) => isActive ? "text-white fw-bold" : "text-white"} to="/" >Home</NavLink> </li>
                        <li> <NavLink className={({ isActive }) => isActive ? "text-white fw-bold" : "text-white"} to="/about" >About</NavLink> </li>
                    </ul>
                </nav>
            </header>
        </>
    );
};

export default index;