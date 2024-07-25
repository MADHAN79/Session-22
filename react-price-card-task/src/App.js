import React from 'react';
import './App.css';
import PriceCard from './PriceCard';

const plans = [
  {
    name: 'FREE',
    price: '$0/month',
    features: [
      { name: 'Single User', included: true },
      { name: '50GB Storage', included: true },
      { name: 'Unlimited Public Projects', included: true },
      { name: 'Community Access', included: true },
      { name: 'Unlimited Private Projects', included: false },
      { name: 'Dedicated Phone Support', included: false },
      { name: 'Free Subdomain', included: false },
      { name: 'Monthly Status Reports', included: false }
    ]
  },
  {
    name: 'PLUS',
    price: '$9/month',
    features: [
      { name: '5 Users', included: true },
      { name: '50GB Storage', included: true },
      { name: 'Unlimited Public Projects', included: true },
      { name: 'Community Access', included: true },
      { name: 'Unlimited Private Projects', included: true },
      { name: 'Dedicated Phone Support', included: true },
      { name: 'Free Subdomain', included: true },
      { name: 'Monthly Status Reports', included: false }
    ]
  },
  {
    name: 'PRO',
    price: '$49/month',
    features: [
      { name: 'Unlimited Users', included: true },
      { name: '150GB Storage', included: true },
      { name: 'Unlimited Public Projects', included: true },
      { name: 'Community Access', included: true },
      { name: 'Unlimited Private Projects', included: true },
      { name: 'Dedicated Phone Support', included: true },
      { name: 'Free Subdomain', included: true },
      { name: 'Monthly Status Reports', included: true }
    ]
  }
];

const App = () => {
  return (
    <div className="container">
      {plans.map((plan, index) => (
        <PriceCard key={index} plan={plan} />
      ))}
    </div>
  );
};

export default App;
