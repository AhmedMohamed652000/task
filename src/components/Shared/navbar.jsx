import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="bg-gray-800 text-white p-4  fixed h-[70px] w-full">
            <div className="container mx-auto flex justify-start items-center">
                <Link to={'/'} className="text-lg font-bold">
                   Dubi Sign
                </Link>
               
            </div>
        </nav>
    );
}

export default Navbar;
