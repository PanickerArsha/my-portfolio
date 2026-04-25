import { Download, FileText } from 'lucide-react'
import { FILES } from '../lib/files'

function Resume() {
  const resumeUrl = FILES.resume

  return (
    <section id="resume" className="section resume">
      <div className="container">
        <h2 className="section-title">
          My <span>Resume</span>
        </h2>
        
        <div className="resume-content">
          <FileText size={80} color="#ffd700" style={{ marginBottom: '30px' }} />
          <p>
            Download my resume to learn more about my experience, skills, and achievements. 
            I have over 4 years of experience as a React Frontend Developer at Tata Consultancy Services, 
            working on enterprise-level healthcare and asset management applications.
          </p>
          <a 
            href={resumeUrl}
            download="Arsha_Panicker_Resume.pdf"
            className="resume-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Download size={22} />
            Download Resume
          </a>
        </div>
      </div>
    </section>
  )
}

export default Resume
