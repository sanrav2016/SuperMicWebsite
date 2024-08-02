import React from 'react'
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-row justify-center items-center gap-10 bg-black text-white text-sm p-16">
      <a href="https://www.linkedin.com/company/mit-beaver-works-summer-institute/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin color="#fff" size={30} />
      </a>
      <a href="https://twitter.com/intent/user?screen_name=MITBWSI" target="_blank" rel="noopener noreferrer">
        <FaTwitter color="#fff"  size={30} />
      </a>
      <a href="https://www.youtube.com/channel/UCZ6aVlpRXxU7uR4NBRAYvzQ?sub_confirmation=1" target="_blank" rel="noopener noreferrer">
        <FaYoutube color="#fff" size={30} />
      </a>
      <a href="https://www.instagram.com/MITBWSI/" target="_blank" rel="noopener noreferrer">
        <FaSquareInstagram color="#fff" size={30} />
      </a>
    </div>
  )
}

export default Footer
