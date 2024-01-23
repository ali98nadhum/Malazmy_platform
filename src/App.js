import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LangPage/LandingPage";
import SubCategory from "./components/SubCategory/SubCategory";
import { category } from "./data";
import AnimatedCategory from "./components/TreansitionEffict/AnimatedCategory";
import AnimatedSubCategory from "./components/TreansitionEffict/AnimatedSubCategory"
import  AboutPage  from "./components/AboutPage/AboutPage";
import AnimatedAboutPage from "./components/TreansitionEffict/AnimatedAboutPage";

function App() {
  const [data, setData] = useState(category);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/category" element={<AnimatedCategory />} />
        <Route
          path="/subcategory/:id"
          element={<AnimatedSubCategory/>}
        />
        <Route path="/about" element={ <AnimatedAboutPage/> }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
