import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedUserRoutes = ({ requiresLogin, redirectTo }) => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  if ((!requiresLogin && !isLoggedIn) || (requiresLogin && isLoggedIn)) {
    return <Outlet />;
  }

  return <Navigate to={redirectTo} />;
};

export default ProtectedUserRoutes;