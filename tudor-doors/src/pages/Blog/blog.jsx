import React, { useState } from 'react';
import './blog.css';
import { MdCancel } from "react-icons/md";
import { TbClock, TbXboxXFilled } from "react-icons/tb";
import { CiCalendar } from "react-icons/ci";
import door1 from "../../assets/door1.jpg";
import door2 from '../../assets/door3.jpg';
import door3 from '../../assets/c3.png';
import door4 from '../../assets/door4.jpg';
import door5 from '../../assets/Double front doors.jpg';
import door6 from '../../assets/pppp.jpg';

const articles = [
  {
    id: 1,
    category: "Security Doors",
    title: "Bulletproof Doors in Lagos: Why You Need One in 2025",
    readTime: "1 minutes reading",
    date: "March 20, 2025",
    author: "Tudor Doors Security Team",
    excerpt: "In today’s Lagos, security is non-negotiable. Discover why bulletproof doors are now a must-have for homes and businesses.",
    image: door1,
    fullContent: `
      <h2>Bulletproof Doors: The Ultimate Protection for Lagos Homes</h2>
      <p class="intro-text">In a city where safety concerns are rising, a standard door is no longer enough. Tudor Doors brings you <strong>military-grade bulletproof doors</strong> designed to stop armed attacks, forced entry, and ballistic threats.</p>

      <h3>Why You Need a Bulletproof Door in Lagos</h3>
      <ul>
        <li>Proven to stop high-caliber bullets (AK-47, pistols, etc.)</li>
        <li>Reinforced armored steel core with multi-lock systems</li>
        <li>Fire-resistant and soundproof</li>
        <li>Prevents burglary and home invasion</li>
        <li>Increases property value and insurance approval</li>
      </ul>

      <h3>Why Tudor Doors Leads in Bulletproof Technology</h3>
      <p>Trusted by banks, embassies, and top estates in Lekki, Ikoyi, and Banana Island.</p>
      <ul>
        <li>EN 1522/1523 & NIJ Level IIIA certified</li>
        <li>Luxury wood or metallic finishes , looks elegant, works like armor</li>
        <li>Professional installation by certified engineers</li>
        <li>10-year warranty</li>
      </ul>

      <blockquote>“Since installing Tudor bulletproof doors, we sleep better at night. True peace of mind.”<br> Mr. Chukwuemeka, Victoria Island</blockquote>

      <p><strong>Don’t wait for an incident.</strong> Protect your family today.</p>
      <p class="closing-line">Tudor Doors ,When Lives Are on the Line, Trust Only the Best.</p>
    `,
  },

  {
    id: 2,
    category: "Luxury Doors",
    title: "Luxury Wooden Doors: Timeless Elegance by Tudor Doors",
    readTime: "1 minutes reading",
    date: "March 15, 2025",
    author: "Tudor Design Studio",
    excerpt: "Elevate your home with handcrafted luxury wooden doors that combine warmth, beauty, and lasting craftsmanship.",
    image: door2,
    fullContent: `
      <h2>Luxury Wooden Doors, Crafted Elegance for Nigerian Homes</h2>
      <p>Nothing says “welcome home” like a beautifully carved solid hardwood door. At Tudor Doors, we transform premium teak, mahogany, and iroko into masterpieces that last generations.</p>

      <h3>Why Choose Luxury Wooden Doors?</h3>
      <ul>
        <li>Rich natural grain and warm aesthetic</li>
        <li>Hand-carved designs or sleek modern finishes</li>
        <li>Weather-sealed for Lagos humidity and rain</li>
        <li>Perfect for classic duplexes and modern mansions</li>
        <li>Increases curb appeal and resale value</li>
      </ul>

      <h3>Tudor Doors: Lagos’ Finest Wooden Door Craftsmen</h3>
      <p>Every door is:</p>
      <ul>
        <li>Made from sustainably sourced premium hardwood</li>
        <li>Finished with marine-grade varnish</li>
        <li>Custom-designed to match your architecture</li>
        <li>Installed with precision alignment</li>
      </ul>

      <p>From Victoria Garden City to Osapa London — our wooden doors define luxury living.</p>
      <p class="closing-line">Tudor Doors , Where Tradition Meets Timeless Beauty.</p>
    `,
  },

  {
    id: 3,
    category: "Cast Doors",
    title: "Cast Aluminum Doors: Strength & Beauty Combined",
    readTime: "1 minutes reading",
    date: "March 10, 2025",
    author: "Tudor Doors Team",
    excerpt: "Discover why cast aluminum doors are the top choice for grand entrances in Lagos’ finest estates.",
    image: door3,
    fullContent: `
      <h2>Cast Doors: The Perfect Blend of Artistry and Durability</h2>
      <p>Known for their bold designs and unbreakable strength, cast aluminum doors are the signature of luxury estates across Lagos.</p>

      <h3>Benefits of Cast Aluminum Doors</h3>
      <ul>
        <li>100% rust-proof — perfect for coastal areas</li>
        <li>Intricate hand-cast patterns and motifs</li>
        <li>Extremely heavy-duty and secure</li>
        <li>Zero maintenance for decades</li>
        <li>Ideal for main gates and grand entrances</li>
      </ul>

      <h3>Why Tudor Doors Excels in Cast Doors</h3>
      <p>We don’t just make doors , we create landmarks.</p>
      <ul>
        <li>Exclusive in-house designs</li>
        <li>Premium powder-coated or bronze finishes</li>
        <li>Double-layer security with armored core options</li>
        <li>Delivered and installed across Nigeria</li>
      </ul>

      <p class="closing-line">Tudor Doors , Cast to Impress. Built to Protect.</p>
    `,
  },

  {
    id: 4,
    category: "Modern Doors",
    title: "Modern Steel & Glass Doors: Sleek Security for Contemporary Homes",
    readTime:"1 minutes reading",
    date: "March 5, 2025",
    author: "Tudor Modern Collection",
    excerpt: "Minimalist design meets maximum security , the future of entrance doors in Lagos.",
    image: door4,
    fullContent: `
      <h2>Modern Doors: Clean Lines. Bold Protection.</h2>
      <p>For architects and homeowners who love contemporary design, our steel and glass doors deliver stunning aesthetics without sacrificing safety.</p>

      <ul>
        <li>Slim frames with expansive glass panels</li>
        <li>Tempered + laminated security glass</li>
        <li>Smart lock compatible</li>
        <li>Fingerprint & biometric options available</li>
        <li>Soundproof and energy efficient</li>
      </ul>

      <p>Seen in the most exclusive new builds in Eko Atlantic, Ikoyi, and Lekki Phase 1.</p>
      <p class="closing-line">Tudor Doors , Modern Living. Maximum Security.</p>
    `,
  },

  {
    id: 5,
    category: "Customer Stories",
    title: "How Tudor Doors Transformed My Home in Lekki",
    readTime: "1 minutes reading",
    date: "February 28, 2025",
    author: "Mrs. Funmi Adeyemi",
    excerpt: "From consultation to installation , my real experience choosing Tudor Doors for my new duplex.",
    image: door5,
    fullContent: `
      <h2>A Homeowner’s Journey with Tudor Doors</h2>
      <p>“When we built our dream home in Lekki, we knew the entrance had to be special. After months of research, we chose Tudor Doors , and it was the best decision we made.”</p>

      <h3>The Experience</h3>
      <ul>
        <li>Personal design consultation at their Lekki showroom</li>
        <li>3D preview of our custom cast door</li>
        <li>Professional installation in just one day</li>
        <li>After-sales support that actually responds!</li>
      </ul>

      <blockquote>“Neighbors stop to take photos of our door. It’s not just secure , it’s a masterpiece.”</blockquote>

      <p class="closing-line">Real Homes. Real Protection. Real Beauty. Only from Tudor Doors.</p>
    `,
  },

  {
    id: 6,
    category: "Company",
    title: "Why Tudor Doors Is Lagos’ Most Trusted Door Brand",
    readTime: "1 minutes reading",
    date: "February 20, 2025",
    author: "Tudor Doors Nigeria",
    excerpt: "Over 5,000 homes protected. 15 years of excellence. Here’s why Tudor Doors remains #1 in Nigeria.",
    image: door6,
    fullContent: `
      <h2>Tudor Doors: Lagos’ Trusted Name in Premium Doors</h2>
      <p>From humble beginnings to becoming the go-to brand for luxury and security doors across Nigeria.</p>

      <h3>Our Promise</h3>
      <ul>
        <li>Never compromise on quality</li>
        <li>Deliver on time, every time</li>
        <li>Price fairly — no hidden charges</li>
        <li>Stand behind every door with full warranty</li>
      </ul>

      <h3>Trusted by</h3>
      <p>Banks • Hotels • Embassies • Luxury Estates • Thousands of Nigerian families</p>

      <p class="closing-line"><strong>Tudor Doors Nigeria</strong> Protecting Generations. Building Legacies.</p>
    `,
  },
];


