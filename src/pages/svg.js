import Header from "../components/header";
import Footer from "../components/Footer";
import MidSection from "../components/MidSection";
import Converter from "../components/Converter";

function SVG() {
  return (
    <div className="bg-gray-50 ">
      <Header />
      <Converter type="Svg"/>
      <MidSection/>
      <Footer/>
    </div>
  );
}
export default SVG;
