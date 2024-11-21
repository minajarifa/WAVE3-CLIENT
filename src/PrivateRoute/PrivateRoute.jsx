import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import PropTypes from 'prop-types';


export default function PrivateRoute({children}) {
    const{user,loding}=useAuth();
    const location =useLocation()
    if(loding){
       return <span className="loading loading-ring loading-lg"></span>
    }
    if(user){
        return children
    }else{

        return <Navigate state={{from: location}} replace />
    }
}
PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired, // or PropTypes.element if you expect only one React element
};