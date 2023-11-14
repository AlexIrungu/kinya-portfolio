import React from "react";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaTiktok  } from 'react-icons/fa';
import { FaCamera, FaPen } from "react-icons/fa";
import { FaVideo,  FaEdit } from "react-icons/fa";
import photo from '../pictures/photography.jpg'
import edit from '../pictures/professionalediting.jpg'
import social from '../pictures/socialmediamarketing.jpg'
import video from '../pictures/videography.jpg'
import maathai from '../pictures/wangari.jpg'
function Home() {
  return (
    <div className="container mx-auto mt-8 font-montserrat">

<div className="relative mb-4">
  <img src={maathai} alt="Wangari Maathai" className="w-full h-auto object-cover rounded" />
  <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl font-bold text-white">
    "The little grassroots people can change this world" - Wangari Maathai
  </h1>
</div>



      
     <p className="text-lg mb-8 font-semibold text-gray-700">
  Explore My Portfolio
</p>

      
<div className="grid grid-cols-2 gap-8">
  <div className="bg-white p-4 rounded shadow transition duration-300 transform hover:scale-105">
    <div className="flex items-center mb-4">
      <FaVideo className="text-4xl text-indigo-600 mr-2" />
      <h2 className="text-xl font-semibold">Creative Video Production</h2>
      <img src={video} alt="Video Production" className="w-32 h-32 object-cover rounded" />
    </div>
  </div>

  <div className="bg-white p-4 rounded shadow transition duration-300 transform hover:scale-105">
    <div className="flex items-center mb-4">
      <FaCamera className="text-4xl text-indigo-600 mr-2" />
      <h2 className="text-xl font-semibold">Social Media Marketing</h2>
      <img src={social} alt="" className="w-32 h-32 object-cover rounded" />
    </div>
  </div>

  <div className="bg-white p-4 rounded shadow transition duration-300 transform hover:scale-105">
    <div className="flex items-center mb-4">
      <FaEdit className="text-4xl text-indigo-600 mr-2" />
      <h2 className="text-xl font-semibold">Broadcast Quality Editing</h2>
      <img src={edit} alt="" className="w-32 h-32 object-cover rounded" />
    </div>
  </div>

  <div className="bg-white p-4 rounded shadow transition duration-300 transform hover:scale-105">
    <div className="flex items-center mb-4">
      <FaCamera className="text-4xl text-indigo-600 mr-2" />
      <h2 className="text-xl font-semibold">Professional Photography</h2>
      <img src={photo} alt="" className="w-32 h-32 object-cover rounded" />
    </div>
  </div>
</div>

      
      
     
       
     
      

      {/* <div className="bg-white p-4 rounded shadow">
        <div className="flex items-center mb-4">
          <FaPen className="text-4xl text-indigo-600 mr-2" />
          <h2 className="text-xl font-semibold">Writing Articles</h2>
        </div>
        <p className="text-gray-700">
          Transform ideas into compelling narratives. Our article writing services are crafted to engage, inform, and leave a lasting impact on your audience.
        </p>
        
      </div> */}
      


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
          {/* <a
            href="https://facebook.com/yourfacebook"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 flex items-center"
          >
            <FaFacebook className="mr-1" />
            
          </a> */}
          <a
            href="https://instagram.com/kiny_a"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 flex items-center"
          >
            <FaInstagram className="mr-1" />
           
          </a>
          <a
            href="https://linkedin.com/in/brenda-kinya-14b668175/"
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
            <FaTiktok className="mr-1" />
           
          </a>
        </div>
        <p>&copy; 2023 </p>
      </div>
    </footer>


    </div>
  );
}

export default Home;
