import Header from "../../components/header";
import Footer from "../../components/Footer";
import MidSection from "../../components/MidSection";
import Converter from "../../components/Converter";

function GifTotiff() {
  return (
    <div className="bg-gray-50 ">
      <Header />
      <Converter type="Tiff" from="gif" to="tiff"/>
      <MidSection/>
      <Footer/>
    </div>
  );
}
export default GifTotiff;