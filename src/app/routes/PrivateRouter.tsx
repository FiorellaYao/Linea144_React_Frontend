import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  element: JSX.Element;
  editEnabled?: boolean;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  element,
  editEnabled = true,
}) => {
  const token = sessionStorage.getItem("authToken");

  if (token && editEnabled) {
    return element;
  }

  return <Navigate to="/" />;
};

export default PrivateRoute;