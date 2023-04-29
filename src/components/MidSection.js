import React from "react";
import { BsFillImageFill } from "react-icons/bs";
import { RiSecurePaymentFill } from "react-icons/ri";
import { SiConvertio } from "react-icons/si";
function MidSection(){
return (<>
      <div className=" mt-20 mb-20 bg-blue-600">
        <div className="md:ml-48 md:mr-48 pt-20">
          <h1 className="text-2xl text-white font-bold">
            How to Convert Images?
          </h1>
          <h2 className="pt-3 text-white font-normal">
            1: Click the “Choose Files” button to upload your files.
          </h2>
          <h2 className="pt-3 text-white font-normal">
            2: Select a target image format from the{" "}
            <span className="font-bold">“Convert to”</span> drop-down list.
          </h2>
          <h2 className="pt-3 text-white font-normal">
            3: Click on the blue <span className="font-bold">“Convert”</span>{" "}
            button to start the conversion.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-3 p-3 flex items-center mt-20 pb-10 md:ml-48 md:mr-48 ">
          <div className="">
            <div className="flex justify-center mt-3">
              <SiConvertio className="h-10 w-10 mr-3" color="#EAB308" />

              <h3 className="text-2xl text-white font-bold">
                Convert Any Image
              </h3>
            </div>
            <div className="flex justify-center text-center mt-3">
              <p className="text-slate-400 text-white">
                Convert more than 500+ image formats into popular formats like
                JPG, PNG, WebP, and more. You can also convert camera RAW image
                files.
              </p>
            </div>
          </div>
          <div className="">
            <div className="flex justify-center ">
              <BsFillImageFill className="h-10 w-10 mr-3" color="#EAB308" />
              <h3 className="text-2xl text-white font-bold">Best Image </h3>
            </div>
            <div className="flex justify-center text-center mt-5">
              <p className="text-slate-400 text-white">
                Convert your images with perfect quality, size, and compression.
                Plus, you can also batch convert images using this tool.
              </p>
            </div>
          </div>
          <div className="">
            <div className="flex justify-center mt-10">
              <RiSecurePaymentFill className="h-10 w-10 mr-3" color="#EAB308" />
              <h3 className="text-2xl text-white font-bold">Free & Secure</h3>
            </div>
            <div className="flex justify-center text-center mt-5">
              <p className="text-slate-400 text-white">
                Our Image Converter is free and works on any web browser. We
                guarantee file security and privacy. Files are protected with
                256-bit SSL encryption and automatically deleted after 2 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
</>)
}

export default MidSection;