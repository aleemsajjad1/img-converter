import React from "react";
import { SiConvertio } from "react-icons/si";
import { GiAlliedStar } from "react-icons/gi";
import { TfiGallery } from "react-icons/tfi";
import { BiMobile } from "react-icons/bi";
import { SiSemanticweb } from "react-icons/si";
import { BiWorld } from "react-icons/bi";
function ConverterContent(){
    return(<>
    <div className="grid md:grid-cols-3 gap-3 p-3 flex items-center mt-20">
          <div className="p-8">
            <div className="flex justify-center">
              <SiConvertio className="h-10 w-10" color="#000000" />
            </div>
            <div className="flex justify-center mt-3">
              <h3 className="font-bold">Fast Conversion</h3>
            </div>
            <div className="flex justify-center text-center mt-5">
              <p className="text-slate-400">
                Converter is a solution which means that conversion
                is done on our side and the tool doesn't slow down.
              </p>
            </div>
          </div>
          <div className="p-8">
            <div className="flex justify-center">
              <GiAlliedStar className="h-10 w-10" color="#000000" />
            </div>
            <div className="flex justify-center mt-3">
              <h3 className="font-bold">User-friendly</h3>
            </div>
            <div className="flex justify-center text-center mt-5">
              <p className="text-slate-400">
                Interface is designed to be intuitive for any user and it allows
                you to convert the necessary file with only one click.
              </p>
            </div>
          </div>
          <div className="p-8">
            <div className="flex justify-center">
              <TfiGallery className="h-10 w-10" color="#000000" />
            </div>
            <div className="flex justify-center mt-3">
              <h3 className="font-bold">Support any format</h3>
            </div>
            <div className="flex justify-center text-center mt-5">
              <p className="text-slate-400">
                The tool works with any modern image formats like JPEG, PNG,
                TIFF, BMP, etc.
              </p>
            </div>
          </div>
          <div className="p-8">
            <div className="flex justify-center">
              <BiWorld className="h-10 w-10" color="#000000" />
            </div>
            <div className="flex justify-center mt-3">
              <h3 className="font-bold">Why Use An Online Image Converter?</h3>
            </div>
            <div className="flex justify-center text-center mt-5">
              <p className="text-slate-400">
                There are so many image formats out there, because each comes
                with its own specifications. Sometimes, you need an image with a
                low file size, sometimes you need one that can easily be scaled.
              </p>
            </div>
          </div>
          <div className="p-8">
            <div className="flex justify-center">
              <SiSemanticweb className="h-10 w-10" color="#000000" />
            </div>
            <div className="flex justify-center mt-3">
              <h3 className="font-bold">Are My Files Safe?</h3>
            </div>
            <div className="flex justify-center text-center mt-5">
              <p className="text-slate-400">
                Yes, at Img2Go, we make sure that your files are as safe as can
                be. No thrid party has access to your images. All image
                conversions and editing are handled by our servers so nobody has
                a look at your files manually.
              </p>
            </div>
          </div>
          <div className="p-8">
            <div className="flex justify-center">
              <BiMobile className="h-10 w-10" color="#000000" />
            </div>
            <div className="flex justify-center mt-3">
              <h3 className="font-bold">Mobile Friendly Image Conversion</h3>
            </div>
            <div className="flex justify-center text-center mt-5">
              <p className="text-slate-400">
                You can use this service to convert image formats from literally anywhere – as long as you
                have an internet connection. Img2Go was designed to be user
                friendly and optimized for mobile phones and tablets as well.
              </p>
            </div>
          </div>
        </div>
    </>)
}
export default ConverterContent;