import React from 'react';
import './card.css'; // External CSS for styling

const Card = ({ name, photoUrl, backgroundColor }) => {
  return (
    <div className="card-container" style={{ backgroundColor }}>
      <div className="card-photo">
        <img src={photoUrl} alt="Profile" />
      </div>
      <div className="card-name">
        <h3>{name}</h3>
      </div>
    </div>
  );
};

export default Card;
