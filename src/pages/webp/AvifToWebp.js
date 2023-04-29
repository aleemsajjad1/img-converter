import Header from "../../components/header";
import Footer from "../../components/Footer";
import MidSection from "../../components/MidSection";
import Converter from "../../components/Converter";

function AvifToWebp() {
  return (
    <div className="bg-gray-50 ">
      <Header />
      <Converter type="Webp" from="avif" to="webp"/>
      <MidSection/>
      <Footer/>
    </div>
  );
}
export default AvifToWebp;