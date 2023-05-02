import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home";
import Specialties from "./pages/specialties/Specialties";
import Services from "./pages/services/Services";

import "./Main.scss";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer"
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/especialidades" element={<Specialties />} />
        <Route path="/servicios" element={<Services />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
