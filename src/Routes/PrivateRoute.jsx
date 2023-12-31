import  { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation()

    if(loading){
        return <></>
    }
    if(user){
        return children
    }
    return <Navigate to='/login' state={{from : location}} ></Navigate>
};

export default PrivateRoute;