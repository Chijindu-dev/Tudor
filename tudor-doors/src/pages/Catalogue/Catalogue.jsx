import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Catalogue.css";
import cast1 from "../../assets/c1.png";
import cast2 from "../../assets/c2.png";
import cast3 from "../../assets/c3.png";
import cast4 from "../../assets/c4.png";
import cast5 from "../../assets/c5.png";
import cast6 from "../../assets/c6.png" ;
import cast7 from "../../assets/c7.png";
import cast8 from "../../assets/c8.png";
import w1 from "../../assets/w1.png";
import w2 from "../../assets/w2.png";
import w3 from "../../assets/w3.png";
import w4 from "../../assets/w4.jpg";
import w5 from "../../assets/w5.png";
import w6 from "../../assets/w6.png"; 
import w7 from "../../assets/w7.png";
import w8 from "../../assets/w8.jpg"; 
import g1 from "../../assets/g1.png";
import g2 from "../../assets/g2.png";
import g3 from "../../assets/g3.png";
import g4 from "../../assets/g4.png";
import g5 from "../../assets/g5.png";
import g6 from "../../assets/g6.jpg";
import g7 from "../../assets/g7.png";
import g8 from "../../assets/g8.png";
import p1 from "../../assets/p1.png";
import p2 from "../../assets/p2.png";
import p3 from "../../assets/p3.png";
import p4 from "../../assets/p4.jpg";
import p5 from "../../assets/p5.jpeg";
import p6 from "../../assets/p6.jpeg";
import p7 from "../../assets/p7.jpeg";
import p8 from "../../assets/p8.jpeg"; 
import t1 from "../../assets/t1.png";
import t2 from "../../assets/t2.png";
import t3 from "../../assets/t3.png";
import t4 from "../../assets/t4.png";
import t5 from "../../assets/t5.png";
import t6 from "../../assets/t6.png";
import t7 from "../../assets/t7.png";
import t8 from "../../assets/t8.png";
import lock from "../../assets/generic.png";
import lock1 from "../../assets/lock.jpg";
import lock2 from "../../assets/lock2.png"
import lock3 from "../../assets/lock3.png"


