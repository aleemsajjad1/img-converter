import Header from "../components/header";
import Footer from "../components/Footer";
import MidSection from "../components/MidSection";
import Converter from "../components/Converter";
import SEOSettings from "../components/SEO_Settings";
function Home() {
  return (
    <div className="bg-gray-50 ">
      <Header />
      <SEOSettings
        title=" Converterzu | Convert Media Files Online For Free To Any Format"
        content="Simple image file converter that you can use for free. 80 + Tools and Formats Are Available For You."
      />
      <Converter type="Home" />
      <MidSection />
      <Footer />
    </div>
  );
}

export default Home;

// import React from "react";

// class ImageConverter extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       imageUrl:
//         "http://res.cloudinary.com/die5mkbau/image/upload/v1684000705/bmtwk8ga1mzchdx9h0ve.svg",
//       file: null,
//     };
//   }

//   convertToBlob = () => {
//     const { imageUrl } = this.state;

//     fetch(imageUrl)
//       .then((response) => response.blob())
//       .then((blob) => {
//         const file = new File([blob], "image.svg", { type: "image/svg+xml" });
//         this.setState({ file });
//       })
//       .catch((error) => {
//         console.error("Error converting image:", error);
//       });
//   };

//   render() {
//     const { file } = this.state;
//     console.log(file);
//     return (
//       <div>
//         <button onClick={this.convertToBlob}>Convert to File</button>
//         {file && (
//           <a href={URL.createObjectURL(file)} download="image.svg">
//             Download File
//           </a>
//         )}
//       </div>
//     );
//   }
// }

// export default ImageConverter;
