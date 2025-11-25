import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaLocationDot } from "react-icons/fa6";
import {FaEnvelope,FaPhoneAlt,FaCheckCircle,} from "react-icons/fa";
import emailjs from "emailjs-com"
import "./Contact us.css";

const container = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "", agree: false });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((s) => ({ ...s, [name]: type === "checkbox" ? checked : value }));
  };



  const handleSubmit = (e) => {
  e.preventDefault();

  if (!form.name || !form.email || !form.message) {
    setStatus({ ok: false, msg: "Please fill all required fields." });
    return;
  }

  setStatus({ ok: null, msg: "Sending..." });

  // EmailJS logic
  emailjs
    .send(
      "service_0jvyj8x",   // replace with your actual service ID
      "template_2ofdp8j",  // replace with your template ID
      {
        name: form.name,
        email: form.email,
        message: form.message,
      },
      "FmHa1OwAduwEgmtPx"    // your public key
    )
    .then(
      (result) => {
        console.log(result.text);
        setStatus({ ok: true, msg: "Message sent successfully!" });
        setForm({ name: "", email: "", message: "", agree: false });
      },
      (error) => {
        console.error(error.text);
        setStatus({ ok: false, msg: "Failed to send message. Try again." });
      }
    );
};

  return (
    <>
      {/* Hero Section */}
      <motion.div 
        className="contact-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="contact-hero-overlay">
          <div className="contact-hero-content">
            <h1>Contact Us</h1>
          </div>
        </div>
      </motion.div>

      {/* Existing contact content */}
      <motion.main className="contact-page" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={container}>  
      
        <motion.section className="contact-wrapper" variants={item}>
          <motion.h2 className="contact-kicker" variants={item}>CONTACT US</motion.h2>
          <motion.h1 className="contact-title" variants={item}>Get in touch with us</motion.h1>
          <motion.p className="contact-lead" variants={item}>
            Fill out the form below or schedule a meeting with us at your convenience.
          </motion.p>

          <div className="contact-card">
            <motion.form className="contact-form" onSubmit={handleSubmit} variants={item}>
              <label>
                <span className="label">Name</span>
                <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" aria-label="Your name" />
              </label>

              <label>
                <span className="label">Email</span>
                <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Enter Your Email" aria-label="Email" />
              </label>

              <label>
                <span className="label">Message</span>
                <textarea name="message" value={form.message} onChange={handleChange} placeholder="Enter Your Message" rows="6" aria-label="Message" />
              </label>

              <label className="checkbox-row">
                <input name="agree" type="checkbox" checked={form.agree} onChange={handleChange} />
                <span>I agree with <a href="#">Terms and Conditions</a></span>
              </label>

              {/* reuse site-wide button styling via .btn + local modifier */}
              <button type="submit" className="submit-btn btn" aria-label="Send Your Request">
                Send Your Request
              </button>

              {status && (
                <motion.div className={`form-status ${status.ok === true ? "ok" : status.ok === false ? "err" : "busy"}`} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
                  {status.msg}
                </motion.div>
              )}
            </motion.form>

            <motion.aside className="contact-info" variants={item}>
              <h3>With our products you can</h3>
              <ul className="benefits">
                <li><FaCheckCircle className="small-icon" />provide strong, reliable protection for homes and businesses</li>
                <li><FaCheckCircle className="small-icon" /> Add style and elegance to any space</li>
                <li><FaCheckCircle className="small-icon" /> built to withstand wear, weather, and time</li>
                <li><FaCheckCircle className="small-icon" /> high-quality doors make buildings more attractive and valuable</li>
              </ul>

             
                <div className="quick-contact">
                  <div><FaEnvelope className="icon-inline" /> Info@tudordoorslimited.com</div>
                  <div><FaPhoneAlt className="icon-inline" /> +2349039045565</div>
                </div>
            </motion.aside>
          </div>
        </motion.section>
      </motion.main>
    </>
  );
};

export default Contact;