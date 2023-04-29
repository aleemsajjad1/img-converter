import Header from "../../components/header";
import Footer from "../../components/Footer";
import MidSection from "../../components/MidSection";
import Converter from "../../components/Converter";

function SvgToSvg() {
  return (
    <div className="bg-gray-50 ">
      <Header />
      <Converter type="Svg" from="svg" to="svg"/>
      <MidSection/>
      <Footer/>
    </div>
  );
}
export default SvgToSvg;