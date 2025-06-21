import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination,Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./ProjectList.css";

// Default projects (always shown)
const defaultProjects = [

  {
    _id: "2",
    title: "College Attendance Management",
    description: "The College Attendance Management System is a web-based application built using the MERN stack to streamline and automate attendance tracking for colleges. It provides an efficient platform for faculty and administrators to manage student attendance records with ease. Features include faculty-based attendance management, real-time tracking, department & year-wise organization, attendance summary & reports, past attendance editing with admin permissions, and a responsive UI. The tech stack includes React.js (Vite), Tailwind CSS, Node.js, Express.js, and MongoDB. The system ensures accurate and hassle-free attendance tracking, reducing manual efforts and improving efficiency in educational institutions.",
    techStack: ["React Js", "Node Js", "Express Js","Mongodb","Cloudnary"],
    images: ["./image1.jpg","./image2.jpg","./image3.jpg","./image4.jpg","./image5.jpg","./image6.jpg","./image7.jpg","./image8.jpg"],
    liveDemo: "https://tkrcet.vercel.app",
    moreInfo: "#",
  },
  {
    _id: "3",
    title: "Admin Panel of College Attendance Management",
    description:  "The College Attendance Management System is a robust and efficient platform developed using the MERN stack (MongoDB, Express.js, React.js, Node.js) to streamline attendance tracking and department management. The system ensures seamless administration and provides secure role-based authentication for different users.\n\nThe system includes two primary roles: HOD and Admin. The HOD is responsible for managing only their respective department's data. This includes handling faculty details, timetables, section-wise schedules, student attendance, and maintaining records for entire sections. This role ensures that department heads have control over their domain without affecting other departments.\n\nThe Admin has full control over all department data and functionalities. In addition to managing faculty and student attendance records across departments, the admin has special privileges to grant edit permissions to faculty members for specific sections. This ensures flexibility in attendance modifications while maintaining security and accountability.\n\nWith an intuitive user interface and structured access control, the College Attendance Management System enhances efficiency in attendance tracking, department management, and faculty coordination, making it an essential tool for educational institutions.",
    techStack: ["React Js", "Node Js", "Express Js","Mongodb","Cloudnary"],
    images: ["./pic1.jpg","./pic2.jpg","./pic3.jpg","./pic4.jpg","./pic5.jpg","./pic6.jpg","./pic7.jpg"],
    liveDemo: "https://tkrc-admin.vercel.app",
    moreInfo: "#",
  }

];

const ProjectsList = ({ darkMode }) => {
  const [projects, setProjects] = useState(defaultProjects);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lightboxImage, setLightboxImage] = useState(null); // For fullscreen image

  

  return (
    <div className={`projects-container ${darkMode ? "dark" : ""}`}>
      <h2 className="projects-title"></h2>



      {projects.map((project) => (
        <div key={project._id} className={`project-card ${darkMode ? "dark" : ""}`}>
          <h3 className="project-title">{project.title}</h3>
          <p className="project-description">{project.description}</p>
<p className="project-tech">
  <strong>Tech Stack : </strong>
  {project.techStack.map((tech, index) => (
    <span key={index}>{tech}</span>
  ))}
</p>

<Swiper
  navigation
  pagination={{ clickable: true }}
  modules={[Navigation, Pagination, Autoplay]} // Include Autoplay module
  autoplay={{ delay: 3000, disableOnInteraction: false }} // Ensure autoplay works
  className="project-slider"
>
  {project.images.map((image, index) => (
    <SwiperSlide key={index} onClick={() => setLightboxImage(image)}>
      <img src={image} alt={`Project ${index + 1}`} className="project-image" />
    </SwiperSlide>
  ))}
</Swiper>

          <div className="project-links">
            <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="live-demo">
              Live Demo
            </a>

          </div>
        </div>
      ))}

      {/* Lightbox Fullscreen View */}
      {lightboxImage && (
        <div className="lightbox" onClick={() => setLightboxImage(null)}>
          <img src={lightboxImage} alt="Full View" className="lightbox-image" />
        </div>
      )}
    </div>
  );
};

export default ProjectsList;