import { Github, Linkedin, Mail, Heart } from 'lucide-react'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <p className="footer-text">
          © {currentYear} Made with <Heart size={16} color="#ffd700" style={{ display: 'inline', verticalAlign: 'middle' }} /> by <span>Arsha Panicker</span>
        </p>
        
        <div className="footer-social">
          <a href="https://github.com/PanickerArsha" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github size={18} />
          </a>
          <a href="https://www.linkedin.com/in/arshapanicker/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin size={18} />
          </a>
          <a href="mailto:arshapanicker5622@gmail.com" aria-label="Email">
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
