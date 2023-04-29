import Header from "../../components/header";
import Footer from "../../components/Footer";
import MidSection from "../../components/MidSection";
import Converter from "../../components/Converter";

function GifToSvg() {
  return (
    <div className="bg-gray-50 ">
      <Header />
      <Converter type="Svg" from="gif" to="svg"/>
      <MidSection/>
      <Footer/>
    </div>
  );
}
export default GifToSvg;