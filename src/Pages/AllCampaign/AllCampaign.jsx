import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import {easeIn, easeInOut, motion} from "motion/react"
import { Helmet } from 'react-helmet';


const AllCampaign = () => {
  // const navigate = useNavigate();
  const loadedCampaigns = useLoaderData();
  const [campaigns, setCampaigns] = useState(loadedCampaigns);
  
  const handleSort = () => {
    setCampaigns([...campaigns].sort((a, b) => b?.minDonation - a?.minDonation));
  }
  return (
    <>
      <Helmet>
        <title>All Campaign | Crowdfunding</title>
        <meta name="description" content="Welcome to the All campaign page of Crowdfunding"/>
    </Helmet>
    <motion.div initial={{y:50 , opacity:0 }} animate={{y:0 , opacity:1, transition:{duration:2}}} className='mt-10'>
      <div className='flex items-center justify-end '><button onClick={handleSort} className='btn btn-warning'>Sort By Donation Price</button></div>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 my-8'>
      {
        campaigns.map(campaign => (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition:{duration:1.5,ease:easeIn}}} className="card bg-base-100 shadow-xl">
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
          </motion.div>
        ))
      }

    </div>
    </motion.div>
    </>
  );
};


export default AllCampaign;
