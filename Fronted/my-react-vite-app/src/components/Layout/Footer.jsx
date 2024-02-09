import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-gray-800 text-gray-300 py-6 mt-auto'>
      <div className='container mx-auto flex flex-col items-center'>
        <h4 className='text-xl font-bold mb-4'>Footer Title</h4>
        <p className='text-sm mb-2'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className='flex space-x-4'>
          <a
            href='#'
            className='text-gray-300 hover:text-white transition duration-300'
          >
            About Us
          </a>
          <a
            href='#'
            className='text-gray-300 hover:text-white transition duration-300'
          >
            Services
          </a>
          <a
            href='#'
            className='text-gray-300 hover:text-white transition duration-300'
          >
            Contact Us
          </a>
        </div>
        <div className='mt-4'>
          <p>&copy; 2024 Your Website. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
