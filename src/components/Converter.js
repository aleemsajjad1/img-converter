import { React, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { ConvrtFunction } from "../service";
import { saveAs } from "file-saver";
import ConverterContent from "../components/ConverterContent";
import { Types } from "../const";
import SecondHeader from "./SecondHeader";
import { toast } from "react-toastify";
import Modal from "react-modal";

function Converter(props) {
  const [imgName, setImgName] = useState("");
  const [urlText, setUrlText] = useState("");
  const [toConvert, setToConvert] = useState([]);
  const [file, setFIle] = useState();
  const [loaader, setLoader] = useState(false);
  const [multipleFiles, setMultipleFiles] = useState([
    {
      file: {},
      url: "",
    },
  ]);
  const [modalIsOpen, setModadlIsOpen] = useState(false);
  const [ImageUrl, setImageUrl] = useState(false);
  const [info, setInfo] = useState("Ready");
  const [types, setTypes] = useState(Types);
  const [isOpen, setIsOpen] = useState(false);
  const customStyles = {
    content: {
      top: "50%",
      width: "500px",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#FFFFFF",
    },
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseEnter = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setModadlIsOpen(false);
  };

  const openModal = () => {
    setModadlIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };
  var form = new FormData();
  const from = props.from ? props.from : "";
  const to = props.to ? props.to : "";
  const HeicFormt = [
    {
      name: "JPG",
      value: "jpg",
    },
    {
      name: "PNG",
      value: "png",
    },
    {
      name: "JPEG",
      value: "jpeg",
    },
  ];

  const onChnageImage = (e, index) => {
    const filesArray = Array.from(e.target.files);

    const updatedMultipleFiles = filesArray.map((file) => ({
      file: file,
      url: "",
    }));

    setMultipleFiles(updatedMultipleFiles);

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
      ".jpeg",
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
      const filteredTypes =
        Types && Types.filter((type) => type.value !== fileExtension);

      setTypes(filteredTypes);
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
        ".jpeg",
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
    for (let i = 0; i < multipleFiles.length; i++) {
      form.append("image", multipleFiles[i].file);

      ConvrtFunction(toConvert[i], form)
        .then((result) => {
          if (result.status) {
            setLoader(false);
            setMultipleFiles((prevFiles) => {
              const updatedFiles = [...prevFiles];
              updatedFiles[i] = { ...updatedFiles[i], url: result.url };
              return updatedFiles;
            });

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
    }
  };

  const onChangeToConvert = (e, index) => {
    const newarr = [...toConvert];
    newarr[index] = e.target.value;
    setToConvert(newarr);
  };

  const donloadImage = (res, name) => {
    const imageNameWithoutExt = name.split(".")[0];
    saveAs(res, imageNameWithoutExt);
  };
  const OnCross = (indexx) => {
    const filteredTypes =
      multipleFiles && multipleFiles.filter((type, index) => index !== indexx);
    setMultipleFiles(filteredTypes);
    // setFIle("");
    // setImageUrl(false);
    // setImgName("");
    // setInfo("Ready");
    // setToConvert("");
    // setLoader(false);
  };

  const onChnageUrlText = (e) => {
    setUrlText(e.target.value);
  };

  const onUrlConverrt = () => {
    if (urlText) {
      fetch(urlText)
        .then((response) => response.blob())
        .then((blob) => {
          const urlParts = urlText.split("/");
          const fileName = urlParts[urlParts.length - 1];
          const fileType = blob.type;
          const file = new File([blob], fileName, { type: fileType });

          setImgName(file.name);
          const updatedFiles = [
            {
              file: file,
              url: "",
            },
          ];
          setMultipleFiles(updatedFiles);
          setModadlIsOpen(false);
        })
        .catch((error) => {
          console.error("Error converting image:", error);
        });
    }
  };

  return (
    <>
      <div className="md:ml-36 mt-20 md:mr-36">
        {props.type !== "Home" && (
          <SecondHeader type={props.type} from={props.from} to={props.to} />
        )}
        <div className="flex justify-center mt-5">
          <h1 className="text-3xl font-bold text-black italic">
            {props.type !== "Home" && props.type !== "Heic"
              ? "Convert Your  " + from + " File to " + props.type
              : props.type === "Heic"
              ? "Convert Your Heic File"
              : "Image File Converter"}
          </h1>
        </div>
        <div className="flex justify-center">
          {props.type === "Home" ? (
            <h1 className="text-md font-bold text-black italic">
              Convert your Image to any formats
            </h1>
          ) : (
            ""
          )}
        </div>

        <div className="mt-4 flex">
          <div className="flex justify-center w-full h-40 px-4 transition bg-gray-100 border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
            <span className="flex items-center space-x-2">
              {/* <span className="font-medium text-gray-600">
                Upload your file
                <span className="text-black underline">browse</span>
              </span> */}
              <div className="relative">
                <button
                  id="dropdownHoverButton"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  onClick={toggleDropdown}
                  className="text-white bg-slate-900 hover:bg-slate-900 focus:ring-4 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-salte-600 dark:hover:bg-salte-700 "
                  type="button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    />
                  </svg>

                  <span className="pl-2">Convert Image From</span>
                  <svg
                    className={`w-4 h-4 ml-2 ${
                      isOpen ? "transform rotate-180" : ""
                    }`}
                    aria-hidden="true"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>
                {isOpen && (
                  <div
                    id="dropdownHover"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className="z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-52 dark:bg-gray-700"
                  >
                    <ul
                      className="py-2 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="dropdownHoverButton"
                    >
                      <label className="block px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        <input
                          type="file"
                          name="file_upload"
                          className="hidden"
                          multiple
                          onChange={onChnageImage}
                          accept={
                            props.type === "Heic"
                              ? ".heic"
                              : props.type === "Home" || !props.from
                              ? ".jpg,.png,.gif,.avif,.tiff,.svg,.webp,.jpeg"
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
                                  jpeg: ".jpeg",
                                }[props.from]
                          }
                        />
                        Upload File
                      </label>
                      <label
                        className="cursor-pointer block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        onClick={openModal}
                      >
                        Open Modal
                      </label>
                    </ul>
                  </div>
                )}
              </div>
            </span>
          </div>
        </div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="text-lg">Add File By Url</div>

          <div className="mt-3 mb-3">
            <input
              value={urlText}
              className="w-full h-10 border-2 pl-3"
              onChange={onChnageUrlText}
              type="text"
            />
          </div>
          <div className="flex justify-between">
            <button
              class="bg-gray-800 hover:bg-gray-800 text-white font-bold py-3 px-5 rounded-full"
              onClick={closeModal}
            >
              Close
            </button>
            <button
              class="bg-gray-800 hover:bg-gray-800 text-white font-bold py-3 px-5 rounded-full"
              onClick={onUrlConverrt}
            >
              Save
            </button>
          </div>
        </Modal>
        {imgName && (
          <div>
            {multipleFiles.map((res, index) => (
              <div className="bg-gray-200 rounded mt-3">
                <div className="grid md:grid-cols-4 gap-4 p-3 flex items-center">
                  <div className="align-middle flex">{res.file.name}</div>
                  <div className="flex  justify-center">
                    <span className="pt-3 pr-3">To:</span>
                    <select
                      id="small"
                      className="block p-3 w-1/2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      onChange={(e) => onChangeToConvert(e, index)}
                    >
                      <option value="">Plese Select</option>
                      {props.to === "jpeg" ? (
                        <option value={props.to}>{props.to}</option>
                      ) : props.type === "Home" ? (
                        types &&
                        types.map((r) => (
                          <option value={r.value}>{r.name}</option>
                        ))
                      ) : props.type === "Heic" ? (
                        HeicFormt &&
                        HeicFormt.map((r) => (
                          <option value={r.value}>{r.name}</option>
                        ))
                      ) : (
                        <option value={props.type}>
                          {props.type.toLowerCase()}
                        </option>
                      )}
                    </select>
                  </div>
                  <div className="flex justify-center">
                    <span className="bg-gray-800 text-white text-sm font-medium mr-2 px-2.5 py-0.5 rounded ">
                      {info}
                    </span>
                  </div>

                  <div className="flex justify-center">
                    {loaader ? (
                      <div role="status">
                        <svg
                          aria-hidden="true"
                          class="inline w-8 h-8 mr-2 text-gray-800 animate-spin"
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
                        {ImageUrl && (
                          <button
                            class="bg-gray-800 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-full"
                            onClick={() => donloadImage(res.url, res.file.name)}
                          >
                            Download
                          </button>
                        )}
                      </div>
                    )}
                    <div
                      className="pl-14 pt-2 cursor-pointer"
                      onClick={() => OnCross(index)}
                    >
                      <RxCross2 />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="flex justify-end mt-5">
          <button
            disabled={toConvert ? false : true}
            onClick={() => onConvertClick()}
            class="bg-gray-800 hover:bg-gray-800 text-white font-bold py-3 px-5 rounded-full"
          >
            Convert
          </button>
        </div>
        <ConverterContent />
      </div>
    </>
  );
}

export default Converter;
