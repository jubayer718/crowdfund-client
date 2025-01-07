import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Components/AuthProvider";
import Loading from "../../Loading/Loading";
import { data, useLoaderData } from "react-router-dom";


const MyDonation = () => {
 const { user,loading } = useContext(AuthContext); // Get the user's email from the context
  if (loading) {
  return <Loading></Loading>
}
  const email = user?.email;
  const name = user?.displayname;
  const [campaigns, setCampaigns] = useState([]);
  // const donationData = useLoaderData()
  // console.log(donationData)
  useEffect(() => {
    if (!email) return; // Don't proceed if email is not available
    fetch(`https://crowdcube-server-tau.vercel.app/myDonation/${email}`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setCampaigns(data)
      })
     
    
    // fetch('https://crowdcube-server-tau.vercel.app/campaign/by-email', {
    //   method: 'POST', // Use POST since we're sending the email in the body
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ email,name }), // Include email in the request body
    // })
    //   .then(res => {
    //     if (!res.ok) {
    //       throw new Error('Failed to fetch campaigns');
    //     }
    //     return res.json();
    //   })
    //   .then(data =>
        
        
        
    //     setCampaigns(data))
    //   .catch(error => console.error('Error fetching campaigns:', error));
  }, [email]);


  return (
    <div className="my-12">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4">
         {
        campaigns.map((campaign) =><div key={campaign?._id} className="card card-compact bg-base-100  shadow-xl">
  <figure>
            <img
              className="h-56 w-full object-cover"
      src={campaign?.thumbnail}
      alt="campaign image" />
  </figure>
  <div className="card-body">
            <h2 className="card-title text-2xl">Title: { campaign?.title}</h2>
            <p className="font-bold">Type: { campaign?.type}</p>
            <p><strong>Description:</strong> {campaign?.description}</p>
   
  </div>
</div>)
}
     </div>
    </div>
  );
};

export default MyDonation;