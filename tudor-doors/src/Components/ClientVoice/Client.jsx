import React, { useState, useEffect, useRef } from "react";


import profile1 from "../../assets/female.png";
import profile2 from "../../assets/male.png";
import profile3 from "../../assets/male.png";
import profile4 from "../../assets/female2.png";
import "./Client.css";

  const testimonials = [
    { quote: "Your doors elevated our entire project. Reliable, durable, and premium.", author: "Mary Onuoha", position: "Supervisor ", company: "Octo5 Holdings", image: profile4 },
    { quote: "These doors added luxury and elegance to our hotel rooms. Zero complaints, only praise", author: "Abimbola Opeyemi", position: "Contractor", company: "Adron Homes", image: profile1 },
    { quote: "Our clients were impressed. Installation was smooth and quality is top-notch.", author: "Silas Sehoole", position: "Structural Engineer", company: "Mixta Africa", image: profile2 },
    { quote: "Strong, stylish, and secure. The perfect touch needed for our facility upgrade.", author: "Yemi Shola", position: "Architect", company: "VAVA Furniture", image: profile3 },
    { quote: "Thank you TDL! I feel absolutely safe and secure in my new home, the beauty of the doors is also a plus", author: "Christanna", position: "New Home Owner", company:"", image: profile3 },


  ];

const ClientVoices = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sliderRef = useRef(null);

 const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentIndex((prevIndex) => {
      // Calculate next index
      let nextIndex = prevIndex + direction;

      // Change direction if we hit either end
      if (nextIndex >= testimonials.length) {
        nextIndex = testimonials.length - 2; // step back
        setDirection(-1);
      } else if (nextIndex < 0) {
        nextIndex = 1; // step forward
        setDirection(1);
      }

      return nextIndex;
    });
  }, 4000);

  return () => clearInterval(interval);
}, [direction]);
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  //   }, 4000);
  //   return () => clearInterval(interval);
  // }, []);


  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transition = "transform 0.6s ease-in-out"; 
      sliderRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  }, [currentIndex]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="client-voices">
      <div className="client-container">
        <div className="client-header">
          <p className="eyebrow">TESTIMONIALS</p>
          <h2>What Our Clients Say!</h2>
        </div>
        <div className="slider-wrapper">
          <div className="slider-inner" ref={sliderRef}>
            {testimonials.map((testimonial, idx) => (
              <div className="testimonial-card" key={idx}>
                <div className="quote">
                  <blockquote>"{testimonial.quote}"</blockquote>
                </div>
                <div className="author">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="author-img"
                  />
                  <div className="author-meta">
                    <strong>{testimonial.author}</strong>
                    <span>{testimonial.position} - {testimonial.company}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

 
        <div className="dots-container">
          {testimonials.map((_, idx) => (
            <span
              key={idx}
              className={`dot ${idx === currentIndex ? "active" : ""}`}
              onClick={() => goToSlide(idx)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientVoices;
