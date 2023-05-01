import { useState } from "react";
import MobileDrawer from "./MobileDrawer";
import SecondHeaderList from "./SecondHeaderList";
function SecondHeader(props) {
  const [open,setOpen]=useState(false);

  const handledrawer=()=>{
    setOpen(true);
  }
  const onClose=()=>{
    setOpen(false);
  }
  return (
    <div className="bg-gray-50 border-t ">
      <nav
        className=" flex w-full items-center justify-between bg-white py-2 text-gray-800 font-bold shadow-lg hover:text-neutral-700 focus:text-neutral-700  dark:text-neutral-200 md:flex-wrap md:justify-start"
        data-te-navbar-ref
      >
        <div className="flex w-full flex-wrap items-center justify-between px-3">
          
          <div className="flex items-center">
            <button
            onClick={handledrawer}
              className="border-0  bg-transparent px-2 text-xl leading-none transition-shadow duration-150 ease-in-out text-neutral-700  lg:hidden"
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
              <SecondHeaderList props={props} />
            </ul>
            <MobileDrawer open={open} onClose={onClose}>
            <ul
              className="mr-auto flex flex-col px-5"
              data-te-navbar-nav-ref
            >
              <SecondHeaderList props={props} />
            </ul>
            </MobileDrawer>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default SecondHeader;
