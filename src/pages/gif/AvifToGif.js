import Header from "../../components/header";
import Footer from "../../components/Footer";
import MidSection from "../../components/MidSection";
import Converter from "../../components/Converter";

function AvifToGif() {
  return (
    <div className="bg-gray-50 ">
      <Header />
      <Converter type="Gif" from="avif" to="gif"/>
      <MidSection/>
      <Footer/>
    </div>
  );
}
export default AvifToGif;