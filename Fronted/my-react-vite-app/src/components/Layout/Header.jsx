import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../context/auth';
import { useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
const Header = () => {
  const [auth, setAuth] = useAuth(); // Correct destructuring
  const navigate = useNavigate();

  const handlelogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: null,
    });
    localStorage.removeItem('auth');
  };

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
                  onClick={handlelogout}
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
            <div className='relative'>
              <button
                className='hover:underline'
                onClick={() => {
                  if (auth?.user?.role === 1) {
                    navigate('/AdminDashboard');
                  } else {
                    navigate('/AdminDashboard');
                  }
                }}
              >
                Dashboard
              </button>
              <select
                className='absolute top-full left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10'
                onChange={(e) => {
                  setAuth({
                    ...auth,
                    user: {
                      ...auth.user,
                      role: parseInt(e.target.value),
                    },
                  });
                }}
                value={auth?.user?.role}
                name='role'
                id='role'
              >
                <option value={1}>Admin</option>
                <option value={2}>User</option>
              </select>
            </div>
          </li>
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
      <Outlet />
    </nav>
  );
};

export default Header;
