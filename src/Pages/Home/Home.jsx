import { useEffect, useState } from "react";
import { Typewriter } from 'react-simple-typewriter'
import Reveal, { Fade } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import { easeIn, motion } from "motion/react"
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Home = () => {

  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    const fetchCampaigns = async () => {

      try {
        const response = await fetch("https://crowdcube-server-tau.vercel.app/campaign");
        const data = await response.json();
        const currentDate = new Date(); // Get the current date

        // Filter campaigns where the deadline is still in the future
        const runningCampaigns = data.filter(campaign =>
          new Date(campaign.deadline) > currentDate
        );

        // console.log(runningCampaigns);
        setCampaigns(runningCampaigns.slice(0, 6));
      } catch (error) {
        console.error("Error fetching running campaigns:", error);
      }
    };

    fetchCampaigns();
  }, []);
  // Define custom keyframes for iconic animation
  const bounceIn = keyframes`
  0% {
    transform: scale(0.3);
    opacity: 0;
  }
  50% {
    transform: scale(1.05);
    opacity: 1;
  }
  70% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;
  return (

    <>
      <Helmet>
        <title>Home | Crowd funding</title>
        <meta name="description" content="Welcome to the home page of Crowdfunding."/>
      </Helmet>

      <header className="">


        <section className="relative lg:h-[600px] bg-gray-800 text-white">
          {/* <!-- Banner Content --> */}
          <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-center">
              <span style={{ color: 'seagreen', fontWeight: 'bold' }}>
                {/* Style will be inherited from the parent element */}
                <Typewriter
                  words={[' Empowering Dreams Together']}
                  loop={5}
                  cursor
                  cursorStyle='_'
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                // onLoopDone={handleDone}
                // onType={handleType}
                />
              </span>
            </h1>
            <p className="text-center text-gray-300 mt-4">
              A platform to raise funds for projects, ideas, and causes. Connect with contributors to make your vision a reality.
            </p>
          </div>

          {/* <!-- Carousel Section --> */}
          <div className="container mx-auto px-4 mt-2">
            <div className="carousel w-full">
              {/* <!-- Slide 1 --> */}
              <div id="slide1" className="carousel-item relative w-full">
                <img src="https://i.ibb.co.com/bL5rkQb/wall-8155414-1920.jpg" className="w-full lg:h-[400px] object/-cover" alt="Creative Projects" />
                <div className="absolute bottom-0 left-0 p-6 bg-gray-900 bg-opacity-75 w-full">
                  <h2 className="text-2xl font-bold">Creative Projects</h2>
                  <p>Turn your artistic vision into reality with the help of a supportive community.</p>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide4" className="btn btn-circle">❮</a>
                  <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
              </div>

              {/* <!-- Slide 2 --> */}
              <div id="slide2" className="carousel-item relative w-full">
                <img src="https://i.ibb.co.com/vXwct2N/hospital-8352776-1280.jpg" className="w-full lg:h-[400px] obj/ect-cover" alt="Personal Causes" />
                <div className="absolute bottom-0 left-0 p-6 bg-gray-900 bg-opacity-75 w-full">
                  <h2 className="text-2xl font-bold">Personal Causes</h2>
                  <p>Raise funds for personal needs, medical expenses, or emergencies.</p>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide1" className="btn btn-circle">❮</a>
                  <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
              </div>

              {/* <!-- Slide 3 --> */}
              <div id="slide3" className="carousel-item relative w-full">
                <img src="https://i.ibb.co.com/gV046P4/startup-3267505-640.jpg" className="w-full lg:h-[400px] object-cover" alt="Startups" />

                <div className="absolute bottom-0 left-0 p-6 bg-gray-900 bg-opacity-75 w-full">
                  <h2 className="text-2xl font-bold">Startups</h2>
                  <p>Launch innovative products and gain support to grow your business.</p>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide2" className="btn btn-circle">❮</a>
                  <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
              </div>

              {/* <!-- Slide 4 --> */}
              <div id="slide4" className="carousel-item relative w-full">
                <img src="https://i.ibb.co.com/Sdjj4Zd/team-386673-640.jpg" className="w-full lg:h-[400px] object-co/ver" alt="Community Efforts" />
                <div className="absolute bottom-0 left-0 p-6 bg-gray-900 bg-opacity-75 w-full">
                  <h2 className="text-2xl font-bold">Community Efforts</h2>
                  <p>Empower local initiatives to drive meaningful change in your community.</p>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide3" className="btn btn-circle">❮</a>
                  <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
              </div>
            </div>
          </div>

        </section>


      </header>

      <main >

        <section className="py-10 mt-7 bg-gray-600">
          <div className="container mx-auto px-4">
            <Reveal keyframes={bounceIn} cascade duration={5000} triggerOnce>
              <h2 className="text-4xl font-bold text-center mb-8 text-white">Running Campaigns</h2>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {campaigns.map((campaign) => (
                <Reveal keyframes={bounceIn} cascade duration={1000} triggerOnce>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{opacity:1, y:0, transition:{duration:2}}}
                    key={campaign._id}
                    className="bg-base-100 shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <img
                      src={campaign.thumbnail}
                      alt={campaign.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2"><strong>Title:</strong> {campaign.title}</h3>
                      <p className="text-gray-600 mb-4">
                        {campaign.description.length > 100
                          ? campaign.description.substring(0, 100) + "..."
                          : campaign.description}
                      </p>
                      <div className="text-gray-700 mb-4">
                        <p className="font-semibold">MinDonation: ${campaign?.minDonation}</p>

                        <p className="font-semibold">Deadline: {new Date(campaign.deadline).toLocaleDateString()}</p>
                      </div>
                      <Link to={`/campaign/${campaign?._id}`} className="btn bg-green-500 text-white w-full">
                        See More
                      </Link>
                    </div>
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>



        <section className="bg-base-100 shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow py-10">
          <div className="container mx-auto px-4 text-center ">
            <h2 className="text-4xl font-bold mb-6">Special Offers</h2>
            <p className="text-lg  mb-12">Don't miss out on these amazing deals and opportunities!</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Offer 1 */}
              <motion.div initial={{ scale: 0, opacity: 0 }} whileInView={{ opacity: 1, scale: 1, transition: { duration: 2 } }} className="bg-base-100 shadow-lg rounded-lg p-6 hover:rotate-6 duration-300">
                <h3 className="text-2xl font-semibold mb-4">Limited Time Offer</h3>
                <p className="text-gray-600 mb-6">Get 20% extra funding support on your first campaign!</p>
                <button className="btn btn-primary bg-purple-600 text-white w-full">Claim Offer</button>
              </motion.div>

              {/* Offer 2 */}
              <motion.div initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1, transition: { duration: 2 } }} className="bg-base-100 shadow-lg rounded-lg p-6 hover:rotate-6 duration-300">
                <h3 className="text-2xl font-semibold  mb-4">Referral Bonus</h3>
                <p className="text-gray-600 mb-6">Invite a friend and earn up to $50 in credits.</p>
                <button className="btn btn-primary bg-purple-600 text-white w-full">Refer Now</button>
              </motion.div>

              {/* Offer 3 */}
              <motion.div initial={{ scale: 0, opacity: 0 }} whileInView={{ opacity: 1, scale: 1, transition: { duration: 2 } }} className="bg-base-100 shadow-lg rounded-lg p-6 hover:rotate-6 duration-300">
                <h3 className="text-2xl font-semibold  mb-4">Early Bird Campaign</h3>
                <p className="text-gray-600 mb-6">Start your campaign early and receive exclusive benefits.</p>
                <button className="btn btn-primary bg-purple-600 text-white w-full">Get Started</button>
              </motion.div>
            </div>
          </div>
        </section>


        <section className="bg-gray-600 mt-5  py-20 ">
          <motion.div initial={{ x: -50 }}
            animate={{ x: 0, transition: { duration: 2 } }} className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Stay Updated with Our Newsletter</h2>
            <p className="text-lg text-gray-300 mb-12">
              Subscribe to get the latest updates, offers, and campaign insights directly to your inbox.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="px-4 py-3 w-full sm:w-2/3 rounded-md "
              />
              <button className="btn bg-green-500 text-white px-6 py-3 rounded-md">Subscribe</button>
            </div>
          </motion.div>
        </section>


        {/* another own section-1 */}
        <motion.section style={{ y: 50 }} whileInView={{ y: 0, transition: { duration: 2 } }} className=" py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold  mb-6">How Crowdfunding Works</h2>
            <p className="text-lg  mb-12">Follow these simple steps to bring your ideas to life!</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Step 1 */}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, duration: 10 }} className=" p-6 rounded-lg shadow-lg transition transform hover:-translate-y-2 duration-300">
                <h3 className="text-2xl font-semibold  mb-4">Step 1: Create Your Campaign</h3>
                <p className="">Tell your story, set a funding goal, and launch your project!</p>
              </motion.div>

              {/* Step 2 */}
              <div className=" p-6 rounded-lg shadow-lg transition transform hover:-translate-y-2 duration-300">
                <h3 className="text-2xl font-semibold  mb-4">Step 2: Share Your Campaign</h3>
                <p className="">Spread the word, share your campaign on social media, and invite others to support you.</p>
              </div>

              {/* Step 3 */}
              <div className=" p-6 rounded-lg shadow-lg transition transform hover:-translate-y-2 duration-300">
                <h3 className="text-2xl font-semibold  mb-4">Step 3: Reach Your Goal</h3>
                <p className="">Once you reach your goal, it's time to bring your vision to life and update your supporters!</p>
              </div>
            </div>
          </div>
        </motion.section>



        {/* another own section-2 */}
        <motion.section style={{ y: 50 }} whileInView={{ y: 0, transition: { duration: 2 } }} className="py-10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold  mb-6">Featured Campaigns</h2>
            <p className="text-lg  mb-12">Support these incredible projects that are making a difference!</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Campaign 1 */}
              <div className=" p-6 rounded-lg shadow-lg hover:rotate-6 duration-300">
                <h3 className="text-2xl font-semibold  mb-4">"Funding Dreams, Inspiring Change"</h3>
                <p className="">Support a creative initiative that's going to change the world!</p>
                <button className="btn bg-blue-600 text-white mt-4 px-4 py-2 rounded">Support This Campaign</button>
              </div>

              {/* Campaign 2 */}
              <div className=" p-6 rounded-lg shadow-lg hover:rotate-6 duration-300">
                <h3 className="text-2xl font-semibold  mb-4">"Innovate, Inspire, Invest"</h3>
                <p className="">A life-changing project in need of your help to make it happen.</p>
                <button className="btn bg-blue-600 text-white mt-4 px-4 py-2 rounded">Support This Campaign</button>
              </div>

              {/* Campaign 3 */}
              <div className=" p-6 rounded-lg shadow-lg hover:rotate-6 duration-300">
                <h3 className="text-2xl font-semibold  mb-4">"Empowering Dreams"</h3>
                <p className="">Join this movement and contribute to a great cause!</p>
                <button className="btn bg-blue-600 text-white mt-4 px-4 py-2 rounded">Support This Campaign</button>
              </div>
            </div>
          </div>
        </motion.section>

      </main>

    </>
  );
};

export default Home;