import Header from "../../components/header";
import Footer from "../../components/Footer";
import MidSection from "../../components/MidSection";
import Converter from "../../components/Converter";

function JpgToPng() {
  return (
    <div className="bg-gray-50 ">
      <Header />
      <Converter type="Png" from="jpg" to="png"/>
      <MidSection/>
      <Footer/>
    </div>
  );
}
export default JpgToPng;