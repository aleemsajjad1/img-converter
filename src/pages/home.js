import Header from "../components/header";
import Footer from "../components/Footer";
import MidSection from "../components/MidSection";
import Converter from "../components/Converter";

function Home() {
  return (
    <div className="bg-gray-50 ">
      <Header />
      <Converter type="Home"/>
      <MidSection/>
      <Footer/>
    </div>
  );
}

export default Home;