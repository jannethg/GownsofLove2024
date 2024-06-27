import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CampsiteDirectoryPage from "./pages/CampsitesDirectoryPage";
import GownDirectoryPage from "./pages/GownsDirectoryPage";

function App() {
  return (
    <div className="App">
      <Header /> 
      <CampsiteDirectoryPage/>   
      <GownDirectoryPage/>
      <Footer />
    </div>
  );
}

export default App;
