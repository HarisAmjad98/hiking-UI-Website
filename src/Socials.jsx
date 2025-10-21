import React from 'react'
import { FaTwitter, FaInstagram } from "react-icons/fa";

export default function Socials() {
  return (
    <aside className="fixed">
    <div className="flex flex-col items-center justify-center h-[90vh] text-white text-sm">
      <div className='my-3'>
        <p className="[writing-mode:vertical-rl] [text-orientation:upright] text-xs">
          Follow Us
        </p>
      </div>
      <div className="flex flex-col items-center space-y-3">
        <a href="https://twitter.com" target="_blank" rel="noreferrer noopener">
          <FaTwitter className="h-4 w-4 text-white hover:text-blue-400 transition-colors duration-200" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer noopener">
          <FaInstagram className="h-4 w-4 text-white hover:text-pink-500 transition-colors duration-200" />
        </a>
      </div>
    </div>
    </aside>
  );
}
