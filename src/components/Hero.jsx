import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react'
import { IMAGES } from '../lib/images'

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <p className="hero-greeting">{"Hello, I'm"}</p>
          <h1 className="hero-name">
            <span>Arsha Panicker</span>
          </h1>
          <h2 className="hero-title">React Frontend Developer</h2>
          <p className="hero-description">
            Innovative ReactJS developer with experience in designing responsive, 
            user-friendly web applications and optimizing application performance. 
            Passionate about creating seamless user experiences with modern technologies.
          </p>
          
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">
              Get in Touch
              <Mail size={18} />
            </a>
            <a href="#projects" className="btn btn-secondary">
              View Projects
              <ArrowDown size={18} />
            </a>
          </div>

          <div className="hero-social">
            <a href="https://github.com/PanickerArsha" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/arshapanicker/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="mailto:arshapanicker5622@gmail.com" aria-label="Email">
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="hero-image">
          <div className="hero-image-wrapper">
            <img 
              src={IMAGES.hero.profile}
              alt="Arsha Panicker"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
