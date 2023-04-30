import Header from "../../components/header";
import Footer from "../../components/Footer";
import MidSection from "../../components/MidSection";
import Converter from "../../components/Converter";

function HeicToJpg() {
  return (
    <div className="bg-gray-50 ">
      <Header />
      <Converter type="Jpg" from="heic" to="jpg"/>
      <MidSection/>
      <Footer/>
    </div>
  );
}
export default HeicToJpg;