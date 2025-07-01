import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Components/AuthProvider";
import Loading from "../../Loading/Loading";
import { data, useLoaderData } from "react-router-dom";
import { easeIn, motion } from "motion/react";


const MyDonation = () => {
  const { user, loading } = useContext(AuthContext); // Get the user's email from the context
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

  }, [email]);


  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 2 } }} className="my-12">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4">
        {
          campaigns.map((campaign) => <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{duration:1.5, ease:easeIn}}} key={campaign?._id} className="card card-compact bg-base-100  shadow-xl">
            <figure>
              <img
                className="h-56 w-full object-cover"
                src={campaign?.thumbnail}
                alt="campaign image" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-2xl">Title: {campaign?.title}</h2>
              <p className="font-bold">Type: {campaign?.type}</p>
              <p><strong>Description:</strong> {campaign?.description}</p>

            </div>
          </motion.div>)
        }
      </div>
    </motion.div>
  );
};

export default MyDonation;