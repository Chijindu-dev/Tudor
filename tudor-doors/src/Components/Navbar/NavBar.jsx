import React from 'react'
import   './NavBar.css'
import { MdEmail } from "react-icons/md"
import { FaPhone, FaTiktok } from "react-icons/fa6";
import { MdLocationCity } from "react-icons/md";
import { FaFacebookF, FaInstagram, FaLinkedinIn} from 'react-icons/fa';



const NavBar = () => {
  return (
    <>
    <nav className='container'>
        <div className='details'> 
            <span> <MdEmail/></span> <p><a  className='mail' href="mailto:Info@tudordoorslimited.com">Info@tudordoorslimited.com</a></p>
            <span><FaPhone/></span><p>+2349039045565, +2348117011514 </p>
            <span><MdLocationCity/></span> <p>Lagos, Nigeria</p>
        </div>
        <div className='icons'>
            <a href="https://www.facebook.com/profile.php?id=61583972730187"><FaFacebookF className='icon'/></a>
            <a href="https://www.instagram.com/tudor_doors?igsh=N3V3YzlncXoyeWN0&utm_source=qr"><FaInstagram className='icon'/></a>
            <a href="https://www.tiktok.com/@tudor_doors?_r=1&_t=ZN-91VGWPtq2go"><FaTiktok className='icon'/></a> 
            <a href=""><FaLinkedinIn className='icon'/></a>
        </div>
    </nav>
    </>
  )
}

export default NavBar