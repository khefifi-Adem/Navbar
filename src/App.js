import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./views/Home";
import Services from "./views/Services";
import Contact from "./views/Contact";
import News from "./views/News";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/services" element={<Services />}/>
              <Route path="/contact" element={<Contact />}/>
              <Route path="/news" element={<News />}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
