import PropTypes from 'prop-types';
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';
import useUserData from '../hooks/useUserData';


export default function SellerRoute({children}) {
    const { user, loding } = useAuth();
    const location = useLocation();
    const userData = useUserData();
    if (loding|| !userData?.role) {
        return <span className="loading loading-ring loading-lg"></span>
    }
    if (user && userData?.role === "seller") {
        return children
    } else {

        return <Navigate to="/Login" state={{ from: location }} replace />
    }
}
SellerRoute.propTypes = {
    children: PropTypes.node.isRequired,
};