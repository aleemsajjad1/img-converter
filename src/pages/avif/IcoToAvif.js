import Header from "../../components/header";
import Footer from "../../components/Footer";
import MidSection from "../../components/MidSection";
import Converter from "../../components/Converter";

function IcoToAvif() {
  return (
    <div className="bg-gray-50 ">
      <Header />
      <Converter type="Avif" from="ico" to="avif"/>
      <MidSection/>
      <Footer/>
    </div>
  );
}
export default IcoToAvif;