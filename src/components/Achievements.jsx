import { Award, Target, Star, Trophy } from 'lucide-react'

const achievementsData = [
  {
    icon: Award,
    title: 'Healthcare Web Application',
    description: 'Developed a dynamic web application for healthcare professionals, pharmacists, and consumers to search, browse, and purchase pharmaceutical products efficiently with real-time product availability.',
    highlight: 'Enhanced user experience for 10K+ users'
  },
  {
    icon: Target,
    title: 'Asset Management System',
    description: 'Built an intuitive asset management system enabling users to upload, preview, and share various file types (PDF, DOCX, PPTX, MP4, JPEG, PNG) while ensuring smooth rendering and fast loading times.',
    highlight: 'Improved file handling efficiency by 40%'
  },
  {
    icon: Star,
    title: 'Custom SDK Package',
    description: 'Designed and delivered a reusable SDK package enabling multiple external applications to integrate core features with minimal effort. Enabled secure deep links for external user access.',
    highlight: 'Adopted by 5+ external applications'
  },
  {
    icon: Trophy,
    title: 'Global Content Platform',
    description: 'Engineered a globally accessible web application allowing users to access content from any location in their preferred local language, with role-based access control for personalized content.',
    highlight: 'Supported 15+ languages worldwide'
  }
]

function Achievements() {
  return (
    <section id="achievements" className="section achievements">
      <div className="container">
        <h2 className="section-title">
          Achievements & <span>Milestones</span>
        </h2>
        
        <p className="achievements-subtitle">
          Key achievements and milestone projects I&apos;ve delivered at TCS, showcasing my expertise in building scalable web applications.
        </p>
        
        <div className="achievements-grid">
          {achievementsData.map((achievement, index) => {
            const IconComponent = achievement.icon
            return (
              <div key={index} className="achievement-card">
                <div className="achievement-icon">
                  <IconComponent size={32} />
                </div>
                <div className="achievement-content">
                  <h3>{achievement.title}</h3>
                  <p>{achievement.description}</p>
                  <div className="achievement-highlight">
                    <Star size={16} />
                    <span>{achievement.highlight}</span>
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

export default Achievements
