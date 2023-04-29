import Header from "../../components/header";
import Footer from "../../components/Footer";
import MidSection from "../../components/MidSection";
import Converter from "../../components/Converter";

function AvifToIco() {
  return (
    <div className="bg-gray-50 ">
      <Header />
      <Converter type="Ico" from="avif" to="ico"/>
      <MidSection/>
      <Footer/>
    </div>
  );
}
export default AvifToIco;