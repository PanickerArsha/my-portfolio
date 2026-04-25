const experienceData = [
  {
    title: 'System Engineer - React Frontend Developer',
    company: 'Tata Consultancy Services, Kochi, India',
    date: 'February 2024 - Present',
    responsibilities: [
      'Developed and optimized dynamic web applications for healthcare professionals, pharmacists, and consumers',
      'Built intuitive asset management systems enabling users to upload, preview, and share various file types',
      'Implemented React hooks (useState, useEffect, useContext, useMemo, useCallback) for effective state management',
      'Designed fully responsive UI using CSS Flexbox and Grid for seamless accessibility across all devices',
      'Developed custom SDK Package for seamless integration by external applications',
      'Optimized performance using lazy loading, code splitting (React Suspense, React.lazy), reducing initial page load time',
      'Implemented role-based access control (RBAC) for Admins, Pharmacists, and Consumers'
    ]
  },
  {
    title: 'Assistant System Engineer - React Frontend',
    company: 'Tata Consultancy Services, Kochi, India',
    date: 'February 2023 - February 2024',
    responsibilities: [
      'Designed and developed responsive web pages using JavaScript, HTML, CSS, Bootstrap, and Material-UI',
      'Developed and maintained reusable React components, improving code modularity',
      'Integrated RESTful APIs with optimized API calls using debouncing and caching techniques',
      'Enhanced authentication by integrating secure login functionality',
      'Managed version control using Git and collaborated with teams via GitHub/GitLab',
      'Actively participated in Agile ceremonies including sprint planning and daily stand-ups'
    ]
  },
  {
    title: 'Assistant System Engineer Trainee - ReactJS',
    company: 'Tata Consultancy Services, Kochi, India',
    date: 'February 2022 - February 2023',
    responsibilities: [
      'Developed and styled responsive web pages using HTML, CSS, JavaScript, Bootstrap, and Material-UI',
      'Implemented reusable UI components in React.js, improving consistency and reducing redundant code',
      'Enhanced user experience by applying CSS animations and interactive elements',
      'Worked with API integration to display dynamic content in React components',
      'Followed Agile methodologies and participated in daily stand-up meetings'
    ]
  }
]

function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <h2 className="section-title">
          Work <span>Experience</span>
        </h2>
        
        <div className="experience-timeline">
          {experienceData.map((exp, index) => (
            <div key={index} className="experience-item">
              <span className="experience-date">{exp.date}</span>
              <div className="experience-card">
                <h3>{exp.title}</h3>
                <h4>{exp.company}</h4>
                <ul>
                  {exp.responsibilities.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
