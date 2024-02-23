import React from 'react';
import { NavLink } from 'react-router-dom';

const AdminMenu = () => {
  return (
    <div className='relative inline-block text-left'>
      <button
        className='inline-flex justify-center w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-indigo-200'
        id='options-menu'
        aria-expanded='true'
        aria-haspopup='true'
      >
        Admin Menu
      </button>

      <div
        className='origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5'
        role='menu'
        aria-orientation='vertical'
        aria-labelledby='options-menu'
      >
        <div className='py-1' role='none'>
          <NavLink
            to='/Dasboard/admin/create-category'
            className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
            role='menuitem'
          >
            Create Category
          </NavLink>
          <NavLink
            to='/Dasboard/admin/create-product'
            className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
            role='menuitem'
          >
            Create Product
          </NavLink>
          <NavLink
            to='/Dasboard/admin/users'
            className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
            role='menuitem'
          >
            Manage Users
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default AdminMenu;