const doors = [
  // 🟤 WOODEN DOORS (8)
  {
    id: 1,
    name: "Classic Oak Door",
    type: "Wooden Doors",
    image: w1,
    description:
      "Crafted from premium oak, this door exudes timeless warmth and elegance, ideal for both modern and vintage homes.",
  },
  {
    id: 2,
    name: "Rustic Barn Door",
    type: "Wooden Doors",
    image: w2,
    description:
      "Handcrafted barn-style door that brings rustic countryside charm to any living space.",
  },
  {
    id: 3,
    name: "Mahogany Panel Door",
    type: "Wooden Doors",
    image: w3,
    description:
      "Built from rich mahogany wood with deep tone and natural polish, giving your entryway a royal touch.",
  },
  {
    id: 4,
    name: "Vintage Carved Door",
    type: "Wooden Doors",
    image: w4,
    description:
      "Intricately carved wooden panels that showcase traditional craftsmanship and luxury design.",
  },
  {
    id: 5,
    name: "Pine Cottage Door",
    type: "Wooden Doors",
    image:w5,
    description:
      "Light pine finish with smooth texture, perfect for cozy interiors and cottage-style homes.",
  },
  {
    id: 6,
    name: "Teak Royal Door",
    type: "Wooden Doors",
    image: w6,
    description:
      "Highly durable teak door that resists moisture while maintaining a regal appearance.",
  },
  {
    id: 7,
    name: "Modern Veneer Door",
    type: "Wooden Doors",
    image: w7,
    description:
      "A sleek veneer finish for modern homes, offering a blend of simplicity and sophistication.",
  },
  {
    id: 8,
    name: "Walnut Arch Door",
    type: "Wooden Doors",
    image: w8,
    description:
      "Curved walnut design with natural grain patterns that enhance the luxury appeal of your space.",
  },

  // 🔵 GLASS DOORS (8)
  {
    id: 9,
    name: "Frosted Privacy Door",
    type: "Glass Doors",
    image: g1,
    description:
      "Soft frosted finish for privacy while maintaining natural light flow — perfect for offices or bathrooms.",
  },
  {
    id: 10,
    name: "Frameless Clear Door",
    type: "Glass Doors",
    image: g2,
    description:
      "Minimalist frameless glass door for a floating, seamless visual effect in modern interiors.",
  },
  {
    id: 11,
    name: "Tinted Mirror Door",
    type: "Glass Doors",
    image: g3,
    description:
      "Dual-purpose door with a subtle mirrored tint that adds depth and elegance to rooms.",
  },
  {
    id: 12,
    name: "Etched Pattern Door",
    type: "Glass Doors",
    image: g4,
    description:
      "Beautifully etched glass patterns offering artistry and privacy in one sleek design.",
  },
  {
    id: 13,
    name: "Sliding Patio Glass Door",
    type: "Glass Doors",
    image: g5,
    description:
      "Large sliding panels designed to maximize outdoor views and indoor lighting.",
  },
  {
    id: 14,
    name: "Curved Crystal Door",
    type: "Glass Doors",
    image:g6,
    description:
      "Curved tempered glass door with high transparency for luxurious modern architecture.",
  },
  {
    id: 15,
    name: "Black Frame Glass Door",
    type: "Glass Doors",
    image: g7,
    description:
      "Industrial-style glass door with matte black framing for urban interior aesthetics.",
  },
  {
    id: 16,
    name: "Stained Art Glass Door",
    type: "Glass Doors",
    image:g8,
    description:
      "Vibrant stained-glass artwork door, transforming light into beautiful color patterns.",
  },

  // 💎 LUXURY DOORS (8)
  {
    id: 17,
    name: "Diamond Elite Door",
    type: "Luxury Doors",
    image: t1,
    description:
      "A high-end luxury door with diamond-pattern steel finishing — a true symbol of class and strength.",
  },
  {
    id: 18,
    name: "Royal Majesty Door",
    type: "Luxury Doors",
    image: t2,
    description:
      "Ornate detailing and glossy finish that make your entrance look fit for royalty.",
  },
  {
    id: 19,
    name: "Opulent Marble Door",
    type: "Luxury Doors",
    image: t3,
    description:
      "Elegant marble veneer with a sleek metallic edge, adding sophistication to premium homes.",
  },
  {
    id: 20,
    name: "Grandeur Steel Door",
    type: "Luxury Doors",
    image: t4,
    description:
      "Designed for maximum security and luxury — strong steel core with decorative gold overlay.",
  },
  {
    id: 21,
    name: "Palace Entry Door",
    type: "Luxury Doors",
    image: t5,
    description:
      "Double-door masterpiece with handcrafted gold accents that bring royal vibes to any property.",
  },
  {
    id: 22,
    name: "Prestige Walnut Door",
    type: "Luxury Doors",
    image: t6,
    description:
      "Rich walnut finish complemented by brushed gold handles for an elite aesthetic.",
  },
  {
    id: 23,
    name: "Imperial Design Door",
    type: "Luxury Doors",
    image: t7,
    description:
      "Luxury meets innovation  layered metallic textures with refined detail.",
  },
  {
    id: 24,
    name:"Curved designed door",
    type: "Luxury Doors",
    image: t8,
    description:
      "A glossy golden-trimmed design that captures attention and defines prestige.",
  },

  // ⚙️ CAST DOORS (8)
  {
    id: 25,
    name: "Iron Cast Classic Door",
    type: "Cast Doors",
    image: cast1,
    description:
      "Strong cast-iron structure featuring ornamental scrollwork and a timeless look.",
  },
  {
    id: 26,
    name: "Bronze Pattern Door",
    type: "Cast Doors",
    image: cast2,
    description:
      "Bronze-finished cast door that radiates warmth and prestige at first glance.",
  },
  {
    id: 27,
    name: "Artisan Grill Door",
    type: "Cast Doors",
    image: cast3,
    description:
      "Handcrafted with precision grills, adding artistry and ventilation to your doorway.",
  },
  {
    id: 28,
    name: "Victorian Iron Door",
    type: "Cast Doors",
    image: cast4,
    description:
      "Victorian-style cast door with elegant metal detailing for classic architecture.",
  },
  {
    id: 29,
    name: "Heavy Fortress Door",
    type: "Cast Doors",
    image: cast5,
    description:
      "Massive, reinforced cast iron door — unmatched durability and security.",
  },
  {
    id: 30,
    name: "Antique Royal Door",
    type: "Cast Doors",
    image: cast6,
    description:
      "Cast with antique bronze detailing that brings history and grandeur to your entryway.",
  },
  {
    id: 31,
    name: "Royal Cast Entry Door",
    type: "Cast Doors",
    image: cast7,
    description:
      "An exquisite royal pattern with double-layered cast structure for strength and elegance.",
  },
  {
    id: 32,
    name: "Modern Mesh Door",
    type: "Cast Doors",
    image: cast8 ,
    description:
      "Minimalist mesh-style cast door — a fusion of airflow, protection, and aesthetics.",
  },

  // ⚫ PIVOT DOORS (8)
  {
    id: 33,
    name: "Modern Pivot Door",
    type: "Pivot Doors",
    image: p1,
    description:
      "Smooth pivot mechanism offering a futuristic design and grand entry experience.",
  },
  {
    id: 34,
    name: "Glass Pivot Door",
    type: "Pivot Doors",
    image: p2,
    description:
      "Frameless pivot glass door that swings effortlessly, ideal for open, airy layouts.",
  },
  {
    id: 35,
    name: "Wood & Steel Pivot Door",
    type: "Pivot Doors",
    image: p3,
    description:
      "Blends natural wood and industrial steel in a bold architectural statement.",
  },
  {
    id: 36,
    name: "Curved Edge Pivot Door",
    type: "Pivot Doors",
    image: p4,
    description:
      "Rounded-edge pivot door that adds softness and movement to sharp modern designs.",
  },
  {
    id: 37,
    name: "Minimal Black Pivot Door",
    type: "Pivot Doors",
    image: p5,
    description:
      "Matte black finish pivot door for luxury minimalist interiors.",
  },
  {
    id: 38,
    name: "Grand Entry Pivot Door",
    type: "Pivot Doors",
    image: p6,
    description:
      "Tall architectural pivot door — sleek, silent, and made for grand entrances.",
  },
  {
    id: 39,
    name: "Aluminium Edge Pivot Door",
    type: "Pivot Doors",
    image: p7,
    description:
      "Precision-engineered with aluminum trims for strength and subtle elegance.",
  },
  {
    id: 40,
    name: "Walnut Finish Pivot Door",
    type: "Pivot Doors",
    image: p8,
    description:
      "A rich walnut finish pivot door combining luxury, balance, and smooth motion.",
  },

   // ⚫ LOCKS
   {
    id: 41,
    name: "Generic",
    type: "Locks",
    image: lock,
    description:
      "This product is a sophisticated electronic door lock designed to replace traditional mechanical locks, offering multiple methods of secure entry and remote management.",
   },
    {
    id: 42,
    name: "Full-Screen Video Smart Lock",
    type: "Locks",
    image: lock1,
    description:
      "This smart lock is designed for high-security, modern entryways, featuring enhanced visual and remote connectivity.",
   },
    {
    id: 43,
    name: "Smart Video Doorbell and Intercom System",
    type: "Locks",
    image: lock2,
    description:
      "This device appears to be an advanced outdoor unit for a home or building entry system, primarily focused on visitor management, security, and communication.",
   },
    {
    id: 44,
    name: "GOBIN Smart Door Lock System",
    type: "Locks",
    image: lock3,
    description:
      "This GOBIN smart lock is a modern security solution offering multiple keyless entry methods. Features include a biometric fingerprint scanner, a PIN code keypad with anti-peep functionality, and a video camera/peephole integrated into the exterior unit.",
   },
   

   
];


const DoorCatalogue = () => {
  const [filter, setFilter] = useState("All");

  const filteredDoors =
    filter === "All" ? doors : doors.filter((door) => door.type === filter);

  return (
    <>
     <motion.div 
            className="contact-herr"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="contact-hero-overlay">
              <div className="contact-hero-content">
                <h1>Catalogue</h1>
              </div>
            </div>
          </motion.div>
    
    <div className="catalogue-container">
      <div className="catalogue-header">
        <h1>Door Catalogue</h1>
        <p>Explore our premium range of modern, secure, and stylish doors.</p>
      </div>

      <div className="filter-buttons">
        {["All", "Luxury Doors", "Wooden Doors", "Glass Doors", "Pivot Doors","Cast Doors","Locks"].map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${filter === cat ? "active" : ""}`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="catalogue-grid">
        <AnimatePresence>
          {filteredDoors.map((door) => (
            <motion.div
              key={door.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="door-card"
            >
              <img src={door.image} alt={door.name} className="door-image" />
              <div className="door-info">
                <h3>{door.name}</h3>
                <p className="door-type">{door.type}</p>
                <p className="door-description">{door.description}</p>
                
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
    </>
  );
};

export default DoorCatalogue;
