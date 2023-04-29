import Header from "../components/header";
import Footer from "../components/Footer";
import MidSection from "../components/MidSection";
import Converter from "../components/Converter";

function AVIF() {
  return (
    <div className="bg-gray-50 ">
      <Header />
      <Converter type="Avif"/>
      <MidSection/>
      <Footer/>
    </div>
  );
}
export default AVIF;
