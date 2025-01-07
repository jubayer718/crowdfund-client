import React from 'react';
import { FaFacebook, FaGithub, FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa6';

const Social = () => {
  return (
    <div className='flex items-center justify-center gap-5 text-3xl'>
      <a href="https://github.com/jubayer718"><FaGithub></FaGithub></a>
      <a href="https://www.linkedin.com/feed"><FaLinkedin></FaLinkedin></a>
      <a href="https://x.com/home"><FaTwitter></FaTwitter></a>
      <a href="https://www.facebook.com/profile.php?id=100085772691496"><FaFacebook></FaFacebook></a>
      
    </div>
  );
};

export default Social;