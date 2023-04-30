import Header from "../../components/header";
import Footer from "../../components/Footer";
import MidSection from "../../components/MidSection";
import Converter from "../../components/Converter";

function HeicToPng() {
  return (
    <div className="bg-gray-50 ">
      <Header />
      <Converter type="Png" from="heic" to="png"/>
      <MidSection/>
      <Footer/>
    </div>
  );
}
export default HeicToPng;