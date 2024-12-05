import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext)
  const {pathname}=useLocation()
  if (user && user?.email) {
    return children
  }
return <Navigate state={pathname} to="/login"></Navigate>

};

export default PrivateRoute;