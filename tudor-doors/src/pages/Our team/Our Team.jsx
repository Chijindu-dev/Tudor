import React, { useState } from "react";
import { motion } from "framer-motion";
import profile1 from "../../assets/ceo.png";
import profile2 from "../../assets/madam.png";
import profile3 from "../../assets/favour.png"; 
import profile4 from "../../assets/super.png" ;
import profile5 from "../../assets/double.png"
import profile6 from "../../assets/bro izu.png";
import "./Our Team.css";


// hero image will be loaded from CSS (no JS import)

const teamData = [
  { name: "Mr. ThankGod Onugha ", role: "Chief Executive Officer", image:profile1 },
  { name: "Mrs. Chiamaka James", role: "Company Secretary", image:profile2 },
  { name: "Miss Uba Favour", role: "Chief Financial Officer", image:profile3},
  { name: "Mr. Uche Madu", role: "Chief Marketing Officer", image: profile4},
  { name: "Mr. Obinna Amajuoyi", role: "Chief Operations Officer", image: profile5 },
  { name: "Mr. Izuckukwu Prosper", role: "Chief Technology Officer", image:profile6 },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06 } }
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.42 } }
};

const Team = () => {
  const [filter] = useState("All"); // placeholder if you add category filters later

  const renderAvatar = (person) => {
    if (person.image) {
      // assume images placed in public/assets/team/ so path works at runtime
      return <img src={person.image} alt={person.name} className="team-avatar" />;
    }
    // fallback to initials
    const initials = person.name.split(" ").map(n => n[0]).slice(0,2).join("");
    return <div className="team-avatar avatar-fallback">{initials}</div>;
  };

  return (
    <>
      {/* HERO: place at top of page */}
     <section className="about-hero">
        <div className="hero-overlay">
          <div className="hero-contents">
            <h1>
              Our Team
            </h1>
          </div>
        </div>
      </section>

      {/* ...existing page markup (keep the rest of Team component unchanged) ... */}
      <section className="team-grid-section" aria-label="Team members">
        <div className="team-grid">
          {teamData.filter(t => filter === "All" || t.category === filter).map((p, i) => (
            <motion.article
              className="team-card"
              key={p.name}
              variants={item}
              whileHover={{ y: -6, boxShadow: "0 18px 40px rgba(13,20,25,0.08)" }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
            >
              <div className="card-media">
                {renderAvatar(p)}
              </div>

              <div className="card-meta">
                <h3 className="card-name">{p.name}</h3>
                <p className="card-role">{p.role}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </>
  );
};

export default Team;