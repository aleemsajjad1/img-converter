import Header from "../../components/header";
import Footer from "../../components/Footer";
import MidSection from "../../components/MidSection";
import Converter from "../../components/Converter";

function TiffToPng() {
  return (
    <div className="bg-gray-50 ">
      <Header />
      <Converter type="Png" from="tiff" to="png"/>
      <MidSection/>
      <Footer/>
    </div>
  );
}
export default TiffToPng;