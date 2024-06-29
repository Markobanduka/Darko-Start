import React from "react";
import Cards from "./components/ui/Cards";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContactPage from "./components/pages/contactPage/ContactPage";
import HomePage from "./components/pages/homePage/HomePage";
import Navbar from "./components/Navbar";
import { Footer } from "./components/Footer";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/kontakt" element={<ContactPage />} />
          {/* <Cards />  */}
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
