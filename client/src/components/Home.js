import React from "react";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaPlay  } from 'react-icons/fa';

function Home() {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-4xl font-bold mb-4">Welcome to Our Broadcast Production Portfolio</h1>
      <p className="text-lg mb-8">
        Elevate your brand with top-notch broadcast production services. We specialize in creating
        compelling content that captivates audiences.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Creative Video Production</h2>
          <p>
            Our team of skilled professionals is dedicated to bringing your ideas to life through
            creative and impactful video production.
          </p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Live Event Coverage</h2>
          <p>
            Capture the excitement of your live events with our comprehensive live event coverage
            services. We ensure every moment is captured with precision and style.
          </p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Broadcast Quality Editing</h2>
          <p>
            Our editing team is equipped with the latest technology to deliver broadcast-quality
            editing services, ensuring your content stands out.
          </p>
        </div>
      </div>


      <footer className="bg-black text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-4">
          <a
            href="https://twitter.com/brenda_kinya_"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 flex items-center"
          >
            <FaTwitter className="mr-1" />
            
          </a>
          <a
            href="https://facebook.com/yourfacebook"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 flex items-center"
          >
            <FaFacebook className="mr-1" />
            
          </a>
          <a
            href="https://instagram.com/kiny_a"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 flex items-center"
          >
            <FaInstagram className="mr-1" />
           
          </a>
          <a
            href="https://linkedin.com/in/yourlinkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700 flex items-center"
          >
            <FaLinkedin className="mr-1" />
            
          </a>
          <a
            href="https://tiktok.com/@brenda_kinya"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-600 flex items-center"
          >
            <FaPlay className="mr-1" />
           
          </a>
        </div>
        <p>&copy; 2023 Your Broadcast Production Portfolio</p>
      </div>
    </footer>


    </div>
  );
}

export default Home;
