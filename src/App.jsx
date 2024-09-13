import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          {/* <Route path="/about" element={<Portfolio />}></Route>
          <Route path="/about" element={<Community />}></Route>
          <Route path="/about" element={<Contact />}></Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
