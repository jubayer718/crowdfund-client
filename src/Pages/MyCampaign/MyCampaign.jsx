import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../../Components/AuthProvider';

const MyCampaign = () => {
  const { user } = useContext(AuthContext); // Get the user's email from the context
  const email = user?.email; // Replace with actual method to get the email dynamically
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    if (!email) return; // Don't proceed if email is not available

    fetch('http://localhost:5000/campaign/by-email', {
      method: 'POST', // Use POST since we're sending the email in the body
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }), // Include email in the request body
    })
      .then(res => {
        if (!res.ok) {
          throw new Error('Failed to fetch campaigns');
        }
        return res.json();
      })
      .then(data => setCampaigns(data))
      .catch(error => console.error('Error fetching campaigns:', error));
  }, [email]);

  return (
    <div className="p-4">
  <h1 className="text-3xl font-bold text-center text-gray-900 mb-4">My Campaigns</h1>

  {campaigns.length > 0 ? (
    <table className="table table-zebra w-full text-left">
      <thead>
        <tr>
          <th className="p-2 text-lg font-semibold">Title</th>
          <th className="p-2 text-lg font-semibold">Type</th>
          <th className="p-2 text-lg font-semibold">Description</th>
          <th className="p-2 text-lg font-semibold">Min Donation</th>
          <th className="p-2 text-lg font-semibold">Deadline</th>
        </tr>
      </thead>
      <tbody>
        {campaigns.map(campaign => (
          <tr key={campaign._id} className="hover:bg-gray-100">
            <td className="p-2">{campaign.title}</td>
            <td className="p-2">{campaign.type}</td>
            <td className="p-2">{campaign.description}</td>
            <td className="p-2">{campaign.minDonation}</td>
            <td className="p-2">{campaign.deadline}</td>
          </tr>
        ))}
      </tbody>
    </table>
  ) : (
    <p className="text-center text-lg text-gray-600 mt-4">No campaigns found.</p>
  )}
</div>

  );
};

export default MyCampaign;
