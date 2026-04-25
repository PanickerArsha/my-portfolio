import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react'

const educationData = [
  {
    degree: 'Bachelor of Technology in Electronics & Communication Engineering',
    institution: 'RVS College of Engineering and Technology (Anna University)',
    location: 'Tamil Nadu, India',
    date: '2017 - 2021',
    grade: 'CGPA: 8.9',
  },
  {
    degree: 'XI – XII in PCM',
    institution: 'DAV Public School (CBSE)',
    location: 'Madhya Pradesh, India',
    date: '2015 - 2017',
    grade: 'Percentage: 76.4%',
  }
]

function Education() {
  return (
    <section id="education" className="section education">
      <div className="container">
        <h2 className="section-title">
          My <span>Education</span>
        </h2>
        
        <div className="education-timeline">
          {educationData.map((edu, index) => (
            <div key={index} className="education-item">
              <div className="education-icon">
                <GraduationCap size={28} />
              </div>
              <div className="education-card">
                <div className="education-header">
                  <h3>{edu.degree}</h3>
                  <span className="education-grade">
                    <Award size={16} />
                    {edu.grade}
                  </span>
                </div>
                <h4>{edu.institution}</h4>
                <div className="education-meta">
                  <span className="education-date">
                    <Calendar size={16} />
                    {edu.date}
                  </span>
                  <span className="education-location">
                    <MapPin size={16} />
                    {edu.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education