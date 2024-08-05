import React, { useState, useContext, useEffect } from 'react';
import logo from './logo.png';
import './Navbar.css';
import '../Home/Home.css'
import { Link, useNavigate } from 'react-router-dom';
import Modal from '../Login/Modal';
import Login from '../Login/Login'
import Signup from '../Login/Signup';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [issignupOpen, setsignupOpen] = useState(false);
  

  return (
    <>
    <nav className="bg-white border border-gray-200" id='navbg'>
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="">
                <img src={logo} alt='logo' className=' w-full h-14'/>
            </a>
          </div>
          <div className="flex items-center">
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link to="/slide/0" className="text-blue-900 hover:text-yellow-500 px-3 py-2 rounded-md text-lg font-semibold">Resume Score</Link>
              <Link to="/slide/1" className="text-blue-900 hover:text-yellow-500 px-3 py-2 rounded-md text-lg font-semibold">AI Resume Builder</Link>
              <Link to="/slide/2" className="text-blue-900 hover:text-yellow-500 px-3 py-2 rounded-md text-lg font-semibold">AI Resume Fetch</Link>
              <Link to="/slide/3" className="text-blue-900 hover:text-yellow-500 px-3 py-2 rounded-md text-lg font-semibold">Resources</Link>
              <Link to="https://blog.sentryspot.co.uk/" target='_blank' className="text-blue-900 hover:text-yellow-500 px-3 py-2 rounded-md text-lg font-semibold">About Us</Link>
              {/* <Link to="/dashboard" target='_blank' className="text-white hover:text-yellow-500 px-3 py-2 rounded-md text-lg font-semibold">Doashboard</Link> */}
              <Link to="https://blog.sentryspot.co.uk/" target='_blank' className="text-blue-900 hover:text-yellow-500 px-3 py-2 rounded-md text-lg font-semibold">Blog</Link>
              {/* <Link to="/login" className="text-white px-2 py-2 text-lg font-semibold  rounded-xl " id='home_fourth'>Log in</Link> */}
              <button
          className="bg-blue-900 text-white px-4 py-2 rounded-md"
          onClick={() => setLoginOpen(true)}
        >
          Login
        </button>
              
              <button
          className="bg-blue-900 text-white px-4 py-2 rounded-md"
          onClick={() => setsignupOpen(true)}
        >
          Signup
        </button>
        
            </div>
             <div className="flex sm:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-900 hover:text-gray-700 focus:outline-none px-3 py-2 rounded-md text-sm font-medium"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
              </button>
            </div> 
            
          </div>
        </div>
        {isMenuOpen && (
          <div className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="/" className="text-white hover:text-yellow-500 block px-3 py-2 rounded-md text-base font-semibold">Resume</a>
              <a href="/" className="text-white hover:text-yellow-500 block px-3 py-2 rounded-md text-base font-semibold">CV</a>
              <a href="/" className="text-white hover:text-yellow-500 block px-3 py-2 rounded-md text-base font-semibold">Cover Letter</a>
              <a href="/" className="text-white hover:text-yellow-500 block px-3 py-2 rounded-md text-base font-semibold">Advice</a>
              <a href="/" className="text-white hover:text-yellow-500 block px-3 py-2 rounded-md text-base font-semibold">Login</a>
              <a href="/" className="text-white hover:text-yellow-500 block px-3 py-2 rounded-md text-base font-semibold">Contact Us</a>
            </div>
          </div>
        )}
      </div>
    </nav>
    <Modal isOpen={isLoginOpen} onClose={() => setLoginOpen(false)}>
        <Login />
      </Modal>
      <Modal isOpen={issignupOpen} onClose={() => setsignupOpen(false)}>
        <Signup />
      </Modal>
    </>
  );
};

export default Navbar;
