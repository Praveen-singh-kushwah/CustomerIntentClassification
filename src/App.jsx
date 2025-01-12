import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import DatasetUploadPage from "./pages/DatasetUploadPage";
import ModelTrainingPage from "./pages/ModelTrainingPage";
import Results from "./pages/Results";

function App() {
  return (
    <>
    <div className="w-full overflow-x-hidden fixed z-10">
      <Navbar/>
    </div>
    <div className="">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/DatasetUpload" element={<DatasetUploadPage />} />
          <Route path="/ModelTraining" element={<ModelTrainingPage />} />
          <Route path="/Results" element={<Results />} />
        </Routes>
      </Router>
    </div>
    </>
  );
}

export default App;
