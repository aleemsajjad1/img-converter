import Header from "../../components/header";
import Footer from "../../components/Footer";
import MidSection from "../../components/MidSection";
import Converter from "../../components/Converter";

function IcoToSvg() {
  return (
    <div className="bg-gray-50 ">
      <Header />
      <Converter type="Svg" from="ico" to="svg"/>
      <MidSection/>
      <Footer/>
    </div>
  );
}
export default IcoToSvg;