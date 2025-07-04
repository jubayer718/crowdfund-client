import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../../Components/AuthProvider';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import Loading from '../../Loading/Loading';
import { easeIn, motion } from 'motion/react';
import { Helmet } from 'react-helmet';

const MyCampaign = () => {
  
  const { user,loading } = useContext(AuthContext); // Get the user's email from the context
  if (loading) {
  return <Loading></Loading>
}
  const email = user?.email; // Replace with actual method to get the email dynamically
  const [campaigns, setCampaigns] = useState([]);
 
  useEffect(() => {
    if (!email) return; // Don't proceed if email is not available

    fetch('https://crowdcube-server-tau.vercel.app/campaign/by-email', {
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
      .then(data =>
        setCampaigns(data))
      .catch(error => console.error('Error fetching campaigns:', error));
  }, [email]);


  const handleDelete = (_id) => {
    //  console.log(_id)
Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
    fetch(`https://crowdcube-server-tau.vercel.app/campaign/${_id}`,{method:'DELETE'})
      .then(res => res.json())
      .then(data => {
        // console.log(data)
        if(data.deletedCount>0
        ) {
      
           Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });

          {
            const remaining = campaigns.filter(campaign => campaign._id !== _id);
            setCampaigns(remaining)
}
}
    })  
  }
});
   }

  return (
    <>
       <Helmet>
        <title>My campaign | Crowd funding</title>
        <meta name="description" content="Welcome to the My campaign page of Crowdfunding."/>
      </Helmet>
     <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{duration:2}}} className="p-4 my-12">
  <h1 className="text-3xl font-bold text-center  mb-4">My Campaigns</h1>

  {loading?<Loading/>:campaigns.length > 0 ? (
    <motion.table initial={{opacity:0}} animate={{opacity:1, transition:{duration:1.5,ease:easeIn}}} className="table table-zebra w-full text-left">
      <thead>
        <tr className='bg-green-600 text-white'>
          <th className="p-2 text-lg font-semibold">Title</th>
          <th className="p-2 text-lg font-semibold">Type</th>
          <th className="p-2 text-lg font-semibold">Description</th>
          <th className="p-2 text-lg font-semibold">Min Donation</th>
          <th className="p-2 text-lg font-semibold">Deadline</th>
          <th className="p-2 text-lg font-semibold">Update</th>
          <th className="p-2 text-lg font-semibold">Delete</th>
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
            <td><Link to={`/campaign/update/${campaign._id}`} className='btn text-white bg-green-500'>Update</Link></td>
            <td><button onClick={()=>handleDelete(campaign?._id)} className='btn text-white bg-orange-700'>Delete</button></td>
          </tr>
        ))}
      </tbody>
    </motion.table>
      ) :(
    `${campaigns.length < 0 && <p className="text-center text-lg text-gray-600 mt-4">No campaigns found.</p>}`
  )}
</motion.div></>

  );
};

export default MyCampaign;
