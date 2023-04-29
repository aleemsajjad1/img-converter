import React from 'react'
import { Link } from 'react-router-dom'
const HeaderList = () => {
  return (
    <>
    
              <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                <Link to="/jpg" className="block text-sky-950 transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30  dark:focus:text-white lg:p-2 [&.active]:text-black/90">
                  JPG
                </Link>
              </li>
              <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                <Link to="/png" className="block text-sky-950 transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30  dark:focus:text-white lg:p-2 [&.active]:text-black/90">
                  PNG
                </Link>
              </li>
              <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                <Link  to="/gif"className="block text-sky-950 transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30  dark:focus:text-white lg:p-2 [&.active]:text-black/90">
                  GIF
                </Link>
              </li>
              <li className="mb-2 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                <Link to="/avif" className="block text-sky-950 transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30  dark:focus:text-white lg:p-2 [&.active]:text-black/90">
                  AVIF
                </Link>
              </li>
              <li className="mb-2 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                <Link to="/tif" className="block text-sky-950 transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30  dark:focus:text-white lg:p-2 [&.active]:text-black/90">
                  TIFF
                </Link>
              </li>
              <li className="mb-2 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                <Link to="/svg" className="block text-sky-950 transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30  dark:focus:text-white lg:p-2 [&.active]:text-black/90">
                  SVG
                </Link>
              </li>
              <li className="mb-2 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                <Link to="/webp" className="block text-sky-950 transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30  dark:focus:text-white lg:p-2 [&.active]:text-black/90">
                  WEBP
                </Link>
              </li>
              <li className="mb-2 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                <Link to="/ico" className="block text-sky-950 transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30  dark:focus:text-white lg:p-2 [&.active]:text-black/90">
                  ICO
                </Link>
              </li>
          
    </>
  )
}

export default HeaderList