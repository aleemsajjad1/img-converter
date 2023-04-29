import Header from "../../components/header";
import Footer from "../../components/Footer";
import MidSection from "../../components/MidSection";
import Converter from "../../components/Converter";

function WebpToAvif() {
  return (
    <div className="bg-gray-50 ">
      <Header />
      <Converter type="Avif" from="webp" to="avif"/>
      <MidSection/>
      <Footer/>
    </div>
  );
}
export default WebpToAvif;