import Header from "../../components/header";
import Footer from "../../components/Footer";
import MidSection from "../../components/MidSection";
import Converter from "../../components/Converter";

function SvgToPng() {
  return (
    <div className="bg-gray-50 ">
      <Header />
      <Converter type="Png" from="svg" to="png"/>
      <MidSection/>
      <Footer/>
    </div>
  );
}
export default SvgToPng;