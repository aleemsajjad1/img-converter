import Header from "../../components/header";
import Footer from "../../components/Footer";
import MidSection from "../../components/MidSection";
import Converter from "../../components/Converter";

function JpegToSvg() {
  return (
    <div className="bg-gray-50 ">
      <Header />
      <Converter type="Svg" from="jpeg" to="svg"/>
      <MidSection/>
      <Footer/>
    </div>
  );
}
export default JpegToSvg;