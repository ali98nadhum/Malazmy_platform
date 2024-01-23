import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LangPage/LandingPage";
import AnimatedCategory from "./components/TreansitionEffict/AnimatedCategory";
import AnimatedSubCategory from "./components/TreansitionEffict/AnimatedSubCategory";
import AnimatedAboutPage from "./components/TreansitionEffict/AnimatedAboutPage";
import VideoComp from "./components/VideoComp/VideoComp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/category" element={<AnimatedCategory />} />
        <Route path="/subcategory/:id" element={<AnimatedSubCategory />} />
        <Route path="/about" element={<AnimatedAboutPage />} />
        <Route path="/tutorial" element={<VideoComp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
