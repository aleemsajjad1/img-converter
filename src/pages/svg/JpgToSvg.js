import Header from "../../components/header";
import Footer from "../../components/Footer";
import MidSection from "../../components/MidSection";
import Converter from "../../components/Converter";

function JpgToSvg() {
  return (
    <div className="bg-gray-50 ">
      <Header />
      <Converter type="Svg" from="jpg" to="svg"/>
      <MidSection/>
      <Footer/>
    </div>
  );
}
export default JpgToSvg;