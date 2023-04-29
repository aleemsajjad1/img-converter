import React from "react";

function Footer(){

    return (
        <>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span className="pb-5 block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2023{" "}
        <a href="/" className="hover:underline">
          Converter
        </a>
        . All Rights Reserved.
      </span>
        </>
    )
}
export default Footer;