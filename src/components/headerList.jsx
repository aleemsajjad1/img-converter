import React from "react";
import { Link } from "react-router-dom";
const HeaderList = () => {
  return (
    <>
      <a
        className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100"
        role="menuitem"
      >
        <Link
          to="/convert-to-jpg"
          className="block text-sky-950 transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30  dark:focus:text-white lg:p-2 [&.active]:text-black/90"
        >
          JPG
        </Link>
      </a>
      <a
        className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100"
        role="menuitem"
      >
        <Link
          to="/convert-to-png"
          className="block text-sky-950 transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30  dark:focus:text-white lg:p-2 [&.active]:text-black/90"
        >
          PNG
        </Link>
      </a>
      <a
        className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100"
        role="menuitem"
      >
        <Link
          to="/convert-to-gif"
          className="block text-sky-950 transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30  dark:focus:text-white lg:p-2 [&.active]:text-black/90"
        >
          GIF
        </Link>
      </a>
      <a
        className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100"
        role="menuitem"
      >
        <Link
          to="/convert-to-avif"
          className="block text-sky-950 transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30  dark:focus:text-white lg:p-2 [&.active]:text-black/90"
        >
          AVIF
        </Link>
      </a>
      <a
        className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100"
        role="menuitem"
      >
        <Link
          to="/convert-to-tif"
          className="block text-sky-950 transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30  dark:focus:text-white lg:p-2 [&.active]:text-black/90"
        >
          TIFF
        </Link>
      </a>
      <a
        className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100"
        role="menuitem"
      >
        <Link
          to="/convert-to-svg"
          className="block text-sky-950 transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30  dark:focus:text-white lg:p-2 [&.active]:text-black/90"
        >
          SVG
        </Link>
      </a>
      <a
        className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100"
        role="menuitem"
      >
        <Link
          to="/convert-to-webp"
          className="block text-sky-950 transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30  dark:focus:text-white lg:p-2 [&.active]:text-black/90"
        >
          WEBP
        </Link>
      </a>
      <a
        className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100"
        role="menuitem"
      >
        <Link
          to="/convert-to-ico"
          className="block text-sky-950 transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30  dark:focus:text-white lg:p-2 [&.active]:text-black/90"
        >
          ICO
        </Link>
      </a>
      
      
    </>
  );
};

export default HeaderList;
