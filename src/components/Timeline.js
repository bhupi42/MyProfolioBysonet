/**
 * Timeline Component
 * Displays chronological events in a timeline format
 */

import React from 'react';
import '../styles/Timeline.css';

const TimelineItem = ({ item, index }) => {
  return (
    <div className={`timeline-item ${index % 2 === 0 ? 'timeline-left' : 'timeline-right'}`}>
      <div className="timeline-marker"></div>
      <div className="timeline-content">
        <div className="timeline-header">
          <h3 className="timeline-title">{item.title}</h3>
          <span className="timeline-duration">{item.duration}</span>
        </div>
        <div className="timeline-meta">
          <span className="timeline-company">{item.company}</span>
          {item.location && (
            <>
              <span className="timeline-separator">•</span>
              <span className="timeline-location">{item.location}</span>
            </>
          )}
        </div>
        <p className="timeline-description">{item.description}</p>
        {item.achievements && item.achievements.length > 0 && (
          <ul className="timeline-achievements">
            {item.achievements.map((achievement, idx) => (
              <li key={idx}>{achievement}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

const Timeline = ({ items }) => {
  return (
    <div className="timeline">
      <div className="timeline-line"></div>
      {items.map((item, index) => (
        <TimelineItem key={item.id} item={item} index={index} />
      ))}
    </div>
  );
};

export default Timeline;
