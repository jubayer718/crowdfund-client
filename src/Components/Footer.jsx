import Social from "./social/Social";


const Footer = () => {
  return (
    <footer class="bg-gray-900 px-10 text-gray-300 py-10">
      <div className="flex items-center justify-center mb-4"><img className='h-16 w-16 rounded-full' src="https://i.ibb.co.com/kByzcS7/DALL-E-2024-12-04-20-36-53-A-professional-and-minimalist-circular-logo-for-a-crowdfunding-website-na.webp" alt="" /></div> 
  <div class="container mx-auto px-4">
    {/* <!-- Top Info Section --> */}
    <div class="text-center mb-8">
      <p class="text-xl font-semibold text-white">Empowering Dreams, One Contribution at a Time.</p>
      <p class="text-gray-400">We connect ideas with contributors to make dreams a reality.</p>
    </div>

    {/* <!-- Footer Content Grid --> */}
    <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
      {/* <!-- About Us Section --> */}
      <div>
        <h3 class="text-lg font-bold text-white mb-4">About Us</h3>
        <p class="text-sm">
          We are a crowdfunding platform helping individuals and teams raise funds for projects, causes, and ideas that inspire change.
        </p>
      </div>

      {/* <!-- Popular Categories --> */}
      <div>
        <h3 class="text-lg font-bold text-white mb-4">Popular Categories</h3>
        <ul class="space-y-2">
          <li><a href="#" class="hover:text-white">Creative Projects</a></li>
          <li><a href="#" class="hover:text-white">Personal Causes</a></li>
          <li><a href="#" class="hover:text-white">Startups</a></li>
          <li><a href="#" class="hover:text-white">Community Efforts</a></li>
          <li><a href="#" class="hover:text-white">Medical Expenses</a></li>
        </ul>
      </div>

      {/* <!-- Quick Links --> */}
      <div>
        <h3 class="text-lg font-bold text-white mb-4">Quick Links</h3>
        <ul class="space-y-2">
          <li><a href="#" class="hover:text-white">Start a Campaign</a></li>
          <li><a href="#" class="hover:text-white">How It Works</a></li>
          <li><a href="#" class="hover:text-white">Campaign Guidelines</a></li>
          <li><a href="#" class="hover:text-white">Contact Us</a></li>
        </ul>
      </div>

      {/* <!-- Contact Section --> */}
      <div>
        <h3 class="text-lg font-bold text-white mb-4">Contact</h3>
        <p class="text-sm">Email: <a href="mailto:support@yourdomain.com" class="hover:text-white">support@yourdomain.com</a></p>
        <p class="text-sm">Phone: +1 (555) 123-4567</p>
        <p class="text-sm">Address: 123 Crowdfunding Ave, Dream City</p>
        <div class="flex space-x-4 mt-8">
   
          {/* social section */}
              <Social></Social>
              
        </div>
          </div>


    </div>

    {/* <!-- Newsletter Section --> */}
    <div class="mt-8 text-center">
      <div class="form-control w-full md:w-1/2 mx-auto">
        <label class="input-group">
          <input type="email" placeholder="Enter your email" class="input input-bordered w-full" />
          <button class="btn btn-primary">Subscribe</button>
        </label>
      </div>
      <p class="text-gray-500 text-sm mt-2">Stay updated with our latest campaigns and stories.</p>
    </div>

    {/* <!-- Bottom Section --> */}
    <div class="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
      © 2024 Crowdfunding Platform. All rights reserved. | <a href="#" class="hover:text-white">Privacy Policy</a> | <a href="#" class="hover:text-white">Terms of Service</a>
    </div>
  </div>
</footer>

  );
};

export default Footer;