import React from 'react';
import { Navigate } from "react-router-dom";

interface PublicRouteProps {
  element: JSX.Element;
}

const PublicRoute: React.FC<PublicRouteProps> = ({ element }) => {
  const token = sessionStorage.getItem("authToken");

  return token ? <Navigate to="/home" /> : element;
};

export default PublicRoute;
