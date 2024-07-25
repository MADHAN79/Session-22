import React from 'react';
import './PriceCard.css';

const PriceCard = ({ plan }) => {
  return (
    <div className="card">
      <div className="card-header">{plan.name}</div>
      <div className="card-body">
        <h2>{plan.price}</h2>
        <ul>
          {plan.features.map((feature, index) => (
            <li key={index} className={feature.included ? 'included' : 'excluded'}>
              {feature.included ? '✔️' : '❌'} {feature.name}
            </li>
          ))}
        </ul>
        <button>Buy Now !</button>
      </div>
    </div>
  );
};

export default PriceCard;
