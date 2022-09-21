import React from 'react';

const Menubar = () => {
    const menuItems = <>
        <li><a href="#home">Home</a></li>
        <li><a href="#project">Project</a></li>
        <li><a href="#skill">Skill</a></li>
        <li><a href="#blogs">Blogs</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
    </>

    return (
        <div className="navbar bg-transparent text-gray-200 shadow-lg sticky top-0 z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0 gap-2">
                    {menuItems}
                </ul>
            </div>
        </div>
    );
};

export default Menubar;