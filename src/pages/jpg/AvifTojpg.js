import Header from "../../components/header";
import Footer from "../../components/Footer";
import MidSection from "../../components/MidSection";
import Converter from "../../components/Converter";

function AvifToJpg() {
  return (
    <div className="bg-gray-50 ">
      <Header />
      <Converter type="Jpg" from="avif" to="jpg"/>
      <MidSection/>
      <Footer/>
    </div>
  );
}
export default AvifToJpg;