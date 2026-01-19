/**
 * Contact Page Component
 * Contact form and information
 */

import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import Button from '../components/Button';
import Card from '../components/Card';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulate form submission
    setFormStatus('sending');
    
    setTimeout(() => {
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      setTimeout(() => {
        setFormStatus('');
      }, 5000);
    }, 1500);
  };

  return (
    <div className="contact-page">
      <div className="container">
        {/* Page Header */}
        <div className="page-header">
          <h1 className="page-title">Get In Touch</h1>
          <p className="page-subtitle">
            Let's discuss how I can help elevate your test automation strategy
          </p>
        </div>

        <div className="contact-content">
          {/* Contact Information */}
          <div className="contact-info">
            <Card className="info-card">
              <h2>Contact Information</h2>
              <div className="info-items">
                <div className="info-item">
                  <div className="info-icon">📧</div>
                  <div className="info-details">
                    <h4>Email</h4>
                    <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
                  </div>
                </div>
                
                <div className="info-item">
                  <div className="info-icon">📱</div>
                  <div className="info-details">
                    <h4>Phone</h4>
                    <a href={`tel:${personalInfo.phone}`}>{personalInfo.phone}</a>
                  </div>
                </div>
                
                <div className="info-item">
                  <div className="info-icon">📍</div>
                  <div className="info-details">
                    <h4>Location</h4>
                    <p>{personalInfo.location}</p>
                  </div>
                </div>
                
                <div className="info-item">
                  <div className="info-icon">💼</div>
                  <div className="info-details">
                    <h4>LinkedIn</h4>
                    <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                      View Profile
                    </a>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="availability-card">
              <h3>Availability</h3>
              <p>Available for:</p>
              <ul className="availability-list">
                <li>✓ Full-time opportunities</li>
                <li>✓ Contract projects</li>
                <li>✓ Consulting engagements</li>
                <li>✓ Technical mentorship</li>
              </ul>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="contact-form-wrapper">
            <Card className="form-card">
              <h2>Send Me a Message</h2>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Your Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="What would you like to discuss?"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Tell me about your project or inquiry..."
                  ></textarea>
                </div>

                {formStatus === 'success' && (
                  <div className="form-success">
                    ✓ Thank you! Your message has been sent successfully. I'll get back to you soon.
                  </div>
                )}

                <Button
                  type="submit"
                  variant="primary"
                  size="large"
                  fullWidth={true}
                  disabled={formStatus === 'sending'}
                >
                  {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
