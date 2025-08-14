import React, { useMemo } from "react";
import "./AboutMe.css"; // Optional: move related styles here

const teamData = [
  
  {
    id: 1,
    name: "Byagari Vinay",
    title: "Full Stack Developer",
    experience: "1 year",
    skills: ["HTML", "CSS", "JavaScript", "Django"],
    avatar: "/ffa606d8-e23e-4d2e-ac8e-f10090aa2896.jpg",
    description:
      "Vinay is a passionate full stack developer skilled in creating responsive user interfaces and dynamic web applications. With experience in Django and core web technologies, he brings user-focused solutions to life with precision and adaptability.",
  },
  {
    id: 2,
    name: "CH.Naveen",
    title: "Frontend Developer",
    experience: "1 year",
    skills: ["HTML", "CSS", "JavaScript", "React Js"],
    avatar: "https://res.cloudinary.com/dppiuypop/image/upload/v1755163474/uploads/jgpbfzqe0nsupmqcqman.jpg",
    description:
      "Naveen is a detail-oriented frontend developer specializing in crafting engaging, high-performance user interfaces using modern frameworks like React. He combines creativity with technical proficiency to deliver smooth and responsive web experiences.",
  },
  {
    id: 3,
    name: "Katikola Karthik",
    title: "Full Stack Developer",
    experience: "2 years",
    skills: ["MERN Stack", "Django","Next js"],
    avatar: "/img.jpg.jpg",
    description:
      "Karthik is an experienced full stack developer known for building end-to-end web solutions with efficiency and scalability. His strong foundation in both frontend frameworks and backend systems enables him to architect and deliver enterprise-grade applications.",
  },
  {
    id: 4,
    name: "Adepu Sanjay",
    title: "Full Stack Developer",
    experience: "1 year",
    skills: ["MERN Stack", "Django"],
    avatar: "/file_000000002f6461f799c1b6af4733c280 (1).jpg",
    description:
      "Sanjay is a dedicated full stack developer with expertise in both frontend and backend technologies. With strong command over the MERN stack and Django, he builds robust, scalable web applications with a focus on clean architecture and seamless user experience.",
  }
];

// Fisher-Yates Shuffle
const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const TeamSection = () => {
  // useMemo ensures shuffle happens once per mount/render
  const shuffledTeam = useMemo(() => shuffleArray(teamData), []);

  return (
    <section className="team-section">
      <h2>Meet Our Team</h2>
      <div className="team-cards">
        {shuffledTeam.map((member) => (
          <div className="profile-card" key={member.id}>
            <img src={member.avatar} alt={member.name} className="avatar" />
            <div className="profile-content">
              <h3>{member.name}</h3>
              <p className="title">{member.title}</p>
              <p className="experience">
                <strong>Experience:</strong> {member.experience}
              </p>
              <p className="description">{member.description}</p>
              <div className="skills">
                {member.skills.map((skill, index) => (
                  <span key={index} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
