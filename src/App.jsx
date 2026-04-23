import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Bottom from './Bottom.jsx';
import Home from "./Home.jsx";
import Updates from "./UUpdates.jsx";
import Hobbies from "./Hobbies.jsx";
import Contact from "./Contact.jsx";
import About from "./About.jsx";
import Example from "./Example.jsx";
import Cars from "./Cars.jsx";
import Graphics from "./Graphics.jsx";
import Music from "./Music.jsx";
import Photo from "./Photo.jsx";
import Video from "./Video.jsx";
import NotFound from "./NotFound.jsx";
import ScrollToTop from "./ScrollToTop.jsx"

function App() {
  return (
    <body>
      <div id="root"></div>
        <div className="main">
          <BrowserRouter>
          <ScrollToTop />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/updates" element={<Updates />} />
              <Route path="/hobbies" element={<Hobbies />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/example" element={<Example />} />
              <Route path="hobbies/cars" element={<Cars />} />
              <Route path="hobbies/graphics" element={<Graphics />} />
              <Route path="hobbies/music" element={<Music />} />
              <Route path="hobbies/photo" element={<Photo />} />
              <Route path="hobbies/video" element={<Video />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Bottom />
          </BrowserRouter>
      </div>
    </body>
  );
}

export default App;
