import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Client.css';

// Import profile images
import profile1 from '../../assets/profile1.jpg';
import profile2 from '../../assets/profile2.jpg';
import profile3 from '../../assets/profile3.jpg';

const ClientVoices = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    pauseOnHover: false
  };

  const testimonials = [
    {
      quote: "Their commitment to quality and attention to detail is unmatched",
      author: "William Parker",
      position: "Project Manager",
      company: "Greentech Solutions",
      image: profile1
    },
    {
      quote: "We've worked with many contractors, but Tudor Doors stands out for their professionalism",
      author: "Sarah Johnson",
      position: "Operations Director",
      company: "Metro Development",
      image: profile2
    },
    {
      quote: "Excellent service and outstanding results every time",
      author: "Michael Chang",
      position: "Property Developer",
      company: "Urban Spaces Ltd",
      image: profile3
    }
  ];

  return (
    <section className="client-voices">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Client Voices of Satisfaction</h2>
          <p>Here's what our clients say about our services. We're always committed to professionalism and performance.</p>
        </motion.div>

        <motion.div 
          className="testimonials-slider"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-slide">
                <div className="testimonial-content">
                  <div className="profile-image">
                    <img src={testimonial.image} alt={testimonial.author} />
                  </div>
                  <blockquote>"{testimonial.quote}"</blockquote>
                  <div className="author-info">
                    <h4>{testimonial.author}</h4>
                    <p>{testimonial.position}</p>
                    <span>{testimonial.company}</span>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientVoices;