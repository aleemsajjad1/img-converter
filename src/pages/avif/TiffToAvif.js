import Header from "../../components/header";
import Footer from "../../components/Footer";
import MidSection from "../../components/MidSection";
import Converter from "../../components/Converter";

function TiffToAvif() {
  return (
    <div className="bg-gray-50 ">
      <Header />
      <Converter type="Avif" from="tiff" to="avif"/>
      <MidSection/>
      <Footer/>
    </div>
  );
}
export default TiffToAvif;