import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CampsiteDirectoryPage from "./pages/CampsitesDirectoryPage";
import GownDirectoryPage from "./pages/GownsDirectoryPage";
import CampsiteDetailPage from "./pages/CampsiteDetailPage";
import GiveLove from "./pages/GiveLove";
import PopGownDirectoryPage from "./pages/PopGownsDirectoryPage";
import { fetchCampsites } from "./features/campsites/campsitesSlice";
import { fetchPartners } from "./features/partners/partnersSlice";
import { fetchPromotions } from "./features/promotions/promotionsSlice";
import { fetchComments } from "./features/comments/commentsSlice";


function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampsites());
    dispatch(fetchPartners());
    dispatch(fetchPromotions());
    dispatch(fetchComments());
}, [dispatch]);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="give-love" element={<GiveLove />} />       
        <Route path="gownsdirectory" element={<GownDirectoryPage />}  />
        <Route path="populargowns" element={<PopGownDirectoryPage />}  />
        <Route path="directory" element={<CampsiteDirectoryPage />} />
        <Route path="directory/:campsiteId" element={<CampsiteDetailPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
