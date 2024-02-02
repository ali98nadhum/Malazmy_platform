import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LangPage/LandingPage";
import AnimatedCategory from "./components/TreansitionEffict/AnimatedCategory";
import AnimatedSubCategory from "./components/TreansitionEffict/AnimatedSubCategory";
import AnimatedAboutPage from "./components/TreansitionEffict/AnimatedAboutPage";
import AnimatedLectures from "./components/TreansitionEffict/AnimatedLectures";
import VideoComp from "./components/VideoComp/VideoComp";
import "./App.css";
import { useStore } from "./store";

function App() {
  const { isDark } = useStore();

  return (
    <div className="App" data-theme={isDark ? "dark" : "light"}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/category" element={<AnimatedCategory />} />
          <Route path="/subcategory/:id" element={<AnimatedSubCategory />} />
          <Route path="/about" element={<AnimatedAboutPage />} />
          <Route path="/tutorial" element={<VideoComp />} />
          <Route path="/lecture" element={<AnimatedLectures />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
