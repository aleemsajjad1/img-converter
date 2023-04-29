import Header from "../../components/header";
import Footer from "../../components/Footer";
import MidSection from "../../components/MidSection";
import Converter from "../../components/Converter";

function JpgToIco() {
  return (
    <div className="bg-gray-50 ">
      <Header />
      <Converter type="Ico" from="png" to="ico"/>
      <MidSection/>
      <Footer/>
    </div>
  );
}
export default JpgToIco;