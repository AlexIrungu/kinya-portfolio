import React from "react";
import { FaTwitter, FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";
import { FaCamera, FaPen, FaVideo, FaEdit } from "react-icons/fa";
import photo from "../pictures/photography.jpg";
import edit from "../pictures/professionalediting.jpg";
import social from "../pictures/socialmediamarketing.jpg";
import video from "../pictures/videography.jpg";
import maathai from "../pictures/wangari.jpg";

function Home() {
  return (
    <div className="container mx-auto mt-12 font-montserrat px-4">
      <div className="relative mb-10">
        <img
          src={maathai}
          alt="Wangari Maathai"
          className="w-full h-[400px] object-cover rounded-lg shadow-lg"
        />
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl md:text-4xl font-bold text-white bg-black bg-opacity-50 px-4 py-2 rounded">
          "The little grassroots people can change this world" - Wangari Maathai
        </h1>
      </div>

      <p className="text-2xl font-semibold text-gray-800 text-center mb-10">
        Explore My Portfolio
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: "Creative Video Production", icon: FaVideo, img: video, link: "/video-production" },
          { title: "Social Media Marketing", icon: FaCamera, img: social, link: "/social-media" },
          { title: "Broadcast Quality Editing", icon: FaEdit, img: edit, link: "/editing" },
          { title: "Professional Photography", icon: FaCamera, img: photo, link: "/photography" },
        ].map((service, index) => (
          <a
            key={index}
            href={service.link}
            className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            <service.icon className="text-5xl text-indigo-600 mb-4" />
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              {service.title}
            </h2>
            <img
              src={service.img}
              alt={service.title}
              className="w-32 h-32 object-cover rounded-lg"
            />
          </a>
        ))}
      </div>

      <footer className="bg-gray-900 text-white py-6 mt-16">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
          <div className="flex space-x-6 mb-4 md:mb-0">
            {[
              { href: "https://twitter.com/brenda_kinya_", icon: FaTwitter, color: "hover:text-blue-400" },
              { href: "https://instagram.com/kiny_a", icon: FaInstagram, color: "hover:text-pink-500" },
              { href: "https://linkedin.com/in/brenda-kinya-14b668175/", icon: FaLinkedin, color: "hover:text-blue-600" },
              { href: "https://tiktok.com/@brenda_kinya", icon: FaTiktok, color: "hover:text-gray-500" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-2xl transition ${social.color}`}
              >
                <social.icon />
              </a>
            ))}
          </div>
          <p className="text-gray-400 text-sm">&copy; 2024 Brenda Kinya | All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
