import React from 'react';
import './PremiumFeature.css'
import picture from '../../../images/405 (4).jpg';
import picture2 from '../../../images/405 (3).jpg';
import picture3 from '../../../images/405 (8).jpg';
import picture4 from '../../../images/405 (1).jpg';


const PremiumFeature = () => {
  return (
    <div>
          <h2 className="text-center">Additional Features</h2>
      <div className="cards-list">

        <div className="card-r 1">
          <div className="card_image"> <img alt='' src={picture} /> </div>
          <div className="card_title title-white">
          <p><small>Simple Use</small></p>
            <p>Easy Surfing</p>
          </div>
        </div>

        <div className="card-r 2">
          <div className="card_image">
            <img alt='' src={picture2} />
          </div>
          <div className="card_title title-white">
          <p><small>High Speed</small></p>
            <p>Impression</p>
          </div>
        </div>

        <div className="card-r 3">
          <div className="card_image">
            <img alt='' src={picture3} />
          </div>
          <div className="card_title title-white">
            <p><small>Family Package</small></p>
            <p>Home Comport</p>
          </div>
        </div>

        <div className="card-r 4">
          <div className="card_image">
            <img alt="" src={picture4} />
          </div>
          <div className="card_title title-white">
          <p><small>Awesome Service</small></p>
            <p>Premium Plan</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PremiumFeature;