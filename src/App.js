import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense } from "react";

import Navbar from "./Components/Navbar/Navbar";

const Home = lazy(() => import("./Routes/Home/Home"));
const Contact = lazy(() => import("./Routes/Contact/Contact"));
const AboutPage = lazy(() => import("./Routes/AboutPage/AboutPage"));
const Packages = lazy(() => import("./Routes/Packages/Packages"));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Suspense fallback={<h1>Loading....</h1>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
