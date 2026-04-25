import { Code2, Layout, Database, GitBranch, Shield, Boxes } from 'lucide-react'

const skillsData = [
  {
    icon: <Code2 size={28} />,
    title: 'Frontend Development',
    skills: ['React JS', 'JavaScript', 'HTML5', 'CSS3']
  },
  {
    icon: <Layout size={28} />,
    title: 'UI Frameworks',
    skills: ['Bootstrap', 'Material-UI', 'CSS Flexbox', 'CSS Grid']
  },
  {
    icon: <Boxes size={28} />,
    title: 'State Management',
    skills: ['React Hooks', 'Context API', 'Redux']
  },
  {
    icon: <Database size={28} />,
    title: 'API Integration',
    skills: ['RESTful APIs', 'Fetch API', 'Axios']
  },
  {
    icon: <Shield size={28} />,
    title: 'Authentication',
    skills: ['JWT', 'OAuth', 'SAML', 'RBAC']
  },
  {
    icon: <GitBranch size={28} />,
    title: 'Development Tools',
    skills: ['Git', 'GitHub', 'GitLab', 'VS Code']
  }
]

function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <h2 className="section-title">
          My <span>Skills</span>
        </h2>
        
        <div className="skills-grid">
          {skillsData.map((category, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon">
                {category.icon}
              </div>
              <h3>{category.title}</h3>
              <div className="skill-tags">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
