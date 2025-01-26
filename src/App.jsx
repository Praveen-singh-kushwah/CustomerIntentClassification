import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import DatasetUploadPage from "./pages/DatasetUploadPage";
import ModelTrainingPage from "./pages/ModelTrainingPage";
import Results from "./pages/Results";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check for authentication state on load
    const authState = localStorage.getItem('isAuthenticated');
    if (authState) {
      setIsAuthenticated(JSON.parse(authState));
    }
  }, []);

  return (
    <Router>
      <Navbar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/DatasetUpload"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <DatasetUploadPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/ModelTraining"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <ModelTrainingPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/Results"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Results />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
