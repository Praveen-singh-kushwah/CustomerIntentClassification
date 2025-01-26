import React, { useRef } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ isAuthenticated, children }) => {
  // Use a ref to track if the alert has already been shown
  const alertShown = useRef(false);

  if (!isAuthenticated) {
    if (!alertShown.current) {
      alert("Please sign in to access this page.");
      alertShown.current = true; // Set to true to prevent further alerts
    }
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
