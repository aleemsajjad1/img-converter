import Header from "../../components/header";
import Footer from "../../components/Footer";
import MidSection from "../../components/MidSection";
import Converter from "../../components/Converter";

function HeicToJpeg() {
  return (
    <div className="bg-gray-50 ">
      <Header />
      <Converter type="Heic" from="heic" to="jpeg"/>
      <MidSection/>
      <Footer/>
    </div>
  );
}
export default HeicToJpeg;