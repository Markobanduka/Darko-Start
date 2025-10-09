import { Route, Routes } from "react-router-dom";
import ContactPage from "./components/pages/contactPage/ContactPage";
import HomePage from "./components/pages/homePage/HomePage";
import Navbar from "./components/Navbar";
import { Footer } from "./components/Footer";
import GalleryPage from "./components/pages/galleryPage/GalleryPage";
import PricingPage from "./components/pages/pricingPage/PricingPage";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/programi" element={<PricingPage />} />
          <Route path="/galerija" element={<GalleryPage />} />
          <Route path="/kontakt" element={<ContactPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
