import { React, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { ConvrtFunction } from "../service";
import { saveAs } from "file-saver";
import ConverterContent from "../components/ConverterContent";
import { Types } from "../const";
import SecondHeader from "./SecondHeader";
import { toast } from "react-toastify";
function Converter(props) {
  const [imgName, setImgName] = useState("");
  const [toConvert, setToConvert] = useState("");
  const [file, setFIle] = useState();
  const [loaader, setLoader] = useState(false);
  const [ImageUrl, setImageUrl] = useState(false);
  const [info, setInfo] = useState("Ready");
  var form = new FormData();
  const from = props.from ? props.from : "";

  // const resizer=async(files)=>{
  //   return new Promise((resolve) => {
  //      Resizer.imageFileResizer(
  //        files,
  //        1024,
  //        1024,
  //        "JPEG",
  //        100,
  //        0,
  //        (uri) => {
  //          resolve(uri);
  //        },
  //        "base64"
  //      );
  //      });
  //  }
  const onChnageImage = async (e) => {
    const files = e.target.files[0];
    if (files.size > 4 * 1024 * 1024) {
      // File size is more than 4 MB, show an error message
      toast.error("Image Size Should Less Then 5mb");
      setLoader(false);
      return;
    }

    const allowedExtensions = [
      ".jpg",
      ".png",
      ".gif",
      ".avif",
      ".tiff",
      ".svg",
      ".webp",
    ];
    if (
      props.type === "Home" ||
      props.type === "Avif" ||
      props.type === "Tiff" ||
      props.type === "Gif" ||
      props.type === "Ico" ||
      props.type === "Webp" ||
      props.type === "Svg"
    ) {
      const fileExtension = files.name.split(".").pop().toLowerCase();
      if (!allowedExtensions.includes(`.${fileExtension}`)) {
        // File type is not allowed, show an error message
        toast.error(`Only ${allowedExtensions.join(", ")} images are allowed`);
        setLoader(false);
        return;
      }
    } else if (props.type === "Png" || props.type === "Jpg") {
      const allowExtensions = [
        ".jpg",
        ".png",
        ".gif",
        ".avif",
        ".tiff",
        ".svg",
        ".webp",
        ".heic",
      ];
      const fileExtension = files.name.split(".").pop().toLowerCase();
      if (!allowExtensions.includes(`.${fileExtension}`)) {
        // File type is not allowed, show an error message
        toast.error(`Only ${allowedExtensions.join(", ")} images are allowed`);
        setLoader(false);
        return;
      }
    }
    setImgName(files.name);
    setFIle(files);
    setInfo("Ready");
    setLoader(false);
    setImageUrl("");
    e.target.files = null;
  };

  const onConvertClick = async () => {
    setInfo("Converting...");
    setLoader(true);
    form.append("image", file);
    ConvrtFunction(toConvert, form)
      .then((result) => {
        if (result.status) {
          setLoader(false);
          setImageUrl(result.url);
          setInfo("Finished");
        } else {
          setLoader(false);
          alert("Something went wrong");
        }
      })
      .catch((error) => {
        toast.error("Image Conversion Error!Please Try again Later");
        setInfo("Error");
        setLoader(false);
        console.log(error);
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
    <>
      <div className="md:ml-36 mt-20 md:mr-36">
        {props.type !== "Home" && (
          <SecondHeader type={props.type} from={props.from} to={props.to} />
        )}
        <div className="flex justify-center mt-5">
          <h1 className="text-3xl font-bold text-black italic">
            {props.type !== "Home"
              ? "Converte File " + from + " to " + props.type
              : "File Converter"}
          </h1>
        </div>
        <div className="flex justify-center">
          <h1 className="text-md font-bold text-black italic">
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
                <span className="text-black underline">browse</span>
              </span>
            </span>
            <input
              type="file"
              name="file_upload"
              className="hidden"
              onChange={onChnageImage}
              accept={
                props.type === "Home" || !props.from
                  ? ".jpg,.png,.gif,.avif,.tiff,.svg,.webp"
                  : props.type === "Jpg"
                  ? ".jpg,.png,.gif,.avif,.tiff,.svg,.webp,.heic"
                  : {
                      jpg: ".jpg",
                      png: ".png",
                      gif: ".gif",
                      avif: ".avif",
                      tiff: ".tiff",
                      svg: ".svg",
                      webp: ".webp",
                      ico: ".ico",
                      heic: ".heic",
                    }[props.from]
              }
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
                  <option value="">Plese Select</option>
                  {props.type === "Home" ? (
                    Types.map((r) => <option value={r.value}>{r.name}</option>)
                  ) : (
                    <option value={props.type}>
                      {props.type.toUpperCase()}
                    </option>
                  )}
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
                        disabled={toConvert ? false : true}
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
        <ConverterContent />
      </div>
    </>
  );
}

export default Converter;
