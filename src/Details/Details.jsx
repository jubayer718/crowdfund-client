import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useLoaderData, useParams } from 'react-router-dom';
import { AuthContext } from '../Components/AuthProvider';
import Loading from '../Loading/Loading';

const DetailsPage = () => {
  const {loading}=useContext(AuthContext)
    // const { id } = useParams();
    if (loading) {
      return <Loading></Loading>
    }
  const singleCampaignData = useLoaderData()
  console.log(singleCampaignData)
    const [campaign, setCampaign] = useState(singleCampaignData);
  // console.log(campaign)
    // useEffect(() => {
    //     // Fetch campaign details by ID
    //     const fetchCampaignDetails = async () => {
    //         try {
    //             const response = await axios.get(`http://localhost:5000/campaign/${id}`);
    //             setCampaign(response.data);
    //         } catch (error) {
    //             console.error("Error fetching campaign details:", error);
    //         }
    //     };

    //     fetchCampaignDetails();
    // }, [id]);

    // if (!campaign) return <p>Loading...</p>;

    return (
        <div>
            <h1>{campaign?.title}</h1>
            <p><strong>Description:</strong> {campaign?.description}</p>
            <p><strong>Start Date:</strong> {campaign?.startedDate}</p>
            <p><strong>End Date:</strong> {campaign?.deadline}</p>
            <p><strong>Created By:</strong> {campaign?.email}</p>
        </div>
    );
};

export default DetailsPage;