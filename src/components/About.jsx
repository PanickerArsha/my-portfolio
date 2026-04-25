import { IMAGES } from '../lib/images'

function About() {
  const technicalSkills = [
    'React JS', 'JavaScript', 'HTML5 & CSS3', 'Redux', 'React Hooks',
    'Context API', 'RESTful APIs', 'Material-UI', 'Bootstrap', 'Git/GitHub',
    'JWT & OAuth', 'SDK Integration'
  ]

  const stats = [
    { number: '4+', label: 'Years Experience' },
    { number: '5+', label: 'Awards' }
  ]

  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title">
          About <span>Me</span>
        </h2>

        <div className="about-content">
          <div className="about-images">
            <div className="image-grid">
              <img 
                src={IMAGES.hero.image1}
                alt="Arsha Panicker" 
                className="about-img about-img-1"
              />
              <img 
                src={IMAGES.hero.image3}   
                alt="Arsha Panicker" 
                className="about-img about-img-2"
              />
              <img 
                src={IMAGES.hero.image2}
                alt="Arsha Panicker" 
                className="about-img about-img-3"
              />
            </div>
          </div>

          <div className="about-info">
            <h3 className="about-role">ReactJS Developer at TCS</h3>
            
            <p className="about-description">
              {"I'm an innovative ReactJS developer currently working at Tata Consultancy Services in Kochi, India. With a strong foundation in front-end development, I specialize in building responsive, user-friendly web applications that deliver exceptional user experiences."}
            </p>
            
            <p className="about-description">
              My expertise spans across React ecosystem including hooks, context API, and Redux for state management. {"I'm passionate about optimizing application performance through lazy loading, code splitting, and memoization techniques."}
            </p>

            <div className="about-skills">
              <h4>Technical Skills</h4>
              <div className="about-skill-tags">
                {technicalSkills.map((skill, index) => (
                  <span key={index} className="about-skill-tag">{skill}</span>
                ))}
              </div>
            </div>

            <div className="about-stats">
              {stats.map((stat, index) => (
                <div key={index} className="about-stat">
                  <span className="stat-number">{stat.number}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
