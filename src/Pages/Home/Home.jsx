import { Link } from "react-router-dom";



const Home = () => {
  return (
    <div>
      <header>
       
      <section className="relative bg-gray-800 text-white">
  {/* <!-- Banner Content --> */}
  <div className="container mx-auto px-4 py-8">
    <h1 className="text-4xl font-bold text-center">Empowering Dreams Together</h1>
    <p className="text-center text-gray-300 mt-4">
      A platform to raise funds for projects, ideas, and causes. Connect with contributors to make your vision a reality.
    </p>
  </div>

  {/* <!-- Carousel Section --> */}
  <div className="container mx-auto px-4 mt-8">
    <div className="carousel w-full">
      {/* <!-- Slide 1 --> */}
      <div id="slide1" className="carousel-item relative w-full">
        <img src="https://i.ibb.co.com/bL5rkQb/wall-8155414-1920.jpg" className="w-full lg:h-[480px] object-/cover" alt="Creative Projects"/>
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
        <img src="https://i.ibb.co.com/vXwct2N/hospital-8352776-1280.jpg" className="w-full lg:h-[480px] obj/ect-cover" alt="Personal Causes"/>
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
                <img src="https://i.ibb.co.com/gV046P4/startup-3267505-640.jpg" className="w-full lg:h-[480px] objec/t-cover" alt="Startups"/>
                
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
        <img src="https://i.ibb.co.com/Sdjj4Zd/team-386673-640.jpg" className="w-full lg:h-[480px] object-co/ver" alt="Community Efforts"/>
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

      <main>
        <section className="bg-gray-100 py-12">
  <div className="container mx-auto px-4">
    {/* <!-- Section Heading --> */}
    <div className="text-center mb-8">
      <h2 className="text-4xl font-bold text-gray-800">Running Campaigns</h2>
      <p className="text-gray-600 mt-2">Explore ongoing campaigns and contribute to make a difference.</p>
    </div>

    {/* <!-- Campaign Grid --> */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* <!-- Single Campaign Card --> */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img src="https://i.ibb.co.com/4jLrzmP/pexels-julia-m-cameron-6994982.jpg" alt="Campaign Image" className="w-full h-48 object-cover"/>
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-800">Ongoing Campaigns</h3>
          <p className="text-gray-600 mt-2">A brief description of the campaign highlighting the purpose and goals.</p>
          <div className="mt-4">
            <div className="w-full bg-gray-200 h-2 rounded">
              <div className="bg-blue-500 h-2 rounded" style={{width:"75%"}}></div>
            </div>
            <div className="flex justify-between text-sm text-gray-600 mt-2">
              <span>75% Funded</span>
              <span>$15,000 of $20,000</span>
            </div>
          </div>
          <Link className="btn btn-primary w-full mt-4">Donate Now</Link>
        </div>
      </div>

      {/* <!-- Another Campaign Card --> */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img src="https://i.ibb.co.com/fx5nT6n/pexels-rdne-6646917.jpg" alt="Campaign Image" className="w-full h-48 object-cover"/>
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-800">Support Live Campaigns</h3>
          <p className="text-gray-600 mt-2">Support this cause to help achieve meaningful change.</p>
          <div className="mt-4">
            <div className="w-full bg-gray-200 h-2 rounded">
                      <div className="bg-green-500 h-2 rounded" style={{width:"50%"}}></div>
            </div>
            <div className="flex justify-between text-sm text-gray-600 mt-2">
              <span>50% Funded</span>
              <span>$10,000 of $20,000</span>
            </div>
          </div>
          <button className="btn btn-primary w-full mt-4">Donate Now</button>
        </div>
      </div>

      {/* <!-- Another Campaign Card --> */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img src="https://i.ibb.co.com/Dw6mZqd/pexels-rdne-6646883.jpg" alt="Campaign Image" className="w-full h-48 object-cover"/>
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-800">Help Fund These Projects</h3>
          <p className="text-gray-600 mt-2">Join hands to support this meaningful initiative.</p>
          <div className="mt-4">
            <div className="w-full bg-gray-200 h-2 rounded">
              <div className="bg-red-500 h-2 rounded" style={{width: "30%"}}></div>
            </div>
            <div className="flex justify-between text-sm text-gray-600 mt-2">
              <span>30% Funded</span>
              <span>$6,000 of $20,000</span>
            </div>
          </div>
          <button className="btn btn-primary w-full mt-4">Donate Now</button>
        </div>
      </div>
    </div>

    {/* <!-- View More Button --> */}
    <div className="text-center mt-8">
      <Link to="/allCampaign" className="btn btn-outline btn-primary">View All Campaigns</Link>
    </div>
  </div>
        </section>
        
        {/* another own section-1 */}
     <section className="bg-gradient-to-r from-blue-500 via-green-400 to-purple-500 py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">How Crowdfunding Works</h2>
        <p className="text-lg text-white mb-12">Follow these simple steps to bring your ideas to life!</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="bg-opacity-75 p-6 rounded-lg backdrop-blur-md text-white">
            <h3 className="text-3xl font-semibold mb-4">Step 1: Create Your Campaign</h3>
            <p className="text-lg">Tell your story, set a funding goal, and launch your project!</p>
          </div>

          {/* Step 2 */}
          <div className="bg-opacity-75 p-6 rounded-lg backdrop-blur-md text-white">
            <h3 className="text-3xl font-semibold mb-4">Step 2: Share Your Campaign</h3>
            <p className="text-lg">Spread the word, share your campaign on social media, and invite others to support you.</p>
          </div>

          {/* Step 3 */}
          <div className="bg-opacity-75 p-6 rounded-lg backdrop-blur-md text-white">
            <h3 className="text-3xl font-semibold mb-4">Step 3: Reach Your Goal</h3>
            <p className="text-lg">Once you reach your goal, it's time to bring your vision to life and update your supporters!</p>
          </div>
        </div>
      </div>
    </section>

        
        {/* another own section-2 */}
 <section className="bg-gradient-to-l from-red-500 via-yellow-400 to-pink-500 py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">Featured Campaigns</h2>
        <p className="text-lg text-white mb-12">Support these incredible projects that are making a difference!</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Campaign 1 */}
          <div className="bg-opacity-75 p-6 rounded-lg backdrop-blur-md text-white">
            <h3 className="text-3xl font-semibold mb-4">Campaign Title 1</h3>
            <p className="text-lg">Support a creative initiative that's going to change the world!</p>
            <button className="btn btn-primary mt-4">Support This Campaign</button>
          </div>

          {/* Campaign 2 */}
          <div className="bg-opacity-75 p-6 rounded-lg backdrop-blur-md text-white">
            <h3 className="text-3xl font-semibold mb-4">Campaign Title 2</h3>
            <p className="text-lg">A life-changing project in need of your help to make it happen.</p>
            <button className="btn btn-primary mt-4">Support This Campaign</button>
          </div>

          {/* Campaign 3 */}
          <div className="bg-opacity-75 p-6 rounded-lg backdrop-blur-md text-white">
            <h3 className="text-3xl font-semibold mb-4">Campaign Title 3</h3>
            <p className="text-lg">Join this movement and contribute to a great cause!</p>
            <button className="btn btn-primary mt-4">Support This Campaign</button>
          </div>
        </div>
      </div>
    </section>


   </main>

    </div>
  );
};

export default Home;