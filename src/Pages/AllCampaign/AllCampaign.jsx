import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';

const AllCampaign = () => {
  // const navigate = useNavigate();
  const loadedCampaigns = useLoaderData();
  const [campaigns, setCampaigns] = useState(loadedCampaigns);
  // console.log(campaigns)
  // const handleSeeMore = (id) => {
  //   // Redirect to the campaign details page
  //   navigate(`/campaign/${id}`);
  // };
  const handleSort = () => {
    setCampaigns([...campaigns].sort((a, b) => b?.minDonation - a?.minDonation));
  }
  return (
    <div className='mt-10'>
      <div className='flex items-center justify-end '><button onClick={handleSort} className='btn btn-warning'>Sort By Donation Price</button></div>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 my-8'>
      {
        campaigns.map(campaign => (
          <div className="card bg-base-100 shadow-xl">
            <figure>
              <img
                 className='h-60 w-full object-cover'
                src={campaign?.thumbnail}
                alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="font-semibold"><span className='font-bold'>Title:</span> {campaign?.title}
              </h2>
              <p><span className='font-semibold'>Description: </span>{campaign?.description}</p>
               <p><span className='font-semibold'>Deadline: </span>{campaign.deadline}</p>
                <p ><span className='font-semibold'>Min Donation: </span>{campaign.minDonation}</p>
              <div className="card-actions ">
                <Link
                  to={`/campaign/${campaign._id}`}
                className='btn w-full'
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
              </div>
            </div>
          </div>
        ))
      }

    </div>
    </div>




    // <div className='my-12' style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
    //   <h1 style={{ textAlign: 'center',fontSize:"30px" ,fontWeight:"bold", marginBottom: '10px' }}>All Campaigns</h1>

    //   <div className='flex items-center justify-between my-8'>
    //     <div></div>
    //     <div><button onClick={handleSort} className='btn btn-warning'>Sort By Donation Price</button></div>
    //   </div>
    //   <table
    //     style={{
    //       width: '100%',
    //       borderCollapse: 'collapse',
    //       boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    //       borderRadius: '8px',
    //       overflow: 'hidden',
    //     }}
    //   >
    //     <thead>
    //       <tr style={{ backgroundColor: '#4CAF50', color: 'white' }}>
    //         <th style={headerCellStyle}>Title</th>
    //         <th style={headerCellStyle}>Description</th>
    //         <th style={headerCellStyle}>Start Date</th>
    //         <th style={headerCellStyle}>End Date</th>
    //         <th style={headerCellStyle}>Min Donation</th>

    //         <th style={headerCellStyle}>Actions</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {campaigns.map((campaign) => (
    //         <tr
    //           key={campaign._id}
    //           style={{
    //             backgroundColor: '#f9f9f9',
    //             transition: 'background-color 0.3s ease',
    //           }}
    //           onMouseEnter={(e) =>
    //             (e.currentTarget.style.backgroundColor = '#f1f1f1')
    //           }
    //           onMouseLeave={(e) =>
    //             (e.currentTarget.style.backgroundColor = '#f9f9f9')
    //           }
    //         >
    //           <td style={cellStyle}>{campaign.title}</td>
    //           <td className='w-3/5' style={cellStyle}>{campaign.description}</td>
    //           <td style={cellStyle}>{campaign.startedDate}</td>
    //           <td style={cellStyle}>{campaign.deadline}</td>
    //           <td style={cellStyle}>{campaign.minDonation}</td>
    //           <td style={cellStyle}>
    //             <Link
    //               to={`/campaign/${campaign._id}`}
    //             className='btn'
    //               style={{
    //                 backgroundColor: '#4CAF50',
    //                 color: 'white',
    //                 border: 'none',
    //                 padding: '10px 15px',
    //                 borderRadius: '5px',
    //                 cursor: 'pointer',
    //                 fontWeight: 'bold',
    //                 transition: 'background-color 0.3s ease',
    //               }}
    //               onMouseEnter={(e) => (e.target.style.backgroundColor = '#45a049')}
    //               onMouseLeave={(e) => (e.target.style.backgroundColor = '#4CAF50')}
    //             >
    //               See More
    //             </Link>
    //           </td>
    //         </tr>
    //       ))}
    //     </tbody>
    //   </table>
    // </div>
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