export default function BlogArticles() {
  const [selected, setSelected] = useState(null);

  return (
    <>
    <section className="hero-sectionss">
        <div className="hero-overlayss"></div>
        <div className="hero-contentss">
          <h1 className="hero-title">
            Article
          </h1>
        </div>
      </section>

      <div className="blog-container">
        <header className="blog-header">
          <h1>Recent articles</h1>
        </header>

        <div className="articles-grid">
          {articles.map((article) => (
            <article
              key={article.id}
              className="article-card"
              onClick={() => setSelected(article)}
            >
              <div className="card-image-wrapper">
                <div className="card-image" style={{ backgroundImage: `url(${article.image})` }} />
                <div className="image-overlay" />
              </div>

              <div className="card-content">
                <span className="category-badge">#{article.category}</span>
                <h2 className="card-title">{article.title}</h2>
                <p className="card-excerpt">{article.excerpt}</p>

                <div className="card-footer">
                  <span className="read-time">
                    <TbClock size={16} /> {article.readTime}
                  </span>
                  <span className="read-more">Read more →</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Scrollable Modal */}
     {selected && (
  <div className="modal-backdrop" onClick={() => setSelected(null)}>
    <div className="modal modal-no-image" onClick={(e) => e.stopPropagation()}>
      <button className="modal-close-btn" onClick={() => setSelected(null)}>
        <TbXboxXFilled size={28} />
      </button>

      {/* Tiny accent bar instead of big image */}
      <div className="modal-accent-bar" />

      <div className="modal-scrollable-body">
        <div className="modal-article-header">
          <span className="modal-category">#{selected.category}</span>
          <h1 className="modal-title">{selected.title}</h1>
          
          <div className="modal-meta">
        
            <span className="meta-item">
              <CiCalendar size={18} /> {selected.date}
            </span>
            <span className="meta-item">
              <TbClock size={18} /> {selected.readTime}
            </span>
          </div>
        </div>

        <div 
          className="modal-article-content"
          dangerouslySetInnerHTML={{ __html: selected.fullContent }}
        />
      </div>
    </div>
  </div>
)}
    </>
  );
}