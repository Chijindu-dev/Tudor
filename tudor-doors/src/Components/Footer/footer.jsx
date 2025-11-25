import React from 'react';
import { useNavigate} from 'react-router-dom';
import "./footer.css";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok } from "react-icons/fa";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="footer">
      <div className="footer-container">
        <motion.div 
          className="footer-section"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
        >
          <h3>About</h3>
          <p>Tudor Doors is a trusted door manufacturing company known for quality, durability, and style. We craft secure and elegant doors for homes and businesses with a focus on precision and customer satisfaction.
</p>
          <div className="social-icons">
            <a href="https://www.facebook.com/profile.php?id=61583972730187"><FaFacebookF /></a>
            <a href="https://www.instagram.com/tudor_doors?igsh=N3V3YzlncXoyeWN0&utm_source=qr"><FaInstagram /></a>
            <a href="https://www.tiktok.com/@tudor_doors?_r=1&_t=ZN-91VGWPtq2go"><FaTiktok /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </motion.div>

        <motion.div 
          className="footer-section"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
        >
          <h3>Useful Links</h3>
          <ul>
            <li><a onClick={() => navigate('/About')}>About</a></li>
            <li><a onClick={() => navigate('/Services')}>Services</a></li>
            <li><a onClick={() => navigate('/Catalogue')}>Projects</a></li>
            <li><a onClick={() => navigate('/team')}>Meet the team</a></li>
            <li><a onClick={() => navigate('/Blog')}>Article</a></li>
            <li><a onClick={() => navigate('/Contact')}>Contact us</a></li>
          </ul>
        </motion.div>

        <motion.div 
          className="footer-section"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
        >
          <h3>Contact</h3>
          <p>No. 218 Ago palace way, okota</p>
          <p>Lagos, Nigeria</p>
          <p>Info@tudordoorslimited.com</p>
          <p>tudordoorslimited@gmail.com</p>
          <p>+2349039045565</p>
        </motion.div>

        <motion.div 
          className="footer-section"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
        >
          <h3>Newsletter</h3>
          <p>Be the first to get the latest from us</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Enter email" />
            <button type="submit">Submit</button>
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        className="footer-bottom"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
      >
        <p>All Right Reserved 2025. Designed by Asaph.</p>
      </motion.div>
    </footer>
  );
};

export default Footer;