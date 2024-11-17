import React from 'react';
import Card from './Card';
import './firstPage.css'; 
import { useNavigate } from 'react-router-dom';

const FirstPage = () => {
  const navigate = useNavigate(); 
  const handlelogout = () => {
    navigate('/');
  };


  const cardData = [
    { name: 'Scenic Views', photoUrl: '../../photos/scenic.jpg', route: '/scenic' },
    { name: 'Crush the Rush', photoUrl: '../../photos/crush_the_rush.jpg' },
    { name: 'Instant Help', photoUrl: '../../photos/help.jpg' },
    { name: 'Station Amenities', photoUrl: '../../photos/Station.jpg' },
    { name: 'Gallery', photoUrl: '../../photos/gallery.jpg' },
    { name: 'Lost & Found', photoUrl: '../../photos/lost.jpg',route:'/lost' },
  ];

  const handleCardClick = (route) => {
    navigate(route); 
  };

  return (
    <div className="first-page">
      <div className="fphead">
        <div className="fpmm"><h5>MAIN MENU</h5></div>
        <div className="fpbtn" onClick={handlelogout}><button>LOGOUT</button></div>
      </div>

      <div className="card-grid">
        {cardData.map((item, index) => (
          <div className="first-page-card" key={index}>
            <Card
              name={item.name}
              photoUrl={item.photoUrl}
              backgroundColor="#f3f3f3"
              onClick={() => handleCardClick(item.route)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FirstPage;
