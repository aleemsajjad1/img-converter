import React from 'react'
import { Link } from 'react-router-dom'
const SecondHeaderList = ({props}) => {
  return (
   <>
   
              {props.type !== "Jpg" && (
                <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                  <Link
                    to={'/jpg-to-'+props.type.toLowerCase()}
                    className="block text-sky-950 transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30  dark:focus:text-white lg:p-2 [&.active]:text-black/90"
                  >
                    JPG to {props.type}
                  </Link>
                </li>
              )}
              
              {/* {props.type === "Jpg" && (
                <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                  <Link
                    to={'/heic-to-'+props.type.toLowerCase()}
                    className="block text-sky-950 transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30  dark:focus:text-white lg:p-2 [&.active]:text-black/90"
                  >
                    HEIC to {props.type}
                  </Link>
                </li>
              )}
                   {props.type === "Png" && (
                <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                  <Link
                    to={'/heic-to-'+props.type.toLowerCase()}
                    className="block text-sky-950 transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30  dark:focus:text-white lg:p-2 [&.active]:text-black/90"
                  >
                    HEIC to {props.type}
                  </Link>
                </li>
              )} */}
              {props.type !== "Png" && (
                <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                  <Link
                    to={'/png-to-'+props.type.toLowerCase()}
                    className="block text-sky-950 transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30  dark:focus:text-white lg:p-2 [&.active]:text-black/90"
                  >
                    PNG to {props.type}
                  </Link>
                </li>
              )}
              {props.type !== "Gif" && (
                <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                  <Link
                    to={'/gif-to-'+props.type.toLowerCase()}
                    className="block text-sky-950 transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30  dark:focus:text-white lg:p-2 [&.active]:text-black/90"
                  >
                    GIF to {props.type}
                  </Link>
                </li>
              )}
              {props.type !== "Avif" && (
                <li className="mb-2 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                  <Link
                    to={'/avif-to-'+props.type.toLowerCase()}
                    className="block text-sky-950 transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30  dark:focus:text-white lg:p-2 [&.active]:text-black/90"
                  >
                    AVIF to {props.type}
                  </Link>
                </li>
              )}
              {props.type !== "Tiff" && (
                <li className="mb-2 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                  <Link
                    to={'/tiff-to-'+props.type.toLowerCase()}
                    className="block text-sky-950 transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30  dark:focus:text-white lg:p-2 [&.active]:text-black/90"
                  >
                    TIFF to {props.type}
                  </Link>
                </li>
              )}
              {props.type !== "Svg" && (
                <li className="mb-2 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                  <Link
                    to={'/svg-to-'+props.type.toLowerCase()}
                    className="block text-sky-950 transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30  dark:focus:text-white lg:p-2 [&.active]:text-black/90"
                  >
                    SVG to {props.type}
                  </Link>
                </li>
              )}
              {props.type !== "Webp" && (
                <li className="mb-2 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                  <Link
                    to={'/webp-to-'+props.type.toLowerCase()}
                    className="block text-sky-950 transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30  dark:focus:text-white lg:p-2 [&.active]:text-black/90"
                  >
                    WEBP to {props.type}
                  </Link>
                </li>
              )}
              {/* {props.type !== "Ico" && (
                <li className="mb-2 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                  <Link
                    to={'/ico-to-'+props.type.toLowerCase()}
                    className="block text-sky-950 transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30  dark:focus:text-white lg:p-2 [&.active]:text-black/90"
                  >
                    ICO to {props.type}
                  </Link>
                </li>
              )}
             */}
   </>
  )
}

export default SecondHeaderList