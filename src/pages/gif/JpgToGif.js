import Header from "../../components/header";
import Footer from "../../components/Footer";
import MidSection from "../../components/MidSection";
import Converter from "../../components/Converter";

function JpgToGif() {
  return (
    <div className="bg-gray-50 ">
      <Header />
      <Converter type="Gif" from="jpg" to="gif"/>
      <MidSection/>
      <Footer/>
    </div>
  );
}
export default JpgToGif;