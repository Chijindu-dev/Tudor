import React from "react";
import { motion } from "framer-motion";
import mission from "../../assets/misson.png";
import vision from "../../assets/vision.png";
import front from "../../assets/front1.jpeg";

import "./About.css";

export default function AboutUs() {
  return (
    <>
        <section className="abt-header-banner">
        <div className="abt-header-overlay">
          <h1>About Us</h1>
        </div>
      </section>


    <div className="abt-page">

      {/* ==== HERO SECTION ==== */}
      <section className="abt-hero">
        <div className="abt-hero-content">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="abt-hero-text"
          >
        <p>Tudor Doors Limited is a leading Nigerian manufacturer and supplier of premium, security and luxury doors for the residential, commercial and industrial sectors. The company is focused on addressing the growing demand for high-quality, durable, and aesthetically superior entryway solutions that withstand the harsh tropical climate of Africa and meet strict international security standards. 
            Our core commitment is to merge local expertise with global manufacturing precision hence we are guided by a passion for craftsmanship and a focus on innovation, service, and sustainability. We blend modern manufacturing practices with a strong commitment to durability, style, and customer satisfaction. 
            With a customer portfolio spanning the African continent, we are building a reputation as a trusted partner for clients who value quality, reliability, and design excellence. Every door we produce reflects our dedication to transforming spaces and delivering lasting value.
        </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="abt-hero-image"
          >
            <div className="abt-img-wrapper">
              <img src={front} alt="Phone app" className="abt-img-front" />
            </div>
            
          </motion.div>
        </div>
        
      </section>

      {/* ==== VISION & MISSION SECTION ==== */}
      <section className="abt-info-section">
        <motion.div
          className="abt-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img src={vision} alt=" Illustration" />
          <div>
            <h3>Our Vision</h3>
            <p>
                To be Africa’s most trusted name in premium doors, setting the benchmark for craftsmanship, security, and style in homes and businesses across the continent.            </p>
          </div>
        </motion.div>

        <motion.div
          className="abt-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <img src={mission} alt="Mission Icon" />
          <div>
            <h3>Our Mission</h3>
            <p>
             Our mission is to serve the continent with doors that combine elegance with security and style. By combining modern manufacturing techniques with local expertise, we deliver reliable solutions for homes, businesses, and industries. Through innovation and commitment to value, we ensure that every Tudor Door meets diverse needs while championing African excellence in the building industry.”
            </p>
          </div>
        </motion.div>
      </section>

      {/* ==== VALUES SECTION ==== */}
      <motion.section
        className="abt-values"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h3>Our Values</h3>
        <p>
         We believe in doing things the right way. We take pride in producing strong, reliable and durable doors that meet the highest standards of quality. Honesty guides how we work and how we treat our customers. Innovation drives us to find better and smarter ways to build and serve. Our customers always come first. We listen, care, and deliver what they truly need. We are also committed to protecting our planet by using materials and methods that are eco-friendly. Above all, we believe in teamwork, because we know that together, we grow and succeed.
        </p>
      </motion.section>
    </div>
    </>
  );
}
