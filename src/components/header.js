import { GiConvergenceTarget } from "react-icons/gi";
import {Link} from "react-router-dom";
function Header() {
  return (
    <div className="bg-gray-50 ">
      {/* <header class="sticky top-0 z-30 w-full px-2 py-4 bg-white sm:px-4 shadow-xl">
        <div class="flex items-center justify-between mx-auto max-w-7xl">
          <a href="#">
            <span class="text-3xl italic font-extrabold text-blue-600 flex">
              <GiConvergenceTarget className="mt-1 mr-3" /> Converter
            </span>
          </a>
          <div class="flex justify-start space-x-4">
            <Link to="/page2">Route 2</Link>
            <Link to="/page3">Route 3</Link>
            <Link to="/page4">Route 4</Link>
          </div>
          <Link to="/page5">Route 5</Link>
          <div class="flex items-center space-x-1">
            <div class="inline-flex md:hidden">
              <button class="flex-none px-2 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 8h16M4 16h16"
                  />
                </svg>
                <span class="sr-only">Open Menu</span>
              </button>
            </div>
          </div>
        </div>
      </header> */}
      <nav
        class="relative flex w-full items-center justify-between bg-white py-2 text-neutral-600 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 dark:text-neutral-200 md:flex-wrap md:justify-start"
        data-te-navbar-ref
      >
        <div class="flex w-full flex-wrap items-center justify-between px-3">
          <Link to="/">
            <span class="text-3xl italic font-extrabold text-blue-600 flex">
              <GiConvergenceTarget className="mt-1 mr-3" /> Converter
            </span>
          </Link>
          <div class="flex items-center">
            <button
              class="border-0 bg-transparent px-2 text-xl leading-none transition-shadow duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white lg:hidden"
              type="button"
              data-te-collapse-init
              data-te-target="#navbarSupportedContentX"
              aria-controls="navbarSupportedContentX"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="[&>svg]:w-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-7 w-7"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </span>
            </button>
          </div>

          <div
            class="!visible hidden grow basis-[100%] items-center lg:!flex lg:basis-auto"
            id="navbarSupportedContentX"
            data-te-collapse-item
          >
            <ul
              class="mr-auto flex flex-col lg:flex-row pl-10"
              data-te-navbar-nav-ref
            >
              <li class="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                <Link to="/jpg" className="block text-sky-950 transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90">
                  JPG
                </Link>
              </li>
              <li class="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                <Link to="/png" className="block text-sky-950 transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90">
                  PNG
                </Link>
              </li>
              <li class="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                <Link  to="/gif"className="block text-sky-950 transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90">
                  GIF
                </Link>
              </li>
              <li class="mb-2 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                <Link to="/avif" className="block text-sky-950 transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90">
                  AVIF
                </Link>
              </li>
              <li class="mb-2 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                <Link to="/tif" className="block text-sky-950 transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90">
                  TIFF
                </Link>
              </li>
              <li class="mb-2 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                <Link to="/svg" className="block text-sky-950 transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90">
                  SVG
                </Link>
              </li>
              <li class="mb-2 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                <Link to="/webp" className="block text-sky-950 transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90">
                  WEBP
                </Link>
              </li>
              <li class="mb-2 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                <Link to="/ico" className="block text-sky-950 transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90">
                  ICO
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
