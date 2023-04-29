import { Link } from "react-router-dom";
function SecondHeader(props) {
  return (
    <div className="bg-gray-50 border-t ">
      <nav
        className="relative flex w-full items-center justify-between bg-white py-2 text-neutral-600 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 dark:text-neutral-200 md:flex-wrap md:justify-start"
        data-te-navbar-ref
      >
        <div className="flex w-full flex-wrap items-center justify-between px-3">
          <div className="flex items-center">
            <button
              className="border-0 bg-transparent px-2 text-xl leading-none transition-shadow duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white lg:hidden"
              type="button"
              data-te-collapse-init
              data-te-target="#navbarSupportedContentX"
              aria-controls="navbarSupportedContentX"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="[&>svg]:w-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="h-7 w-7"
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
            className="!visible hidden grow basis-[100%] items-center lg:!flex lg:basis-auto"
            id="navbarSupportedContentX"
            data-te-collapse-item
          >
            <ul
              className="mr-auto flex flex-col lg:flex-row pl-10 m-auto"
              data-te-navbar-nav-ref
            >
              {props.type !== "Jpg" && (
                <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                  <Link
                    to={'/jpg-to-'+props.type.toLowerCase()}
                    className="block text-sky-950 transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90"
                  >
                    JPG to {props.type}
                  </Link>
                </li>
              )}
              {props.type !== "Png" && (
                <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                  <Link
                    to={'/png-to-'+props.type.toLowerCase()}
                    className="block text-sky-950 transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90"
                  >
                    PNG to {props.type}
                  </Link>
                </li>
              )}
              {props.type !== "Gif" && (
                <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                  <Link
                    to={'/gif-to-'+props.type.toLowerCase()}
                    className="block text-sky-950 transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90"
                  >
                    GIF to {props.type}
                  </Link>
                </li>
              )}
              {props.type !== "Avif" && (
                <li className="mb-2 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                  <Link
                    to={'/avif-to-'+props.type.toLowerCase()}
                    className="block text-sky-950 transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90"
                  >
                    AVIF to {props.type}
                  </Link>
                </li>
              )}
              {props.type !== "Tiff" && (
                <li className="mb-2 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                  <Link
                    to={'/tiff-to-'+props.type.toLowerCase()}
                    className="block text-sky-950 transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90"
                  >
                    TIFF to {props.type}
                  </Link>
                </li>
              )}
              {props.type !== "Svg" && (
                <li className="mb-2 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                  <Link
                    to={'/svg-to-'+props.type.toLowerCase()}
                    className="block text-sky-950 transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90"
                  >
                    SVG to {props.type}
                  </Link>
                </li>
              )}
              {props.type !== "Webp" && (
                <li className="mb-2 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                  <Link
                    to={'/webp-to-'+props.type.toLowerCase()}
                    className="block text-sky-950 transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90"
                  >
                    WEBP to {props.type}
                  </Link>
                </li>
              )}
              {props.type !== "Ico" && (
                <li className="mb-2 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                  <Link
                    to={'/ico-to-'+props.type.toLowerCase()}
                    className="block text-sky-950 transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90"
                  >
                    ICO to {props.type}
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default SecondHeader;
