import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Subscription from "./pages/subscription/subscription";
import Support from "./pages/support/support";

import Home from "./pages/home";
import Png from "./pages/png";
import Avif from "./pages/avif";
import Gif from "./pages/gif";
import Ico from "./pages/ico";
import Jpg from "./pages/jpg";
import Svg from "./pages/svg";
import Tif from "./pages/tif";
import Webp from "./pages/webp";

import HeicToPng from "./pages/png/HeicToPng";
import JpgToPng from "./pages/png/JpgToPng";
import GifToPng from "./pages/png/GifToPng";
import AvifToPng from "./pages/png/AvifToPng";
import TiffToPng from "./pages/png/TiffToPng";
import SvgToPng from "./pages/png/SvgToPng";
import WebpToPng from "./pages/png/WebpToPng";
import IcoToPng from "./pages/png/IcoToPng";
import JpegToPng from "./pages/png/JpegToPng"

import JpgToGif from "./pages/gif/JpgToGif";
import PngToGif from "./pages/gif/PngToGif";
import AvifToGif from "./pages/gif/AvifToGif";
import TiffToGif from "./pages/gif/TiffToGif";
import SvgToGif from "./pages/gif/SvgToGif";
import WebpToGif from "./pages/gif/WebpToGif";
import IcoToGif from "./pages/gif/IcoToGif";
import JpegToGif from "./pages/gif/JpegToGif"

import JpegToJpg from "./pages/jpg/JpegTojpg";
import HeicToJpg from "./pages/jpg/Heictojpg";
import GifToJpg from "./pages/jpg/GifToJpg";
import PngToJpg from "./pages/jpg/PngToJpg";
import AvifToJpg from "./pages/jpg/AvifTojpg";
import TiffToJpg from "./pages/jpg/TiffToJpg";
import SvgToJpg from "./pages/jpg/SvgToJpg";
import WebpToJpg from "./pages/jpg/WebpToJpg";
import IcoToJpg from "./pages/jpg/IcoToJpg";

import JpegToSvg from "./pages/svg/JpegToSvg";
import GifToSvg from "./pages/svg/GifToSvg";
import PngToSvg from "./pages/svg/PngToSvg";
import AvifToSvg from "./pages/svg/AvifToSvg";
import TiffToSvg from "./pages/svg/TiffToSvg";
import JpgToSvg from "./pages/svg/JpgToSvg";
import WebpToSvg from "./pages/svg/WebpToSvg";
import IcoToSvg from "./pages/svg/IcoToSvg";

import JpegToIco from "./pages/ico/JpegToIco";
import GifToIco from "./pages/ico/GifToIco";
import PngToIco from "./pages/ico/PngToIco";
import AvifToIco from "./pages/ico/AvifToIco";
import TiffToIco from "./pages/ico/TiffToIco";
import JpgToIco from "./pages/ico/JpgToIco";
import WebpToIco from "./pages/ico/WebpToIco";
import SvgToIco from "./pages/ico/SvgToIco";

import JpgToAvif from "./pages/avif/JpgToAvif";
import GifToAvif from "./pages/avif/GifToAvif";
import PngToAvif from "./pages/avif/PngToAvif";
import TiffToAvif from "./pages/avif/TiffToAvif";
import SvgToAvif from "./pages/avif/SvgToAvif";
import WebpToAvif from "./pages/avif/WebpToAvif";
import IcoToAvif from "./pages/avif/IcoToAvif";
import JpegToAvif from "./pages/avif/JpegToAvif";

import JpegToTiff from "./pages/tiff/JpegToTiff";
import JpgToTiff from "./pages/tiff/JpgToTiff";
import GifToTiff from "./pages/tiff/GifToTiff";
import PngToTiff from "./pages/tiff/PngToTiff";
import AvifToTiff from "./pages/tiff/AvifToTiff";
import SvgToTiff from "./pages/tiff/SvgToTiff";
import WebpToTiff from "./pages/tiff/WebpToTiff";
import IcoToTiff from "./pages/tiff/IcoToTiff";

import JpegToWebp from "./pages/webp/JpegToWebp";
import JpgToWebp from "./pages/webp/JpgToWebp";
import GifToWebp from "./pages/webp/GifToWebp";
import PngToWebp from "./pages/webp/PngToWebp";
import AvifToWebp from "./pages/webp/AvifToWebp";
import SvgToWebp from "./pages/webp/SvgToWebp";
import TiffToWebp from "./pages/webp/TiffToWebp";
import IcoToWebp from "./pages/webp/IcoToWebp";

import HEIC from "./pages/heic";
import HeicToJpeg from "./pages/heic/HeicToJpeg";


