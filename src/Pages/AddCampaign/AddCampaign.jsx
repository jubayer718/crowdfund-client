import React, { useContext } from 'react';
import { AuthContext } from '../../Components/AuthProvider';
import Loading from '../../Loading/Loading';

const AddCampaign = () => {
  const { loading } = useContext(AuthContext);
  if (loading) {
   return <Loading></Loading>
  }
  return (
    <div>
      add Campaign
    </div>
  );
};

export default AddCampaign;