import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-950 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Copyright */}
        <p className="text-gray-400">
          © {new Date().getFullYear()} <span className="text-blue-500 font-semibold">Mrunali Hajare</span>. All rights reserved.
        </p>

        {/* Tech Stack */}
        <p className="text-gray-500 mt-2">
          Built with <span className="text-blue-400">React.js</span> & <span className="text-blue-400">Tailwind CSS</span>
        </p>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mt-4">
          <a 
            href="https://github.com/Mrunali-66" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-blue-400 transition duration-300"
          >
            GitHub
          </a>
          <a 
            href="https://www.linkedin.com/in/mrunali-hajare-368052312/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-blue-400 transition duration-300"
          >
            LinkedIn
          </a>
          <a 
            href="mailto:jiyahajare62@gmail.com" 
            className="hover:text-blue-400 transition duration-300"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
