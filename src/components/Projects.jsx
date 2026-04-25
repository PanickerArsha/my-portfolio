import { Github, ExternalLink, Code, Layout, Smartphone, Globe } from 'lucide-react'

const projectsData = [
  {
    title: 'XYZ',
    description: 'Xyz',
    icon: Layout,
    tech: ['React JS','HTML5', 'CSS3'],
    github: 'https://github.com',
    demo: 'https://demo.com'
  },
  // {
  //   title: 'Task Management App',
  //   description: 'A collaborative task management application with drag-and-drop functionality, team assignments, and progress tracking.',
  //   icon: Code,
  //   tech: ['React JS', 'Context API', 'React DnD', 'Firebase'],
  //   github: 'https://github.com',
  //   demo: 'https://demo.com'
  // },
  // {
  //   title: 'Weather Application',
  //   description: 'A responsive weather app that provides real-time weather data, forecasts, and location-based weather alerts.',
  //   icon: Globe,
  //   tech: ['React JS', 'OpenWeather API', 'Geolocation', 'CSS3'],
  //   github: 'https://github.com',
  //   demo: 'https://demo.com'
  // },
  // {
  //   title: 'Recipe Finder',
  //   description: 'A recipe discovery platform with search filters, nutritional information, and the ability to save favorite recipes.',
  //   icon: Smartphone,
  //   tech: ['React JS', 'Spoonacular API', 'Material-UI', 'LocalStorage'],
  //   github: 'https://github.com',
  //   demo: 'https://demo.com'
  // }
]

function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title">
          My <span>Projects</span>
        </h2>
        
        <p className="projects-subtitle">
          A collection of personal projects showcasing my skills in React development and modern web technologies.
        </p>
        
        <div className="projects-grid">
          {projectsData.map((project, index) => {
            const IconComponent = project.icon
            return (
              <div key={index} className="project-card">
                <div className="project-icon-header">
                  <div className="project-icon">
                    <IconComponent size={28} />
                  </div>
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex}>{tech}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="project-link"
                    >
                      <Github size={18} />
                      GitHub
                    </a>
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="project-link"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects
