import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Png from "./pages/png";
import Avif from "./pages/avif";
import Gif from "./pages/gif";
import Ico from "./pages/ico";
import Jpg from "./pages/jpg";
import Svg from "./pages/svg";
import Tif from "./pages/tif";
import Webp from "./pages/webp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="png" element={<Png />} />
          <Route path="avif" element={<Avif />} />
          <Route path="gif" element={<Gif />} />
          <Route path="ico" element={<Ico />} />
          <Route path="jpg" element={<Jpg />} />
          <Route path="svg" element={<Svg />} />
          <Route path="tif" element={<Tif />} />
          <Route path="webp" element={<Webp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
