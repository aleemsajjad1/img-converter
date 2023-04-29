import Header from "../components/header";
import Footer from "../components/Footer";
import MidSection from "../components/MidSection";
import Converter from "../components/Converter";

function WEBP() {
  return (
    <div className="bg-gray-50 ">
      <Header />
      <Converter type="Webp"/>
      <MidSection/>
      <Footer/>
    </div>
  );
}
export default WEBP;
