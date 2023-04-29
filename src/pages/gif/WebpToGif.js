import Header from "../../components/header";
import Footer from "../../components/Footer";
import MidSection from "../../components/MidSection";
import Converter from "../../components/Converter";

function WebpToGif() {
  return (
    <div className="bg-gray-50 ">
      <Header />
      <Converter type="Gif" from="webp" to="gif"/>
      <MidSection/>
      <Footer/>
    </div>
  );
}
export default WebpToGif;