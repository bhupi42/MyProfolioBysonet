/**
 * ProjectCard Component
 * Card for displaying project information
 */

import React, { useState } from 'react';
import Card from './Card';
import Button from './Button';
import '../styles/ProjectCard.css';

const ProjectCard = ({ project }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className="project-card" hoverable={true}>
      <div className="project-header">
        <h3 className="project-title">{project.title}</h3>
        <span className="project-duration">{project.duration}</span>
      </div>
      
      <p className="project-company">{project.company}</p>
      <p className="project-role"><strong>Role:</strong> {project.role}</p>
      
      <p className="project-description">{project.description}</p>
      
      <div className="project-technologies">
        {project.technologies.map((tech, index) => (
          <span key={index} className="tech-tag">{tech}</span>
        ))}
      </div>

      {expanded && (
        <div className="project-details">
          <div className="project-section">
            <h4>Key Responsibilities:</h4>
            <ul>
              {project.responsibilities.map((resp, index) => (
                <li key={index}>{resp}</li>
              ))}
            </ul>
          </div>
          
          <div className="project-section">
            <h4>Achievements:</h4>
            <ul className="achievements-list">
              {project.achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          </div>
        </div>
      )}

      <Button 
        variant="secondary" 
        size="small" 
        onClick={toggleExpand}
      >
        {expanded ? 'Show Less' : 'View Details'}
      </Button>
    </Card>
  );
};

export default ProjectCard;
