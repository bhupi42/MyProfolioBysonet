/**
 * Card Component
 * Reusable card container for content
 */

import React from 'react';
import '../styles/Card.css';

const Card = ({ 
  children, 
  title, 
  subtitle, 
  className = '',
  hoverable = false 
}) => {
  const cardClass = `card ${hoverable ? 'card-hoverable' : ''} ${className}`;

  return (
    <div className={cardClass}>
      {(title || subtitle) && (
        <div className="card-header">
          {title && <h3 className="card-title">{title}</h3>}
          {subtitle && <p className="card-subtitle">{subtitle}</p>}
        </div>
      )}
      <div className="card-body">
        {children}
      </div>
    </div>
  );
};

export default Card;
