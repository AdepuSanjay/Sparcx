import React, { useEffect } from "react";
import Navbar from "../components/Navbar.jsx";
import {Link} from "react-router-dom";
import "./Home.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  SiReact,
  SiMongodb,
  SiExpress,
  SiNodedotjs,
  SiDjango,
  SiCloudinary,
  SiTailwindcss,
  SiPostgresql,
  SiFirebase,
} from "react-icons/si";

const HomePage = () => {
  useEffect(() => {
    const cards = document.querySelectorAll('.profile-card');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    });

    cards.forEach(card => observer.observe(card));
    return () => cards.forEach(card => observer.unobserve(card));
  }, []);

useEffect(() => {
  AOS.init({
    duration: 1000, // animation duration in ms
    once: true,     // only animate once
    easing: 'ease-in-out',
  });
}, []);
  return (
    <>
      <Navbar />
    <div className="homepage-container">
      {/* Hero Section */}
 <section className="hero" data-aos="fade-bottom">
          <div className="hero-content">
            <div className="hero-text">
              <h1>We Build Modern, Scalable Web Solutions</h1>
              <p>
                As a dedicated team of full stack developers, we create reliable, high-performance digital products tailored to your goals. From backend APIs to modern user interfaces, we engineer every layer of the stack with precision.
              </p>
          <Link to="/contact"> <button className="cta-button">Let's Connect</button></Link> 
            </div>
            <div className="hero-image">
              <img src="/file_00000000fefc61f89ecbec7ea0a1380c~2.jpg" alt="Full Stack Dev Team" />
            </div>
          </div>
        </section>

      {/* Expertise Summary */}
    <section className="expertise" >
        <p>
          We work extensively with technologies like the MERN stack and Django to build fast, scalable, and secure platforms. Our cloud media processing is powered by Cloudinary, and we ensure every deployment is production-grade.
        </p>
        <p>
          Whether it's a web dashboard, SaaS product, eCommerce platform, or a real-time app, we turn your ideas into systems that grow with your users.
        </p>
        

      </section>

      {/* Tech Stack Icons */}
            
<h2 id="f">Tech stack</h2>
<div className="icons-grid">
  <div data-aos="zoom-in" data-aos-delay="0">
    <SiReact color="#61DAFB" /><span>React.js</span>
  </div>
  <div data-aos="zoom-in" data-aos-delay="100">
    <SiNodedotjs color="#3C873A" /><span>Node.js</span>
  </div>
  <div data-aos="zoom-in" data-aos-delay="200">
    <SiExpress color="#000000" /><span>Express</span>
  </div>
  <div data-aos="zoom-in" data-aos-delay="300">
    <SiMongodb color="#4DB33D" /><span>MongoDB</span>
  </div>
  <div data-aos="zoom-in" data-aos-delay="400">
    <SiDjango color="#092E20" /><span>Django</span>
  </div>
  <div data-aos="zoom-in" data-aos-delay="500">
    <SiCloudinary color="#F38020" /><span>Cloudinary</span>
  </div>
  <div data-aos="zoom-in" data-aos-delay="600">
    <SiFirebase color="#FFCA28" /><span>Firebase</span>
  </div>
  <div data-aos="zoom-in" data-aos-delay="700">
    <SiPostgresql color="#336791" /><span>PostgreSQL</span>
  </div>
</div>

      {/* Why Choose Us */}
    <section className="why-choose" data-aos="fade-top">
        <h2>Why Choose Us?</h2>
        <p>
          We focus on clean architecture, security, performance, and maintainability. Each project is approached with a
          product mindset and technical clarity. Our team ensures seamless integration between design, frontend, backend, and deployment.
        </p>
        <p>
          Communication, transparency, and continuous iteration are the pillars of our delivery process.
        </p>
      </section>

      {/* Approach Section */}
<section className="approach" data-aos="flip-up">
  <div className="approach-content">
    <div className="approach-text">
      <h2>Our Development Approach</h2>
      <p>
        We follow agile practices with clearly defined milestones, version control, code reviews, and automated testing.
        Our systems are cloud-deployable, modular, and easy to scale — ensuring long-term value for your business.
      </p>
      <p>
        We don't just ship code — we build solutions that evolve with your users.
      </p>
   <Link to="/contact"><button className="cta-button">Start Your Project</button></Link> 
    </div>

    <div className="approach-image">
      <img src="/file_00000000814c62308c2dde3dec821cec.jpg" alt="Development Team Illustration" />
    </div>
  </div>
</section>
    </div>
    </>
  );
};

export default HomePage;






