import Header from "../../components/header";
import Footer from "../../components/Footer";
import MidSection from "../../components/MidSection";
import Converter from "../../components/Converter";

function TiffToico() {
  return (
    <div className="bg-gray-50 ">
      <Header />
      <Converter type="Ico" from="tiff" to="ico"/>
      <MidSection/>
      <Footer/>
    </div>
  );
}
export default TiffToico;