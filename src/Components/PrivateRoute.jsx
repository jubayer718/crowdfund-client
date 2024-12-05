import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../Loading/Loading';

const PrivaterRoute = ({children}) => {
  const { user,loading } = useContext(AuthContext)
  const { pathname } = useLocation()
  if (loading) {
   return <Loading></Loading>
  }
  if (user && user?.email) {
    return children
  }
  return <Navigate state={pathname} to={"/login"}></Navigate>
};

export default PrivaterRoute;