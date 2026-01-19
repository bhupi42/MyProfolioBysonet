/**
 * Projects Page Component
 * Showcase of automation projects and achievements
 */

import React from 'react';
import { projects } from '../data/portfolioData';
import ProjectCard from '../components/ProjectCard';
import '../styles/Projects.css';

const Projects = () => {
  return (
    <div className="projects-page">
      <div className="container">
        {/* Page Header */}
        <div className="page-header">
          <h1 className="page-title">Projects Portfolio</h1>
          <p className="page-subtitle">
            Showcasing enterprise-level automation projects delivered for global clients
          </p>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Summary Section */}
        <div className="projects-summary">
          <div className="summary-card">
            <h2>Project Impact Summary</h2>
            <div className="impact-stats">
              <div className="impact-item">
                <span className="impact-number">50+</span>
                <span className="impact-label">Frameworks Built</span>
              </div>
              <div className="impact-item">
                <span className="impact-number">10,000+</span>
                <span className="impact-label">Tests Automated</span>
              </div>
              <div className="impact-item">
                <span className="impact-number">70%</span>
                <span className="impact-label">Time Reduction</span>
              </div>
              <div className="impact-item">
                <span className="impact-number">99.9%</span>
                <span className="impact-label">Uptime Achieved</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
