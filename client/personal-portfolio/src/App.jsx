import { useEffect, useState } from "react";
import "./index.css";

const API_URL = import.meta.env.VITE_API_URL;

function App() {
  const [projects, setProjects] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [activeNav, setActiveNav] = useState("about");

  useEffect(() => {
    fetch(`${API_URL}/projects`)
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error(err));
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`${API_URL}/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });

    const data = await response.json();
    alert(data.message || data.error);

    if (response.ok) {
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <div className="app">
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <span className="logo-text">RAQUIB UDDIN SARKAR</span>
          </div>
          <ul className="nav-links">
            <li><a href="#about" onClick={() => setActiveNav("about")} className={activeNav === "about" ? "active" : ""}>About</a></li>
            <li><a href="#skills" onClick={() => setActiveNav("skills")} className={activeNav === "skills" ? "active" : ""}>Skills</a></li>
            <li><a href="#projects" onClick={() => setActiveNav("projects")} className={activeNav === "projects" ? "active" : ""}>Projects</a></li>
            <li><a href="#achievements" onClick={() => setActiveNav("achievements")} className={activeNav === "achievements" ? "active" : ""}>Achievements</a></li>
            <li><a href="#contact" onClick={() => setActiveNav("contact")} className={activeNav === "contact" ? "active" : ""}>Contact</a></li>
          </ul>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">RAQUIB UDDIN SARKAR</h1>
          <p className="hero-subtitle">CSE Undergraduate | Data Science & AI Enthusiast</p>
          <p className="hero-description">
            Crafting innovative solutions with code. Passionate about AI, web development, and solving complex problems.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-call">Call Me</button>
            <button className="btn btn-outline">Email</button>
            <button className="btn btn-outline">GitHub</button>
            <button className="btn btn-outline">LinkedIn</button>
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <p>
              I'm a CSE undergraduate at East West University with strong academic performance 
              (3.91 CGPA) and a genuine interest in helping others learn. I have expertise in 
              object-oriented programming, data structures, algorithms, and emerging technologies 
              like artificial intelligence and machine learning.
            </p>
            <p>
              Throughout my academic journey, I've maintained consistent excellence, appearing 
              on the Dean's List multiple times. I'm passionate about applying theoretical knowledge 
              to real-world problems and enjoy mentoring peers in programming fundamentals and 
              core computer science concepts.
            </p>
            <p>
              Beyond academics, I actively participate in the university's Computer Programming 
              Club and am committed to continuous learning and professional growth.
            </p>
          </div>
        </div>
      </section>

      <section id="achievements" className="achievements-section">
        <div className="container">
          <h2 className="section-title">Achievements</h2>
          <div className="achievement-list">
            <div className="achievement-item">
              <div className="achievement-icon">🏆</div>
              <div>
                <h4>Medha Lalon Fund Scholarship (Dean's List)</h4>
                <p>06/2025 - Present | Recognized for outstanding academic performance</p>
              </div>
            </div>
            <div className="achievement-item">
              <div className="achievement-icon">⭐</div>
              <div>
                <h4>100% Merit Scholarship</h4>
                <p>07/2024 - 05/2025 | Full tuition merit scholarship for excellent academic achievements</p>
              </div>
            </div>
            <div className="achievement-item">
              <div className="achievement-icon">📚</div>
              <div>
                <h4>50% Tuition Waiver</h4>
                <p>06/2023 - 06/2024 | Awarded for strong results in SSC and HSC</p>
              </div>
            </div>
            <div className="achievement-item">
              <div className="achievement-icon">🎓</div>
              <div>
                <h4>Dean's List (Multiple Terms)</h4>
                <p>Multiple semesters | Maintained 3.8+ GPA consistently</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="skills">
        <div className="container">
          <h2 className="section-title">Skills</h2>
          
          <div className="skills-grid">
            <div className="skill-category">
              <h4 className="category-title">Programming Languages</h4>
              <div className="skill-tags">
                <span className="skill-tag">C</span>
                <span className="skill-tag">C++</span>
                <span className="skill-tag">Java</span>
                <span className="skill-tag">Python</span>
                <span className="skill-tag">SQL</span>
              </div>
            </div>

            <div className="skill-category">
              <h4 className="category-title">Core Competencies</h4>
              <div className="skill-tags">
                <span className="skill-tag">OOP</span>
                <span className="skill-tag">Data Structures</span>
                <span className="skill-tag">Algorithms</span>
                <span className="skill-tag">Database Systems</span>
                <span className="skill-tag">Digital Logic Design</span>
              </div>
            </div>

            <div className="skill-category">
              <h4 className="category-title">Technologies & Tools</h4>
              <div className="skill-tags">
                <span className="skill-tag">Oracle Apex</span>
                <span className="skill-tag">AutoCAD</span>
                <span className="skill-tag">Cisco Packet Tracer</span>
                <span className="skill-tag">Microsoft Office</span>
                <span className="skill-tag">Pspice</span>
                <span className="skill-tag">Quartus II</span>
              </div>
            </div>

            <div className="skill-category">
              <h4 className="category-title">Advanced Topics</h4>
              <div className="skill-tags">
                <span className="skill-tag">Artificial Intelligence</span>
                <span className="skill-tag">Machine Learning</span>
                <span className="skill-tag">Computer Networks</span>
                <span className="skill-tag">Operating Systems</span>
                <span className="skill-tag">Computer Architecture</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-icon">🤖</div>
              <h3>Generative AI for Traditional Nakshi Kantha Design</h3>
              <p className="project-tech">CLIP | LoRA | Stable Diffusion</p>
              <p className="project-description">
                Developed a text-to-image generative AI system that creates authentic Nakshi Kantha 
                designs by fine-tuning Stable Diffusion with CLIP and LoRA on a custom Bengali textile dataset.
              </p>
            </div>

            <div className="project-card">
              <div className="project-icon">📊</div>
              <h3>Workload & Mental Health Analysis</h3>
              <p className="project-tech">Python | NumPy | Pandas | Matplotlib</p>
              <p className="project-description">
                Built multilinear regression models to predict workload and mental health 
                relationships in university students with statistical analysis.
              </p>
            </div>

            <div className="project-card">
              <div className="project-icon">🛒</div>
              <h3>Crimson Grocery Management System</h3>
              <p className="project-tech">Java | JavaFX | OOP</p>
              <p className="project-description">
                Built an object-oriented grocery management system with product management, 
                billing, inventory tracking, and intuitive user interface.
              </p>
            </div>

            <div className="project-card">
              <div className="project-icon">🗄️</div>
              <h3>IPL-2008 Database Analysis</h3>
              <p className="project-tech">SQL | Database Design</p>
              <p className="project-description">
                Created comprehensive database for IPL 2008 with complex queries, 
                joins, aggregates, and advanced subquery analysis.
              </p>
            </div>

            <div className="project-card">
              <div className="project-icon">🛣️</div>
              <h3>Fastest Route Finder Algorithm</h3>
              <p className="project-tech">C++ | Algorithms | Dijkstra | Floyd-Warshall</p>
              <p className="project-description">
                Implemented and compared shortest-path algorithms using real map data 
                to analyze performance, efficiency, and optimization.
              </p>
            </div>

            <div className="project-card">
              <div className="project-icon">⚡</div>
              <h3>Smart Cooling System</h3>
              <p className="project-tech">Digital Logic | Circuit Design</p>
              <p className="project-description">
                Designed household cooling control system with logic circuits for 
                temperature and humidity management with optimal outputs.
              </p>
            </div>
          </div>

          {projects.length > 0 && (
            <div className="additional-projects">
              <h3 className="subsection-title">Additional Projects from Backend</h3>
              <div className="projects-list">
                {projects.map((project) => (
                  <div className="project-list-item" key={project.id}>
                    <h4>{project.title}</h4>
                    <p>{project.description}</p>
                    <p className="tech-stack"><strong>Tech:</strong> {project.tech.join(", ")}</p>
                    <div className="project-links">
                      <a href={project.github} target="_blank" rel="noreferrer" className="link-btn">GitHub</a>
                      {project.demo && <a href={project.demo} target="_blank" rel="noreferrer" className="link-btn">Live Demo</a>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          
          <div className="contact-content">
            <div className="contact-info">
              <div className="info-item">
                <h4>Email</h4>
                <a href="mailto:2023-2-60-101@std.ewubd.edu">2023-2-60-101@std.ewubd.edu</a>
              </div>
              <div className="info-item">
                <h4>Phone</h4>
                <p>+880 1759236436</p>
              </div>
              <div className="info-item">
                <h4>Location</h4>
                <p>Dhaka, Bangladesh</p>
              </div>
              <div className="info-item">
                <h4>Social Profiles</h4>
                <div className="social-links-large">
                  <a href="https://linkedin.com/in/raquib-uddin-sarkar" target="_blank" rel="noreferrer">LinkedIn</a>
                  <a href="https://github.com/layesUddin" target="_blank" rel="noreferrer">GitHub</a>
                </div>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Full Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              />
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2026 Raquib Uddin Sarkar. All rights reserved.</p>
          <p>Built with React & Vite | Designed for Excellence</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
