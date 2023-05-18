import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsAdmin } from './IsAdmin';


const ProtectedRoutes = ({ requiresLogin, redirectTo }) => {
    const isAdmin = useSelector(state=>state.user.is_admin);

    console.log("prot is admin:", isAdmin);

  if ((!requiresLogin && !isAdmin) || (requiresLogin && isAdmin)) {
    return <Outlet />;
  }

  return <Navigate to={redirectTo} />;
};

export default ProtectedRoutes;