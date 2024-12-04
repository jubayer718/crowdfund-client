


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
        <img src="https://i.ibb.co.com/bL5rkQb/wall-8155414-1920.jpg" className="w-full lg:h-[480px] object-cover" alt="Creative Projects"/>
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
        <img src="https://i.ibb.co.com/vXwct2N/hospital-8352776-1280.jpg" className="w-full lg:h-[480px] object-cover" alt="Personal Causes"/>
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
                <img src="https://i.ibb.co.com/gV046P4/startup-3267505-640.jpg" className="w-full lg:h-[480px] object-cover" alt="Startups"/>
                
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
        <img src="https://i.ibb.co.com/Sdjj4Zd/team-386673-640.jpg" className="w-full lg:h-[480px] object-cover" alt="Community Efforts"/>
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



    </div>
  );
};

export default Home;