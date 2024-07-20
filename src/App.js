import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Routes/Home/Home";
import Training from "./Routes/Training/Training";
import Contact from "./Routes/Contact/Contact";
import Navbar from "./Components/Navbar/Navbar";
import AboutPage from "./Routes/AboutPage/AboutPage";
import Packages from "./Routes/Packages/Packages";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/training" />
          <Route path="/contact" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
