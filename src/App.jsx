import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaBars, FaTimes, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './App.css';

// Sample data
const destinations = [
  {
    name: "Santorini, Greece",
    description: "Experience the stunning white buildings and blue domes overlooking the Aegean Sea.",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
  },
  {
    name: "Kyoto, Japan",
    description: "Discover ancient temples, traditional gardens, and the beauty of cherry blossoms.",
    image: "https://images.unsplash.com/photo-1624253321171-1be53e12f5f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
  },
  {
    name: "Bali, Indonesia",
    description: "Relax on pristine beaches, explore lush rice terraces, and immerse in vibrant culture.",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=738&q=80"
  },
  {
    name: "Machu Picchu, Peru",
    description: "Trek to the ancient Incan citadel set high in the Andes Mountains.",
    image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80"
  },
  {
    name: "Amalfi Coast, Italy",
    description: "Enjoy dramatic coastline, colorful villages, and delicious Mediterranean cuisine.",
    image: "https://images.unsplash.com/photo-1633321088355-d0f81134ca3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80"
  },
  {
    name: "Serengeti, Tanzania",
    description: "Witness the incredible wildlife and the Great Migration across vast savannas.",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1168&q=80"
  }
];

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "New York, USA",
    text: "Our trip to Bali was absolutely magical! TravelEase took care of every detail, from accommodations to local guides. We couldn't have asked for a better experience.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Michael Chen",
    location: "Toronto, Canada",
    text: "The Greece tour exceeded all my expectations. The itinerary was perfectly balanced between guided tours and free time to explore. I've already booked my next trip with TravelEase!",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Emma Rodriguez",
    location: "London, UK",
    text: "As a solo traveler, safety and community are important to me. TravelEase provided both, along with incredible experiences in Japan that I'll cherish forever.",
    avatar: "https://randomuser.me/api/portraits/women/63.jpg"
  }
];

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="app">
      {/* Navigation Bar */}
      <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-container">
          <div className="logo">
            <h1>TravelEase</h1>
          </div>
          <div className="menu-icon" onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>
          <nav className={`nav-links ${isOpen ? 'active' : ''}`}>
            <ul>
              <li>
                <Link to="home" smooth={true} duration={500} onClick={() => setIsOpen(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="destinations" smooth={true} duration={500} onClick={() => setIsOpen(false)}>
                  Destinations
                </Link>
              </li>
              <li>
                <Link to="testimonials" smooth={true} duration={500} onClick={() => setIsOpen(false)}>
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="about" smooth={true} duration={500} onClick={() => setIsOpen(false)}>
                  About
                </Link>
              </li>
              <li>
                <Link to="contact" smooth={true} duration={500} onClick={() => setIsOpen(false)}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Discover the World's Beauty
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Explore breathtaking destinations and create unforgettable memories
          </motion.p>
          <motion.button
            className="cta-button"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Journey
          </motion.button>
        </div>
      </section>

      {/* Featured Destinations Section */}
      <section id="destinations" className="destinations">
        <div className="container">
          <h2 className="section-title">Featured Destinations</h2>
          <div className="destinations-grid">
            {destinations.map((destination, index) => (
              <motion.div
                key={index}
                className="destination-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="destination-img">
                  <img src={destination.image} alt={destination.name} />
                </div>
                <div className="destination-info">
                  <h3>{destination.name}</h3>
                  <p>{destination.description}</p>
                  <button className="destination-btn">Explore</button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials">
        <div className="container">
          <h2 className="section-title">What Our Travelers Say</h2>
          <div className="testimonial-slider">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                className="testimonial"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <div className="testimonial-content">
                  <p>"{testimonials[currentTestimonial].text}"</p>
                  <div className="testimonial-author">
                    <img src={testimonials[currentTestimonial].avatar} alt={testimonials[currentTestimonial].name} />
                    <div>
                      <h4>{testimonials[currentTestimonial].name}</h4>
                      <p>{testimonials[currentTestimonial].location}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            <div className="testimonial-dots">
              {testimonials.map((_, index) => (
                <span
                  key={index}
                  className={`dot ${currentTestimonial === index ? 'active' : ''}`}
                  onClick={() => setCurrentTestimonial(index)}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="about-content">
            <motion.div
              className="about-text"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title">About TravelEase</h2>
              <p>
                Founded in 2010, TravelEase has been helping travelers discover the world's most beautiful destinations
                for over a decade. Our mission is to make travel accessible, enjoyable, and memorable for everyone.
              </p>
              <p>
                We curate unique travel experiences that connect you with local cultures, stunning landscapes, and
                unforgettable adventures. Our team of experienced travel experts is dedicated to providing personalized
                service and ensuring your journey is seamless from start to finish.
              </p>
              <button className="about-btn">Learn More</button>
            </motion.div>
            <motion.div
              className="about-image"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <img src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1121&q=80" alt="Travel Team" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="contact-form">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-container">
            <motion.div 
              className="contact-info"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <div>
                  <h3>Phone</h3>
                  <p>03401202005</p>
                </div>
              </div>
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <div>
                  <h3>Email</h3>
                  <p>premthakurfact786@gmail.com</p>
                </div>
              </div>
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <div>
                  <h3>Address</h3>
                  <p>Barakhu, Islamabad</p>
                </div>
              </div>
            </motion.div>
            <motion.form 
              className="contact-form-container"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <input type="text" placeholder="Subject" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" rows="5" required></textarea>
              </div>
              <button type="submit" className="submit-btn">Send Message</button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer id="contact" className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <h2>TravelEase</h2>
              <p>Your journey begins with us</p>
            </div>
            <div className="footer-links">
              <div className="footer-column">
                <h3>Quick Links</h3>
                <ul>
                  <li><a href="#home">Home</a></li>
                  <li><a href="#destinations">Destinations</a></li>
                  <li><a href="#testimonials">Testimonials</a></li>
                  <li><a href="#about">About</a></li>
                </ul>
              </div>
              <div className="footer-column">
                <h3>Contact</h3>
                <p><FaPhone className="footer-icon" /> 03401202005</p>
                <p><FaEnvelope className="footer-icon" /> premthakurfact786@gmail.com</p>
                <p><FaMapMarkerAlt className="footer-icon" /> Barakhu, Islamabad</p>
              </div>
              <div className="footer-column">
                <h3>Follow Us</h3>
                <div className="social-icons">
                  <a href="#" className="social-icon"><FaFacebookF /></a>
                  <a href="#" className="social-icon"><FaTwitter /></a>
                  <a href="#" className="social-icon"><FaInstagram /></a>
                  <a href="#" className="social-icon"><FaLinkedinIn /></a>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} TravelEase. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;