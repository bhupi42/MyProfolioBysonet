/**
 * Skills Page Component
 * Comprehensive display of technical skills and expertise
 */

import React from 'react';
import { skills } from '../data/portfolioData';
import Card from '../components/Card';
import SkillBar from '../components/SkillBar';
import '../styles/Skills.css';

const Skills = () => {
  return (
    <div className="skills-page">
      <div className="container">
        {/* Page Header */}
        <div className="page-header">
          <h1 className="page-title">Skills & Expertise</h1>
          <p className="page-subtitle">My technical toolkit for delivering quality automation solutions</p>
        </div>

        {/* Automation Tools */}
        <div className="skills-section">
          <h2 className="section-title">Automation Tools</h2>
          <Card>
            <div className="skills-list">
              {skills.automationTools.map((skill, index) => (
                <SkillBar key={index} skill={skill.name} level={skill.level} />
              ))}
            </div>
          </Card>
        </div>

        {/* Programming Languages */}
        <div className="skills-section">
          <h2 className="section-title">Programming Languages</h2>
          <Card>
            <div className="skills-list">
              {skills.programmingLanguages.map((skill, index) => (
                <SkillBar key={index} skill={skill.name} level={skill.level} />
              ))}
            </div>
          </Card>
        </div>

        {/* Testing Frameworks */}
        <div className="skills-section">
          <h2 className="section-title">Testing Frameworks</h2>
          <Card>
            <div className="skills-list">
              {skills.frameworks.map((skill, index) => (
                <SkillBar key={index} skill={skill.name} level={skill.level} />
              ))}
            </div>
          </Card>
        </div>

        {/* CI/CD Tools */}
        <div className="skills-section">
          <h2 className="section-title">CI/CD & DevOps</h2>
          <Card>
            <div className="skills-list">
              {skills.cicd.map((skill, index) => (
                <SkillBar key={index} skill={skill.name} level={skill.level} />
              ))}
            </div>
          </Card>
        </div>

        {/* Testing Types */}
        <div className="skills-section">
          <h2 className="section-title">Testing Types & Approaches</h2>
          <div className="tags-grid">
            {skills.testingTypes.map((type, index) => (
              <Card key={index} className="tag-card">
                <span className="tag-icon">✓</span>
                <span className="tag-text">{type}</span>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Tools */}
        <div className="skills-section">
          <h2 className="section-title">Additional Tools & Technologies</h2>
          <div className="tools-grid">
            {skills.tools.map((tool, index) => (
              <div key={index} className="tool-badge">
                {tool}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
