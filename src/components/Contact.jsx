import { useState } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission - could integrate with email service
    const mailtoLink = `mailto:arshapanicker5622@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`
    window.location.href = mailtoLink
  }

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section-title">
          Get In <span>Touch</span>
        </h2>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>{"Let's work together"}</h3>
            <p>
              {"I'm always interested in hearing about new opportunities, collaborations, and projects. Feel free to reach out if you'd like to discuss how we can work together!"}
            </p>
            
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-item-icon">
                  <Mail size={22} />
                </div>
                <div className="contact-item-text">
                  <h4>Email</h4>
                  <p>
                    <a href="mailto:arshapanicker5622@gmail.com">arshapanicker5622@gmail.com</a>
                  </p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-item-icon">
                  <Phone size={22} />
                </div>
                <div className="contact-item-text">
                  <h4>Phone</h4>
                  <p>
                    <a href="tel:+917974737208">+91 7974737208</a>
                  </p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-item-icon">
                  <MapPin size={22} />
                </div>
                <div className="contact-item-text">
                  <h4>Location</h4>
                  <p>Kochi, Kerala, India 682042</p>
                </div>
              </div>
            </div>
          </div>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input 
                type="text" 
                id="name" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Please enter your name"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input 
                type="email" 
                id="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder=" Please enter your email"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input 
                type="text" 
                id="subject" 
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Project Inquiry"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea 
                id="message" 
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message here..."
                required
              ></textarea>
            </div>
            
            <button type="submit" className="btn btn-primary">
              Send Message
              <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
