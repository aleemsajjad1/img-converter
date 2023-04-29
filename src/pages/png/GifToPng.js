import Header from "../../components/header";
import Footer from "../../components/Footer";
import MidSection from "../../components/MidSection";
import Converter from "../../components/Converter";

function GifToPng() {
  return (
    <div className="bg-gray-50 ">
      <Header />
      <Converter type="Png" from="gif" to="png"/>
      <MidSection/>
      <Footer/>
    </div>
  );
}
export default GifToPng;