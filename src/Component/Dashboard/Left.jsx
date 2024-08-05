import React, { useState } from 'react';
import './Home.css';
import { Link, useLocation } from 'react-router-dom';

function Left() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.pathname);

  const handleTabClick = (path) => {
    setActiveTab(path);
  };

  return (
    <div className="hidden md:flex md:flex-col md:py-36 md:w-[23%] md:justify-start md:p-5" id="bgnavbar">
      <nav>
        <div className="flex flex-col font-semibold">
        <Link 
            to="/dashboard" 
            className={`mb-2 px-2 py-2 rounded-md ${activeTab === '/dashboard' ? 'bg-gray-400 text-white' : 'bg-blue-950 text-white'}`}
            onClick={() => handleTabClick('/dashboard')}
          >
            <i className="fa-solid fa-book-open-reader p-3 text-white"></i>Dashboard
          </Link>
          <Link 
            to="/uploadresume" 
            className={`mb-2 px-2 py-2 rounded-md ${activeTab === '/uploadresume' ? 'bg-gray-400 text-white' : 'bg-blue-950 text-white'}`}
            onClick={() => handleTabClick('/uploadresume')}
          >
            <i className="fa-solid fa-upload p-3 text-white"></i>Upload Resume
          </Link>
          <Link 
            to="/resume" 
            className={`mb-2 px-2 py-2 rounded-md ${activeTab === '/resume' ? 'bg-gray-400 text-white' : 'bg-blue-950 text-white'}`}
            onClick={() => handleTabClick('/resume')}
          >
            <i className="fa-solid fa-file p-3 text-white"></i>AI Resume Builder
          </Link>
          <Link 
            to="https://blog.abroadium.com/category/candidate-resources/" 
            className={`mb-2 px-2 py-2 rounded-md ${activeTab === 'https://blog.abroadium.com/category/candidate-resources/' ? 'bg-gray-400 text-white' : 'bg-blue-950 text-white'}`}
            onClick={() => handleTabClick('https://blog.abroadium.com/category/candidate-resources/')}
          >
            <i className="fa-solid fa-paper-plane p-3 text-white"></i>Resources
          </Link>
          <Link 
            to="/skilltest" 
            className={`mb-2 px-2 py-2 rounded-md ${activeTab === '/skilltest' ? 'bg-gray-400 text-white' : 'bg-blue-950 text-white'}`}
            onClick={() => handleTabClick('/skilltest')}
          >
            <i className="fa-solid fa-paper-plane p-3 text-white"></i>Skill Test
          </Link>
          <Link 
            to="/" 
            className={`mb-2 px-2 py-2 rounded-md ${activeTab === '/' ? 'bg-slate-900 text-blue-900' : 'bg-gray-600 text-gray-400'}`}
            onClick={() => handleTabClick('/')}
          >
            <i className="fa-solid fa-user p-3 text-white"></i>Feed
          </Link>
          <Link 
            to="/" 
            className={`mb-2 px-2 py-2 rounded-md ${activeTab === '/' ? 'bg-slate-900 text-blue-900' : 'bg-gray-600 text-gray-400'}`}
            onClick={() => handleTabClick('/')}
          >
            <i className="fa-solid fa-book-open-reader p-3 text-white"></i>About
          </Link>
          <Link 
            to="/" 
            className={`mb-2 px-2 py-2 rounded-md ${activeTab === '/' ? 'bg-slate-900 text-blue-900' : 'bg-gray-600 text-gray-400'}`}
            onClick={() => handleTabClick('/')}
          >
            <i className="fa-solid fa-file p-3 text-white"></i>Education
          </Link>
          <Link 
            to="/" 
            className={`mb-2 px-2 py-2 rounded-md ${activeTab === '/' ? 'bg-slate-900 text-blue-900' : 'bg-gray-600 text-gray-400'}`}
            onClick={() => handleTabClick('/')}
          >
            <i className="fa-solid fa-pen p-3 text-white"></i>Projects
          </Link>
          <Link 
            to="/" 
            className={`mb-2 px-2 py-2 rounded-md ${activeTab === '/' ? 'bg-gray-400 text-white' : 'bg-blue-950 text-white'}`}
            onClick={() => handleTabClick('/')}
          >
            <i className="fa-solid fa-gear p-3 text-white"></i>Settings
          </Link>
          <Link 
            to="/" 
            className={`mb-2 px-2 py-2 rounded-md ${activeTab === '/' ? 'bg-gray-400 text-white' : 'bg-blue-950 text-white'}`}
            onClick={() => handleTabClick('/')}
          >
            <i className="fa-solid fa-right-to-bracket p-3 text-white"></i>Log Out
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Left;
