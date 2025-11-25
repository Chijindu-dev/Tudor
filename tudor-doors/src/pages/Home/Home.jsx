import React, { useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Navigate, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCheckCircle, FaAward, FaUsersCog, FaLightbulb, FaShieldAlt, FaWhatsapp } from "react-icons/fa";
import slide1 from "../../../src/assets/front.png";
import slide2 from "../../../src/assets/front2.png";
import slide3 from "../../../src/assets/front3.png";
// profile images for client voices
import cc from "../../../src/assets/pivit.png";
import c1 from "../../../src/assets/woodd.jpg";
import c2 from "../../../src/assets/ccc.png";
import c3 from "../../../src/assets/glass.jpg";


import profile1 from "../../../src/assets/female.png";
import profile2 from "../../../src/assets/male.png";
import profile3 from "../../../src/assets/male.png";
import profile4 from "../../../src/assets/female2.png";

import "./Home.css";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      duration: 0.5
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

function Home() {
  const navigate = useNavigate();
  const clientSliderRef = useRef(null);

  useEffect(() => {
    // ensure react-slick starts when mounted (helpful if inside animated containers)
    if (clientSliderRef.current && typeof clientSliderRef.current.slickPlay === "function") {
      try { clientSliderRef.current.slickPlay(); } catch (e) { /* noop */ }
    }
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    pauseOnHover: false,
    fade: true,
  };

  const slides = [
    { img: slide1, title: "Building Your Vision with Precision", desc: "We are Tudor doors limited, your trusted partner in the world of door manufacturing. With a legacy of excellence and a commitment to quality, we turn your entryway visions into reality.", btn: "Learn more", to: "/about" },
    { img: slide2, title: "Engineered to Last, Designed To Impress", desc: "Our team of experts deliver top-notch residential, commercial and industrial doors with cutting-edge technology that focus on security and elegance.", btn: "Our Services" ,to: "/services" },
    { img: slide3, title: "Quality Doors For Every Space", desc: "Discover the perfect blend of style and durability with our expertly crafted doors tailored to meet the unique needs of any environment.", btn: "Contact Us", to: "/contact" },
  ];

  const features = [
    { icon: <FaAward />, title: "Proven Track Record", text: "Over a decade of experience delivering top-quality door solutions." },
    { icon: <FaShieldAlt />, title: "Quality Assurance", text: "Built with precision, durability and the highest quality materials." },
    { icon: <FaUsersCog />, title: "Client-Centric Approach", text: "We tailor each project to your exact needs and preferences." },
    { icon: <FaLightbulb />, title: "Innovation & Technology", text: "Combining modern manufacturing techniques with local expertise." },
  ];

  const categories = ["Luxury Doors", "Wooden Doors", "Glass Doors", "Pivot Doors"];
  const products = [
    { title: "Luxury Doors", description: "Robust and secure, designed for high-security environments.", imageUrl: c2 },
    { title: "Wooden Doors", description: "Premium wood for durability and aesthetic appeal.", imageUrl: c1 },
    { title: "Glass Doors", description: "Elegant and modern for office spaces.", imageUrl: c3 },
    { title: "Pivot Doors", description: "Certified for high safety standards.", imageUrl: cc },
  ];

  const whatsappNumber = "2348117011514";
  const whatsappText = encodeURIComponent("Hi, My name is----I saw your site and would like to ask about your services.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappText}`;

  // add custom arrows and updated clientSettings (replace the existing clientSettings block)
  const PrevArrow = ({ onClick }) => (
    <button className="slick-arrow custom-prev" onClick={onClick} aria-label="Previous">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  );
  const NextArrow = ({ onClick }) => (
    <button className="slick-arrow custom-next" onClick={onClick} aria-label="Next">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  );

  const clientSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "160px",     // adjust for big center card
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4500,
    pauseOnHover: false,
    accessibility: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 3, centerPadding: "100px" } },
      { breakpoint: 900, settings: { slidesToShow: 1, centerPadding: "40px", arrows: false } },
      { breakpoint: 480, settings: { slidesToShow: 1, centerPadding: "20px", arrows: false } }
    ]
  };

  const testimonials = [
    { quote: "Your doors elevated our entire project. Reliable, durable, and premium.", author: "Mary Onuoha", position: "Supervisor ", company: "Octo5 Holdings", image: profile4 },
    { quote: "These doors added luxury and elegance to our hotel rooms. Zero complaints, only praise", author: "Abimbola Opeyemi", position: "Contractor", company: "Adron Homes", image: profile1 },
    { quote: "Our clients were impressed. Installation was smooth and quality is top-notch.", author: "Silas Sehoole", position: "Structural Engineer", company: "Mixta Africa", image: profile2 },
    { quote: "Strong, stylish, and secure. The perfect touch needed for our facility upgrade.", author: "Yemi Shola", position: "Architect", company: "VAVA Furniture", image: profile3 },
    { quote: "Thank you TDL! I feel absolutely safe and secure in my new home, the beauty of the doors is also a plus", author: "Christianna Mbachu", position: "New Home Owner", image: profile3 }

  ];

  return (<>
    <section className="hero-section">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="hero-slide">
            <div className="hero-bg" style={{ backgroundImage: `url(${slide.img})` }}>
              <div className="hero-overlay">
                <div className="hero-content">
                  <h1>{slide.title}</h1>
                  <p>{slide.desc}</p>
                  <a href={slide.to} className="hero-btn">{slide.btn}</a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>

    {/* LEGACY */}
    <section className="legacy-section" id="legacy">
      <motion.div className="legacy-container" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
        <motion.h2 variants={itemVariants}>Our Legacy of Excellence</motion.h2>
        <motion.p className="legacy-desc" variants={itemVariants}>Established in 2024 after garnering over 15+ years experience in door importation from our parent company, Tudor doors Limited is an emerging force in the building industry. Our commitment to quality and innovation sets us apart in the world of door manufacturing on the African continent.</motion.p>

        <motion.div className="legacy-stats" variants={containerVariants}>
          {[ { number: "10600+", text: "Doors Produced" }, { number: "95%", text: "Satisfaction Rate" }, { number: "410+", text: "Satisfied Clients" }, { number: "50+", text: "Qualified Engineers" } ].map((stat, i) => (
            <motion.div key={i} className="legacy-item" variants={itemVariants}><h3>{stat.number}</h3><p>{stat.text}</p></motion.div>
          ))}
        </motion.div>

        <motion.div className="legacy-tags" variants={containerVariants}>
          {["Blending local expertise with modern manufacturing techniques","Best door manufacturing service provider","Customer satisfaction is our watchword ","Experienced contractors available to service customers"].map((tag,i)=>(
            <motion.div key={i} className="tag" variants={itemVariants}><FaCheckCircle className="icon" /><span>{tag}</span></motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>

    {/* WHY */}
    <section className="why-section" id="why">
      <div className="why-container">
        <h2>Why Choose Tudor Doors Limited</h2>
        <p className="why-desc">At Tudor Doors Limited, our commitment to craftsmanship, innovation, and service excellence sets us apart.</p>
        <div className="why-grid">{features.map((f,i)=>(
          <div key={i} className="why-card"><div className="icon-wrapper">{f.icon}</div><h3>{f.title}</h3><p>{f.text}</p></div>
        ))}</div>
      </div>
    </section>

    {/* ELEVATE */}
    <section className="elevate-section">
      <motion.div className="elevate-title" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <h2>Elevate Your Projects with Our Products</h2>
        <p>Enhance your construction endeavors with our extensive range of high-quality door solutions.</p>
      </motion.div>

      <div className="categories">{categories.map((c,i)=><motion.div key={i} className="category-tag" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 * i }}>{c}</motion.div>)}</div>

      <div className="elevate-products">{products.map((product,i)=>(
        <motion.div className="product-card" key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 * i }}>
          <img src={product.imageUrl} alt={product.title} className="product-image" />
          <div className="product-info"><h3>{product.title}</h3><p>{product.description}</p><button type="button" onClick={() => navigate('/catalogue')}>View All Projects</button></div>
        </motion.div>
      ))}</div>
    </section>

    {/* --- CLIENT VOICES (updated design) --- */}
    <section className="client-voices">
      <div className="client-container">
        <motion.div className="client-header" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="eyebrow">TESTIMONIALS</p>
          <h2>What Our Client's Say!</h2>
        </motion.div>

        <motion.div className="client-slider" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <Slider ref={clientSliderRef} {...clientSettings}>
            {testimonials.map((t, idx) => (
              <div key={idx} className="testimonial-slide">
                <article className="cv-card" role="group" aria-roledescription="slide" aria-label={`testimonial ${idx + 1}`}>
                  <div className="cv-quote">
                    <span className="quote-mark" aria-hidden>
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                        <path d="M7.17 6A4.993 4.993 0 0 0 2 11v6h7v-6H5.5a2.5 2.5 0 0 1 2.5-2.5V6H7.17zM17.17 6A4.993 4.993 0 0 0 12 11v6h7v-6h-3.5a2.5 2.5 0 0 1 2.5-2.5V6h-1.83z" fill="currentColor"/>
                      </svg>
                    </span>
                    <blockquote>“{t.quote}”</blockquote>
                  </div>

                  <div className="cv-footer">
                    <div className="cv-author">
                      <img src={t.image} alt={t.author} />
                      <div className="author-meta">
                        <strong>{t.author}</strong>
                        <span className="meta-sub">{t.position} - {t.company}</span>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </Slider>
        </motion.div>
      </div>
    </section>

    {/* WhatsApp floating button */}
    <motion.a href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" className="whatsapp-fab" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 260, damping: 20 }}><FaWhatsapp /></motion.a>
  </>);
}

export default Home;
