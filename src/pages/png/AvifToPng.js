import Header from "../../components/header";
import Footer from "../../components/Footer";
import MidSection from "../../components/MidSection";
import Converter from "../../components/Converter";

function AvifToPng() {
  return (
    <div className="bg-gray-50 ">
      <Header />
      <Converter type="Png" from="avif" to="png"/>
      <MidSection/>
      <Footer/>
    </div>
  );
}
export default AvifToPng;