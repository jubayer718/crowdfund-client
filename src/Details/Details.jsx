import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useLoaderData, useParams } from 'react-router-dom';
import { AuthContext } from '../Components/AuthProvider';
import Loading from '../Loading/Loading';
import Swal from 'sweetalert2';

const DetailsPage = () => {
  const { loading, user } = useContext(AuthContext)
    // const { id } = useParams();
    if (loading) {
      return <Loading></Loading>
    }
  const singleCampaignData = useLoaderData()
  // console.log(singleCampaignData)
  const [campaign, setCampaign] = useState(singleCampaignData);
  // console.log(email, displayName)
  const { thumbnail, title, description, startedDate, deadline, email, name } = campaign
// console.log(email,name)  
  // const { email, displayName } = user

  const handleStoredData = () => {
    const addNewData={thumbnail,title,description,startedDate,deadline,email,name}

    fetch('http://localhost:5000/campaign/donateData', {
      method: 'POST',
      headers: {
       'content-type':"application/json"
      },
      body:JSON.stringify(addNewData)
    }).then(res => res.json()).then(data => {
      console.log(data)
       if (data.insertedId) {
          Swal.fire({
            title: 'success!',
            text: 'donation successful',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
        }
    })
  }
console.log(campaign)
    return (
      
      <div className="card card-side my-12 flex flex-col  lg:flex-row bg-base-100 border-2 border-gray-400">
  <figure className='lg:w-2/5  p-4'>
          <img
            className='w-full h-56 object-cover'
      src={campaign?.thumbnail}
      alt="Movie" />
  </figure>
  <div className="card-body">
    <h1><strong>Title:</strong> {campaign?.title}</h1>
             <p><strong>Description:</strong> {campaign?.description}</p>
          <p><strong>Start Date:</strong> {campaign?.startedDate}</p>
          <p><strong>Min Donation:</strong>{ campaign?.minDonation}</p>
             <p><strong>End Date:</strong> {campaign?.deadline}</p>
             <p><strong>Created By:</strong> {campaign?.email}</p>
    <div className="card-actions justify-end">
      <button onClick={handleStoredData} className="btn bg-green-600 w-full text-white">Donate</button>
    </div>
  </div>
</div>
    );
};

export default DetailsPage;