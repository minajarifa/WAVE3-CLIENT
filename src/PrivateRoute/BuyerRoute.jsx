import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import useAuth from "../hooks/useAuth";
import useUserData from "../hooks/useUserData";



export default function BuyerRoute({children}) {
    const { user, loding } = useAuth();
    const location = useLocation();
    const userData = useUserData();
    if (loding|| !userData?.role) {
        return <span className="loading loading-bars loading-lg"></span>
    }
    if (user && userData?.role === "buyer") {
        return children
    } else {

        return <Navigate to="/Login" state={{ from: location }} replace />
    }
}
BuyerRoute.propTypes = {
    children: PropTypes.node.isRequired,
};