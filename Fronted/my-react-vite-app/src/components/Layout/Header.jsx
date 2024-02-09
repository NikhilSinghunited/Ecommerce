import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <nav className='bg-gray-800 py-4'>
        <div className='container mx-auto flex justify-between items-center'>
          <NavLink to='/' className='text-white font-bold text-xl'>
            My Website
          </NavLink>
          <ul className='flex space-x-4 text-white'>
            <li>
              <NavLink
                to='/'
                exact
                activeClassName='font-bold'
                className='hover:underline'
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/about'
                activeClassName='font-bold'
                className='hover:underline'
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/contact'
                activeClassName='font-bold'
                className='hover:underline'
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
