import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import { logo } from './assets';
import { Home, CreatePost } from './page';

const App = () => (
  <BrowserRouter>
    <header className="w-full flex justify-between items-center bg-white sm:px-8 px-5 py-4 border-b border-b-[#e6ebf4]">
      <Link to="/">
        <img src={logo} alt="logo" className="w-14 object-contain" />
      </Link>

      <Link to="/create-post" className="font-inter font-medium bg-[#3BB143] text-white px-4 py-2 rounded-md"> Create Now </Link>
    </header>
    <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
    </main>
    <footer className='w-full flex justify-between items-center bg-white text-s sm:px-8 px-2 py-3 border-b border-b-[#e6ebf4]'>
    <h6> ImaGen by Adithya </h6>
    </footer>
  </BrowserRouter>
);

export default App;