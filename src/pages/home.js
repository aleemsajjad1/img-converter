import Header from "../components/header";
import Footer from "../components/Footer";
import MidSection from "../components/MidSection";
import Converter from "../components/Converter";
import SEOSettings from "../components/SEO_Settings";
function Home() {
  return (
    <div className="bg-gray-50 ">
      <Header />
      <SEOSettings title=" Converterzu | Convert Media Files Online For Free To Any Format" 
      content="Simple image file converter that you can use for free. 80 + Tools and Formats Are Available For You."
      />
      <Converter type="Home"/>
      <MidSection/>
      <Footer/>
    </div>
  );
}

export default Home;