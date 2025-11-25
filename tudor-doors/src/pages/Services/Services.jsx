import React from "react";
import { motion } from "framer-motion";
import "./Services.css";

const services = [
  {
    id: 1,
    title: "Door Manufacturing & Supply",
    desc: "We design and produce a wide range of premium doors which includes but is not limited to wooden, steel, PVC, and glass options. They are all available in various styles and sizes to suit your taste and project needs.",
    dark: true,
  },
  {
    id: 2,
    title: "Maintenance & Repair Services",
    desc: "Keep your doors in top shape with our maintenance service. We handle door alignment, lock replacement, repainting, and refinishing to restore your doors to brand new condition.",
  },
  {
    id: 3,
    title: "Security & Fire-Rated Doors",
    desc: "We offer doors built for safety; including high-security steel and fire-resistant doors which are ideal for offices, hotels, and industrial buildings that require extra protection and durability.",
  },
  {
    id: 4,
    title: "Custom Design & Finishing",
    desc: "Bring your vision to life with our custom design service. Choose your preferred color, size, pattern, and handle options including smartlock and intelligent lock. Every detail is tailored to match your interior and/or architectural design.",
  },
  {
    id: 5,
    title: "Professional Door Installation",
    desc: "Our expert technicians handle complete door installation with precision. From accurate measurements to seamless fitting, we guarantee a perfect finish for both residential and commercial spaces.",
  },
  {
    id: 6,
    title: "Delivery & On-Site Consultation",
    desc: "We make your experience stress-free with nationwide delivery and professional site consultation. Our team provides expert guidance on the best door options for your building type and budget.",
  },
];

export default function ServicesSection() {


  return (
<>
    <section className="about-heros">
        <div className="hero-overlay">
          <div className="hero-contents ">
            <h1>
              Our Services
            </h1>
          </div>
        </div>
      </section>

    <section className="services-section">
      {/* Header */}
      <div className="services-header">
        <h2>Our Services</h2>
        <p>
          At Tudor Doors, we specialize in providing high-quality door solutions that combine durability, beauty, and security. Whether for homes, offices, or large construction projects, our team ensures every door is crafted and installed to perfection.
        </p>
      </div>

      {/* Cards */}
      <div className="services-grid">
        {services.map((srv) => (
          <motion.div
            key={srv.id}
            className={`service-card ${srv.dark ? "dark" : ""}`}
            whileHover={{
              y: -6,
              skewY: -3,
              transition: { duration: 0.3, ease: "easeOut" },
            }}
            whileTap={{
              skewY: 0,
              scale: 0.98,
            }}
          >
            <div className="card-content">
              <h3>{srv.title}</h3>
              <p>{srv.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  </>
  );
}
