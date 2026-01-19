/**
 * SkillBar Component
 * Visual skill level indicator
 */

import React from 'react';
import '../styles/SkillBar.css';

const SkillBar = ({ skill, level }) => {
  return (
    <div className="skill-bar">
      <div className="skill-info">
        <span className="skill-name">{skill}</span>
        <span className="skill-level">{level}%</span>
      </div>
      <div className="skill-progress">
        <div 
          className="skill-progress-fill" 
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;
