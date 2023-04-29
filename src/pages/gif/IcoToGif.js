import Header from "../../components/header";
import Footer from "../../components/Footer";
import MidSection from "../../components/MidSection";
import Converter from "../../components/Converter";

function IcoToGif() {
  return (
    <div className="bg-gray-50 ">
      <Header />
      <Converter type="Gif" from="ico" to="gif"/>
      <MidSection/>
      <Footer/>
    </div>
  );
}
export default IcoToGif;