import { useState } from "react";
import { GiConvergenceTarget } from "react-icons/gi";
import { SiConvertio } from "react-icons/si";
import { GiAlliedStar } from "react-icons/gi";
import { TfiGallery } from "react-icons/tfi";
import { BiMobile } from "react-icons/bi";
import { SiSemanticweb } from "react-icons/si";
import { BiWorld } from "react-icons/bi";
import { BsFillImageFill } from "react-icons/bs";
import { RiSecurePaymentFill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { ConvrtFunction } from "../service";
import { saveAs } from "file-saver";
import Header from "../components/header";

function GIF() {
  const [imgName, setImgName] = useState();
  const [toConvert, setToConvert] = useState();
  const [file, setFIle] = useState();
  const [loaader, setLoader] = useState(false);
  const [ImageUrl, setImageUrl] = useState(false);
  const [info, setInfo] = useState("Ready");
  var form = new FormData();

  const onChnageImage = (e) => {
    const file = e.target.files[0];
    setImgName(file.name);
    setFIle(file);
    console.log(file);
    e.target.files = null;
  };

  const onConvertClick = () => {
    setInfo("Converting...");
    setLoader(true);
    form.append("image", file);
    ConvrtFunction('gif', form).then((result) => {
      console.log(result);
      if (result.status) {
        setLoader(false);
        setImageUrl(result.url);
        setInfo("Finished");
      } else {
        setLoader(false);
        alert("Something went wrong");
      }
    });
  };

  const onChangeToConvert = (e) => {
    setToConvert(e.target.value);
  };

  const donloadImage = () => {
    const imageNameWithoutExt = imgName.split(".")[0];
    saveAs(ImageUrl, imageNameWithoutExt + "." + toConvert);
  };
  const OnCross = () => {
    setFIle("");
    setImageUrl(false);
    setImgName("");
    setInfo("Ready");
    setToConvert("");
    setLoader(false);
  };

  return (
    <div className="bg-gray-50 ">
      <Header />
      <div className="md:ml-36 mt-20 md:mr-36">
        <div className="flex justify-center">
          <h1 className="text-3xl font-bold text-yellow-500 italic">
            Converte File to GIF
          </h1>
        </div>
        <div className="flex justify-center">
          <h1 className="text-md font-bold text-yellow-500 italic">
            Convert your file to any formats
          </h1>
        </div>

        <div className="mt-4">
          <label className="flex justify-center w-full h-40 px-4 transition bg-gray-100 border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
            <span className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stsokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>
              <span className="font-medium text-gray-600">
                Upload your file
                <span className="text-yellow-500 underline">browse</span>
              </span>
            </span>
            <input
              type="file"
              name="file_upload"
              className="hidden"
              onChange={onChnageImage}
              accept=".jpg,.png,.gif,.avif,.tiff,.svg,.webp"
            />
          </label>
        </div>

        {imgName && (
          <div className="bg-gray-200 rounded mt-3">
            <div className="grid md:grid-cols-4 gap-4 p-3 flex items-center">
              <div className="align-middle flex">{imgName}</div>
              <div className="flex  justify-center">
                <span className="pt-3 pr-3">To:</span>
                <select
                  id="small"
                  className="block p-3 w-1/2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={onChangeToConvert}
                >
                  <option value="gif">GIF</option>
                </select>
              </div>
              <div className="flex justify-center">
                <span className="bg-yellow-500 text-blue-500 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                  {info}
                </span>
              </div>

              <div className="flex justify-center">
                {loaader ? (
                  <div role="status">
                    <svg
                      aria-hidden="true"
                      class="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                    <span class="sr-only">Loading...</span>
                  </div>
                ) : (
                  <div>
                    {ImageUrl ? (
                      <button
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                        onClick={donloadImage}
                      >
                        Download
                      </button>
                    ) : (
                      <button
                        onClick={onConvertClick}
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                      >
                        Convert
                      </button>
                    )}
                  </div>
                )}
                <div className="pl-14 pt-2 cursor-pointer" onClick={OnCross}>
                  <RxCross2 />
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="grid md:grid-cols-3 gap-3 p-3 flex items-center mt-20">
          <div className="p-8">
            <div className="flex justify-center">
              <SiConvertio className="h-10 w-10" color="#EAB308" />
            </div>
            <div className="flex justify-center mt-3">
              <h3>Fast Conversion</h3>
            </div>
            <div className="flex justify-center text-center mt-5">
              <p className="text-slate-400">
                Convertio is a cloud-based solution which means that conversion
                is done on our side and the tool doesn't slow down your
                operating system.
              </p>
            </div>
          </div>
          <div className="p-8">
            <div className="flex justify-center">
              <GiAlliedStar className="h-10 w-10" color="#EAB308" />
            </div>
            <div className="flex justify-center mt-3">
              <h3>User-friendly</h3>
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
              <TfiGallery className="h-10 w-10" color="#EAB308" />
            </div>
            <div className="flex justify-center mt-3">
              <h3>Support any format</h3>
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
              <BiWorld className="h-10 w-10" color="#EAB308" />
            </div>
            <div className="flex justify-center mt-3">
              <h3>Why Use An Online Image Converter?</h3>
            </div>
            <div className="flex justify-center text-center mt-5">
              <p className="text-slate-400">
                There are so many image formats out there, because each comes
                with its own specifications. Sometimes, you need an image with a
                low file size, sometimes you need one that can easily be scaled,
                and sometimes you need one that supports transparency.
              </p>
            </div>
          </div>
          <div className="p-8">
            <div className="flex justify-center">
              <SiSemanticweb className="h-10 w-10" color="#EAB308" />
            </div>
            <div className="flex justify-center mt-3">
              <h3>Are My Files Safe?</h3>
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
              <BiMobile className="h-10 w-10" color="#EAB308" />
            </div>
            <div className="flex justify-center mt-3">
              <h3>Mobile Friendly Image Conversion</h3>
            </div>
            <div className="flex justify-center text-center mt-5">
              <p className="text-slate-400">
                You can use this service to convert JPG to PNG, SVG, GIF and
                other image formats from literally anywhere – as long as you
                have an internet connection. Img2Go was designed to be user
                friendly and optimized for mobile phones and tablets as well.
              </p>
            </div>
          </div>
        </div>
      </div>
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
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span class="pb-5 block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2023{" "}
        <a href="/" class="hover:underline">
          Converter
        </a>
        . All Rights Reserved.
      </span>
    </div>
  );
}

export default GIF;
