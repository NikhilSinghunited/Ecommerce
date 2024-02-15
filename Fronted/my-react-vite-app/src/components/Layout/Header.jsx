import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../context/auth';

const Header = () => {
  const [auth, setAuth] = useAuth(); // Corrected the name of setAuth

  return (
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
          {!auth.user ? (
            <>
              <li>
                <NavLink
                  to='/login'
                  activeClassName='font-bold'
                  className='hover:underline'
                >
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/register'
                  activeClassName='font-bold'
                  className='hover:underline'
                >
                  Register
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink
                  to='/logout' // Change the link to logout route
                  activeClassName='font-bold'
                  className='hover:underline'
                >
                  Logout
                </NavLink>
              </li>
            </>
          )}
          <li>
            <NavLink
              to='/category'
              activeClassName='font-bold'
              className='hover:underline'
            >
              Category
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/cart'
              activeClassName='font-bold'
              className='hover:underline'
            >
              Cart
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
