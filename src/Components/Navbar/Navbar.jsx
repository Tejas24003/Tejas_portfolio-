import React from 'react';
import './Navbar.css';

const Navbar = ({ theme, settheme }) => {
  const toggle_mode = () => {
    settheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div
      className=" w-full h-15 flex justify-center items-center  text-xl ">
      <div className="flex fixed top-0  z-50  justify-between items-center w-full sm:w-1/2 mx-auto px-4 py-3 uppercase">
        <div className="font-bold text-xl">Tejas Srivastava</div>

        <button
          onClick={toggle_mode}
          className="p-2 rounded-full bg-gray-800 text-gray-200 hover:bg-gray-700 transition-colors"
        >
          {theme === 'light' ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-moon"
            >
              <path d="M13 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-sun"
            >
              <circle cx="12" cy="12" r="4"></circle>
              <path d="M12 2v2"></path>
              <path d="M12 20v2"></path>
              <path d="M4.93 4.93 6.34 6.34"></path>
              <path d="M17.66 17.66 19.07 19.07"></path>
              <path d="M2 12h2"></path>
              <path d="M20 12h2"></path>
              <path d="M6.34 17.66 4.93 19.07"></path>
              <path d="M19.07 4.93 17.66 6.34"></path>
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
