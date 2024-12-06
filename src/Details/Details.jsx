import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const DetailsPage = () => {
    const { id } = useParams();
    const [campaign, setCampaign] = useState(null);

    useEffect(() => {
        // Fetch campaign details by ID
        const fetchCampaignDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/campaigns/${id}`);
                setCampaign(response.data);
            } catch (error) {
                console.error("Error fetching campaign details:", error);
            }
        };

        fetchCampaignDetails();
    }, [id]);

    if (!campaign) return <p>Loading...</p>;

    return (
        <div>
            <h1>{campaign.title}</h1>
            <p><strong>Description:</strong> {campaign.description}</p>
            <p><strong>Start Date:</strong> {new Date(campaign.startDate).toLocaleDateString()}</p>
            <p><strong>End Date:</strong> {new Date(campaign.endDate).toLocaleDateString()}</p>
            <p><strong>Created By:</strong> {campaign.createdBy}</p>
        </div>
    );
};

export default DetailsPage;