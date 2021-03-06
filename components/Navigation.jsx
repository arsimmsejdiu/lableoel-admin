import { useEffect } from "react";
import Image from 'next/image';
import moon from '../images/moon.svg';
import sun from '../images/sun.svg';

function Navigation({ setDarkTheme, darkTheme }) {
  useEffect(() => {
    const btn = document.querySelector("button.mobile-menu-button");
    const menu = document.querySelector(".mobile-menu");

    // add event listeners
    btn.addEventListener("click", () => {
      menu.classList.toggle("hidden");
    });
  });

  return (
    <div className="dark:bg-gray-700">
      <nav className="bg-gray-100">
        <div className="max-w-full mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-4">
              <div>
                <a
                  href="#"
                  className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900"
                >
                  <svg
                    className="h-6 w-6 mr-1 text-blue-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                  <span className="font-bold">LABLEOEL</span>
                </a>
              </div>

              <div className="hidden md:flex items-center space-x-1">
                <a
                  href="#"
                  className="py-5 px-3 text-gray-700 hover:text-gray-900"
                >
                  Dashboard
                </a>
                <a
                  href="#"
                  className="py-5 px-3 text-gray-700 hover:text-gray-900"
                >
                  Write Blog
                </a>
                <a
                  href="#"
                  className="py-5 px-3 text-gray-700 hover:text-gray-900"
                >
                  about
                </a>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-1">
              <a href="" className="py-5 px-3">
                Login
              </a>
              <a
                href=""
                className="py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300"
              >
                Signup
              </a>
              <button className="flex justify-center items-center px-3" type="button" onClick={() => setDarkTheme(!darkTheme)}>
                {darkTheme ? (
                  <Image src={sun} className="dark:text-gray-400" />
                ) : (
                  <Image src={moon} className="dark:text-gray-400" />
                )}
              </button>
            </div>

            <div className="md:hidden flex items-center">
              <button className="mobile-menu-button">
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="mobile-menu hidden md:hidden">
          <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">
            dashboard
          </a>
          <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">
            write a blog
          </a>
          <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">
            about
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
