import React from 'react';
import './card.css'; 

const Card = ({ name, photoUrl, backgroundColor, onClick }) => { 
  return (
    <div className="card-container" style={{ backgroundColor }} onClick={onClick}> 
      <div className="card-photo">
        <img src={photoUrl} alt="Card" />
      </div>
      <div className="card-name">
        <h3>{name}</h3>
      </div>
    </div>
  );
};

export default Card;
