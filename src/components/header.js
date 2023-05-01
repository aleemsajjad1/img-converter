// import { GiConvergenceTarget } from "react-icons/gi";
// import { Link } from "react-router-dom";
// import { useState } from "react";
// import MobileDrawer from "./MobileDrawer";
import HeaderList from "./headerList";
// function Header() {
//   const [open, setOpen] = useState(false);

//   const handledrawer = () => {
//     setOpen(true);
//   };
//   const onClose = () => {
//     setOpen(false);
//   };
//   return (
//     <div className="bg-white">
//       {/* <nav
//         className="relative flex w-full items-center justify-between bg-white py-4 text-neutral-600 shadow-lg   md:flex-wrap md:justify-start"
//         data-te-navbar-ref
//       >
//         <div className="flex w-full flex-wrap items-center justify-between px-3">
//           <Link to="/">
//             <span className="text-3xl italic font-extrabold text-blue-600 flex">
//               <GiConvergenceTarget className="mt-1 mr-3" /> Converter
//             </span>
//           </Link>
//           <div className="flex items-center">
//             <button
//               onClick={handledrawer}
//               className="border-0 bg-transparent px-2 text-xl leading-none transition-shadow duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700  dark:focus:text-white lg:hidden"
//               type="button"
//               data-te-collapse-init
//               data-te-target="#navbarSupportedContentX"
//               aria-controls="navbarSupportedContentX"
//               aria-expanded="false"
//               aria-label="Toggle navigation"
//             >
//               <span className="[&>svg]:w-5">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke-width="1.5"
//                   stroke="currentColor"
//                   className="h-7 w-7"
//                 >
//                   <path
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                     d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
//                   />
//                 </svg>
//               </span>
//             </button>
//             <MobileDrawer open={open} onClose={onClose}/>
//           </div>

//           <div
//             className="!visible hidden grow basis-[100%] items-center lg:!flex lg:basis-auto"
//             id="navbarSupportedContentX"
//             data-te-collapse-item
//           >
//              <ul
//               className="mr-auto flex flex-col lg:flex-row pl-10"
//               data-te-navbar-nav-ref
//             >
//            <HeaderList/>
//            </ul>
//              <MobileDrawer open={open} onClose={onClose}>
//              <ul
//               className="mr-auto flex flex-col pl-5"
//               data-te-navbar-nav-ref
//             >
//              <HeaderList/>
//              </ul>
//             </MobileDrawer>
//           </div>
//           <div className="mr-3">
//             <Link to="/subscription">Subscription</Link>
//           </div>
//         </div>
//       </nav> */}

//     </div>
//   );
// }

// export default Header;

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { GiConvergenceTarget } from "react-icons/gi";

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-gray-800">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          <div className="flex items-center">
            <Link to="/">
              <span className="text-3xl italic font-extrabold text-white flex">
                <GiConvergenceTarget className="mt-1 mr-3" /> Converter
              </span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <div className="relative ml-3">
                <button
                  onClick={toggleDropdown}
                  className="relative flex block rounded-md bg-gray-800 p-2 focus:outline-none focus:bg-gray-700"
                >
                  <span className="text-white font-bold">Converter</span>
                  <FontAwesomeIcon
                    color="#ffff"
                    className="ml-2 mt-1"
                    icon={faCaretDown}
                  />
                </button>
                {isDropdownOpen && (
                  <div className="absolute right-1 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div
                      className="py-1"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="user-menu"
                    >
                      <HeaderList />
                    </div>
                  </div>
                )}
              </div>

              <Link
                to="/support"
                className="relative ml-3 flex  z-10 block rounded-md bg-gray-800 p-2 focus:outline-none focus:bg-gray-700"
              >
                <span className="text-white font-bold">Support</span>
              </Link>
              <Link
                to="/subscription"
                className="relative ml-3 flex  z-10 block rounded-md bg-gray-800 p-2 focus:outline-none focus:bg-gray-700"
              >
                <span className="text-white font-bold">Subscription</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
