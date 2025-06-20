import { useState, useEffect } from 'react'
import './App.css'
import { } from 'react';
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

import HeroSection from './components/HeroSection';

function App() {
  const [light, setLight] = useState(false);

  useEffect(() => {
    if (light) {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
    }
  }, [light]);
  return (
    <>
      <div className='main-background'>
        <button
          onClick={() => setLight(!light)}
          className="absolute top-4 right-4 w-10 h-10 flex items-center border-[1.7px] border-black dark:border-white justify-center rounded-full dark:bg-black dark:text-white  bg-[#ffffffb3] text-black transition-colors duration-300"
        >
          {light ? (
            <SunIcon className="w-5 h-5" />
          ) : (
            <MoonIcon className="w-5 h-5" />
          )}
        </button>
        <div className="subtle-fire" />
        <HeroSection />
      </div>
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-black dark:text-white text-sm">
        @2025 Rabi Anando Sarkar || Optimized for Desktop (use dextop mode) • Mobile improvements coming soon
      </div>
    </>
  )
}

export default App
