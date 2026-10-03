import React from 'react';
import './App.css';

// Inline SVG Icon Helpers
const ExternalIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);

const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const MailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

export default function App() {
  const projects = [

    {
      title: "AutoDS — Automated Machine Learning Platform",
      description: "Flask web platform that accepts CSV datasets, automatically runs feature preprocessing, evaluates 8 classification/regression models, and exports ready-to-deploy trained .pkl models.",
      tags: ["Python", "Flask", "Scikit-learn", "Pandas", "Matplotlib", "Seaborn"],
      live: "https://autods-virn.onrender.com",
      github: "https://github.com/shagunxv"
    },
    {
      title: "AI Notes Assistant",
      description: "Generative AI application built on Streamlit that extracts PDF note text, processes chunked inputs, and generates structured concise summaries using Gemini API.",
      tags: ["Python", "Streamlit", "Gemini API", "PyPDF2"],
      live: "https://summary-pdf.streamlit.app",
      github: "https://github.com/shagunxv"
    },
    {
      title: "ChatX — Real-Time Messaging Application",
      description: "Full-stack real-time communication platform utilizing WebSockets for instant message routing, online presence tracking, and dynamic conversation rooms.",
      tags: ["React.js", "Node.js", "Express.js", "Socket.io", "Vite"],
      live: "https://chat-x-nine.vercel.app",
      github: "https://github.com/shagunxv"
    },
    {
      title: "PasteApp — Code & Snippet Manager",
      description: "React application integrated with Redux Toolkit for centralized state management to create, edit, store, and share code snippets with LocalStorage persistence.",
      tags: ["React.js", "Redux Toolkit", "JavaScript", "Vite"],
      live: "https://paste-app-alpha-gray.vercel.app",
      github: "https://github.com/shagunxv"
    }

  ];

  const skillCategories = [

    {
      title: "Languages & Databases",
      skills: ["Python","C", "C++", "R", "JavaScript", "SQL", "MySQL"]
    },
    {
      title: "Web & Backend",
      skills: ["React.js", "Redux Toolkit", "Node.js", "Express.js", "Flask", "Socket.io", "HTML/CSS"]
    },
    {
      title: "Data Science & AI",
      skills: ["Pandas", "NumPy", "Scikit-learn", "TensorFlow", "Keras", "Gemini API", "EDA"]
    },
    {
      title: "Tools & Core CS",
      skills: ["Git & GitHub", "Vercel", "Render", "Data Structures", "DBMS", "Operating Systems", "Networks"]
    },
    {
    title: "Professional & Soft Skills",
    skills: ["Problem Solving (DSA)", "Technical Communication", "Public Speaking & Presentations", "Analytical Thinking"]
    }

  ];

  return (
    <div className="container">
     
      <header className="hero">
        <div className="badge-status">
          <span className="status-dot"></span>
          Available for Opportunities
        </div>
        <h1>Shagun Ojha</h1>
        <div className="subtitle">Full-Stack & Machine Learning Developer</div>
        <p className="bio">
          Third-year BCA student specializing in Data Science and Machine Learning. 
          I build full-stack web applications integrated with intelligent machine learning pipelines and real-time features.
        </p>
        <div className="cta-group">
          <a href="mailto:shagunxv@gmail.com" className="btn btn-primary">
            <MailIcon /> Contact Me
          </a>
          <a href="https://github.com/shagunxv" target="_blank" rel="noreferrer" className="btn btn-outline">
            <GithubIcon /> GitHub
          </a>
          <a href="https://linkedin.com/in/shagun-ojha-ab7594352" target="_blank" rel="noreferrer" className="btn btn-outline">
            <LinkedinIcon /> LinkedIn
          </a>
        </div>
      </header>

      {/* Projects Section */}
      <section className="section">
        <h2 className="section-title">Deployed Projects</h2>
        <div className="projects-grid">
          {projects.map((project, idx) => (
            <div className="project-card" key={idx}>
              <div className="project-header">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-tags">
                  {project.tags.map((tag, tIdx) => (
                    <span className="tech-tag" key={tIdx}>{tag}</span>
                  ))}
                </div>
              </div>
              <div className="project-links">
                <a href={project.live} target="_blank" rel="noreferrer" className="project-link">
                  Live Demo <ExternalIcon />
                </a>
                <a href={project.github} target="_blank" rel="noreferrer" className="project-link">
                  Code Repo <GithubIcon />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Technical Competencies</h2>
        <div className="skills-container">
          {skillCategories.map((cat, idx) => (
            <div className="skill-category" key={idx}>
              <h4>// {cat.title}</h4>
              <div className="skill-pills">
                {cat.skills.map((skill, sIdx) => (
                  <span className="skill-pill" key={sIdx}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Education</h2>
        <div className="education-card">
          <div>
            <div className="edu-title">Bachelor of Computer Applications (BCA)</div>
            <div className="edu-institution">Deen Dayal Upadhyaya Gorakhpur University — Specialization in ML & Data Science</div>
            <div className="edu-cgpa">CGPA: 8.4 / 10</div>
          </div>
          <div className="edu-dates">2024 — 2027</div>
        </div>
      </section>
      <footer>
        <p>Built by Shagun Ojha • Deployed on Vercel</p>
      </footer>
    </div>
  );
}