import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Conference from "./pages/2026Conference";
import Media from "./pages/Media";
import Contact from "./pages/Contact";

import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/conference-2026" element={<Conference />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/media" element={<Media />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
