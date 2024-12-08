import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';

const AllCampaign = () => {
  const navigate = useNavigate();
  const loadedCampaigns = useLoaderData();
  const [campaigns, setCampaigns] = useState(loadedCampaigns);
console.log(campaigns)
  // const handleSeeMore = (id) => {
  //   // Redirect to the campaign details page
  //   navigate(`/campaign/${id}`);
  // };

  return (
    <div className='my-12' style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>All Campaigns</h1>
      <table
        style={{
          width: '100%',
          borderCollapse: 'collapse',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          borderRadius: '8px',
          overflow: 'hidden',
        }}
      >
        <thead>
          <tr style={{ backgroundColor: '#4CAF50', color: 'white' }}>
            <th style={headerCellStyle}>Title</th>
            <th style={headerCellStyle}>Description</th>
            <th style={headerCellStyle}>Start Date</th>
            <th style={headerCellStyle}>End Date</th>
            <th style={headerCellStyle}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {campaigns.map((campaign) => (
            <tr
              key={campaign._id}
              style={{
                backgroundColor: '#f9f9f9',
                transition: 'background-color 0.3s ease',
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = '#f1f1f1')
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = '#f9f9f9')
              }
            >
              <td style={cellStyle}>{campaign.title}</td>
              <td className='w-3/5' style={cellStyle}>{campaign.description}</td>
              <td style={cellStyle}>{campaign.startedDate}</td>
              <td style={cellStyle}>{campaign.deadline}</td>
              <td style={cellStyle}>
                <Link
                  to={`/campaign/${campaign._id}`}
                className='btn'
                  style={{
                    backgroundColor: '#4CAF50',
                    color: 'white',
                    border: 'none',
                    padding: '10px 15px',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    transition: 'background-color 0.3s ease',
                  }}
                  onMouseEnter={(e) => (e.target.style.backgroundColor = '#45a049')}
                  onMouseLeave={(e) => (e.target.style.backgroundColor = '#4CAF50')}
                >
                  See More
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Common styling for table cells
const headerCellStyle = {
  padding: '10px 15px',
  textAlign: 'left',
  fontWeight: 'bold',
};

const cellStyle = {
  padding: '10px 15px',
  textAlign: 'left',
  borderBottom: '1px solid #ddd',
};

export default AllCampaign;
