import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useUserData from "../hooks/useUserData";
import Loading from "../Components/Loading";
import PropTypes from 'prop-types';




export default function AdminRoute({children}) {
  const { user, loding } = useAuth();
  const location = useLocation();
  const userData = useUserData();
  if (loding|| !userData?.role) {
      return <Loading/>
  }
  if (user && userData?.role === "admin") {
      return children
  } else {

      return <Navigate to="/Login" state={{ from: location }} replace />
  }
}
AdminRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