function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="/subscription" element={<Subscription />} />
            <Route path="/support" element={<Support />} />

            {/* png */}
            <Route path="convert-to-png" element={<Png />} />
            <Route path="heic-to-png" element={<HeicToPng />} />
            <Route path="jpg-to-png" element={<JpgToPng />} />
            <Route path="gif-to-png" element={<GifToPng />} />
            <Route path="avif-to-png" element={<AvifToPng />} />
            <Route path="tiff-to-png" element={<TiffToPng />} />
            <Route path="svg-to-png" element={<SvgToPng />} />
            <Route path="webp-to-png" element={<WebpToPng />} />
            <Route path="ico-to-png" element={<IcoToPng />} />
            <Route path="jpeg-to-png" element={<JpegToPng />} />

            {/* avif */}
            <Route path="convert-to-avif" element={<Avif />} />
            <Route path="jpg-to-avif" element={<JpgToAvif />} />
            <Route path="gif-to-avif" element={<GifToAvif />} />
            <Route path="png-to-avif" element={<PngToAvif />} />
            <Route path="tiff-to-avif" element={<TiffToAvif />} />
            <Route path="svg-to-avif" element={<SvgToAvif />} />
            <Route path="webp-to-avif" element={<WebpToAvif />} />
            <Route path="ico-to-avif" element={<IcoToAvif />} />
            <Route path="jpeg-to-avif" element={<JpegToAvif />} />

            {/* gif */}
            <Route path="convert-to-gif" element={<Gif />} />
            <Route path="jpg-to-gif" element={<JpgToGif />} />
            <Route path="png-to-gif" element={<PngToGif />} />
            <Route path="avif-to-gif" element={<AvifToGif />} />
            <Route path="tiff-to-gif" element={<TiffToGif />} />
            <Route path="svg-to-gif" element={<SvgToGif />} />
            <Route path="webp-to-gif" element={<WebpToGif />} />
            <Route path="ico-to-gif" element={<IcoToGif />} />
            <Route path="jpeg-to-gif" element={<JpegToGif />} />

            {/* Ico */}
            <Route path="convert-to-ico" element={<Ico />} />
            <Route path="jpg-to-ico" element={<JpgToIco />} />
            <Route path="png-to-ico" element={<PngToIco />} />
            <Route path="avif-to-ico" element={<AvifToIco />} />
            <Route path="tiff-to-ico" element={<TiffToIco />} />
            <Route path="svg-to-ico" element={<SvgToIco />} />
            <Route path="webp-to-ico" element={<WebpToIco />} />
            <Route path="gif-to-ico" element={<GifToIco />} />
            <Route path="jpeg-to-ico" element={<JpegToIco />} />

            {/* Jpg */}
            <Route path="convert-to-jpg" element={<Jpg />} />
            <Route path="gif-to-jpg" element={<GifToJpg />} />
            <Route path="png-to-jpg" element={<PngToJpg />} />
            <Route path="avif-to-jpg" element={<AvifToJpg />} />
            <Route path="tiff-to-jpg" element={<TiffToJpg />} />
            <Route path="svg-to-jpg" element={<SvgToJpg />} />
            <Route path="webp-to-jpg" element={<WebpToJpg />} />
            <Route path="ico-to-jpg" element={<IcoToJpg />} />
            <Route path="heic-to-jpg" element={<HeicToJpg />} />
            <Route path="jpeg-to-jpg" element={<JpegToJpg />} />

            {/* svg */}
            <Route path="convert-to-svg" element={<Svg />} />
            <Route path="gif-to-svg" element={<GifToSvg />} />
            <Route path="png-to-svg" element={<PngToSvg />} />
            <Route path="avif-to-svg" element={<AvifToSvg />} />
            <Route path="tiff-to-svg" element={<TiffToSvg />} />
            <Route path="jpg-to-svg" element={<JpgToSvg />} />
            <Route path="webp-to-svg" element={<WebpToSvg />} />
            <Route path="ico-to-svg" element={<IcoToSvg />} />
            <Route path="jpeg-to-svg" element={<JpegToSvg />} />

            {/* tiff */}
            <Route path="convert-to-tif" element={<Tif />} />
            <Route path="gif-to-tiff" element={<GifToTiff />} />
            <Route path="png-to-tiff" element={<PngToTiff />} />
            <Route path="avif-to-tiff" element={<AvifToTiff />} />
            <Route path="svg-to-tiff" element={<SvgToTiff />} />
            <Route path="jpg-to-tiff" element={<JpgToTiff />} />
            <Route path="webp-to-tiff" element={<WebpToTiff />} />
            <Route path="ico-to-tiff" element={<IcoToTiff />} />
            <Route path="jpeg-to-tiff" element={<JpegToTiff />} />

            {/* Webp */}
            <Route path="convert-to-webp" element={<Webp />} />
            <Route path="gif-to-webp" element={<GifToWebp />} />
            <Route path="png-to-webp" element={<PngToWebp />} />
            <Route path="avif-to-webp" element={<AvifToWebp />} />
            <Route path="svg-to-webp" element={<SvgToWebp />} />
            <Route path="jpg-to-webp" element={<JpgToWebp />} />
            <Route path="tiff-to-webp" element={<TiffToWebp />} />
            <Route path="ico-to-webp" element={<IcoToWebp />} />
            <Route path="jpeg-to-webp" element={<JpegToWebp />} />


            {/* Heic */}
            <Route path="heic" element={<HEIC />} />
            <Route path="heic-to-jpeg" element={<HeicToJpeg />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
