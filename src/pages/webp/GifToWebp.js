import Header from "../../components/header";
import Footer from "../../components/Footer";
import MidSection from "../../components/MidSection";
import Converter from "../../components/Converter";

function GifToWebp() {
  return (
    <div className="bg-gray-50 ">
      <Header />
      <Converter type="Webp" from="gif" to="webp"/>
      <MidSection/>
      <Footer/>
    </div>
  );
}
export default GifToWebp;